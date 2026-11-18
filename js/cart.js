/**
 * Lógica del Carrito y generación de pedidos por WhatsApp
 * para Pa' Carnívoros Bucaramanga
 */

class CartManager {
  constructor() {
    this.storageKey = "pacarnivoros_cart_v1";
    this.cart = this.loadCart();
    this.orderType = "delivery"; // 'delivery' | 'takeaway' | 'dinein'
    this.paymentMethod = "nequi"; // 'nequi' | 'efectivo' | 'datafono'
    this.customer = {
      name: "",
      phone: "",
      address: "",
      neighborhood: "",
      tableNumber: "",
      cashAmount: "",
      notes: ""
    };
    this.listeners = [];
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("No se pudo cargar el carrito de localStorage:", e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (e) {
      console.warn("No se pudo guardar el carrito:", e);
    }
    this.notify();
  }

  subscribe(callback) {
    this.listeners.push(callback);
    callback(this.getState());
  }

  notify() {
    const state = this.getState();
    this.listeners.forEach((cb) => cb(state));
  }

  /**
   * Genera una clave única para ítems con diferentes configuraciones
   */
  generateItemKey(id, options = {}) {
    return `${id}_${JSON.stringify(options)}`;
  }

  addItem(product, quantity = 1, options = {}, specialNotes = "") {
    const itemKey = this.generateItemKey(product.id, options);
    const existingIndex = this.cart.findIndex((item) => item.key === itemKey);

    // Calcular precio unitario con extras
    let extraCost = 0;
    if (options.extras && Array.isArray(options.extras)) {
      extraCost = options.extras.reduce((sum, ext) => sum + (ext.price || 0), 0);
    }
    const unitPrice = product.price + extraCost;

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        key: itemKey,
        productId: product.id,
        name: product.name,
        category: product.category,
        basePrice: product.price,
        unitPrice: unitPrice,
        quantity: quantity,
        options: options,
        specialNotes: specialNotes
      });
    }

    this.saveCart();
  }

  removeItem(key) {
    this.cart = this.cart.filter((item) => item.key !== key);
    this.saveCart();
  }

  updateQuantity(key, newQty) {
    if (newQty <= 0) {
      this.removeItem(key);
      return;
    }
    const item = this.cart.find((i) => i.key === key);
    if (item) {
      item.quantity = newQty;
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  }

  getDeliveryFee() {
    if (this.orderType !== "delivery") return 0;
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    if (subtotal >= RESTAURANT_INFO.freeDeliveryThreshold) return 0;
    return RESTAURANT_INFO.deliveryFee;
  }

  getTotal() {
    return this.getSubtotal() + this.getDeliveryFee();
  }

  getItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  setOrderType(type) {
    this.orderType = type;
    this.notify();
  }

  setPaymentMethod(method) {
    this.paymentMethod = method;
    this.notify();
  }

  setCustomerData(field, value) {
    this.customer[field] = value;
  }

  getState() {
    return {
      items: this.cart,
      itemCount: this.getItemCount(),
      subtotal: this.getSubtotal(),
      deliveryFee: this.getDeliveryFee(),
      total: this.getTotal(),
      orderType: this.orderType,
      paymentMethod: this.paymentMethod,
      customer: { ...this.customer }
    };
  }

  /**
   * Genera el mensaje formateado para enviar por WhatsApp
   */
  generateWhatsAppMessage() {
    const subtotal = this.getSubtotal();
    const deliveryFee = this.getDeliveryFee();
    const total = this.getTotal();

    if (this.cart.length === 0) {
      return null;
    }

    let orderTypeLabel = "🛵 Domicilio";
    if (this.orderType === "takeaway") orderTypeLabel = "🥡 Para Llevar (Recoger en sede Cra. 3 #63-60)";
    if (this.orderType === "dinein") orderTypeLabel = "🍽️ Consumo en el Local (En mesa)";

    let paymentLabel = "📱 Transferencia Nequi / Daviplata";
    if (this.paymentMethod === "efectivo") {
      paymentLabel = `💵 Efectivo ${this.customer.cashAmount ? `(Paga con: $${this.formatCOP(this.customer.cashAmount)})` : ""}`;
    } else if (this.paymentMethod === "datafono") {
      paymentLabel = "💳 Datáfono / Tarjeta a la entrega";
    }

    const lines = [
      `🔥 *¡NUEVO PEDIDO - PA' CARNÍVOROS!* 🔥`,
      `------------------------------------------`,
      `*Modalidad:* ${orderTypeLabel}`,
      `*Cliente:* ${this.customer.name || "Cliente Carnívoro"}`,
      `*Teléfono:* ${this.customer.phone || "No especificado"}`,
    ];

    if (this.orderType === "delivery") {
      lines.push(`*Dirección:* ${this.customer.address || "Pendiente por confirmar"}`);
      if (this.customer.neighborhood) {
        lines.push(`*Barrio / Sector:* ${this.customer.neighborhood}`);
      }
    } else if (this.orderType === "dinein") {
      lines.push(`*Mesa #:* ${this.customer.tableNumber || "Por asignar"}`);
    }

    lines.push(`------------------------------------------`);
    lines.push(`📋 *DETALLE DEL PEDIDO:*`);

    this.cart.forEach((item, index) => {
      lines.push(`\n*${index + 1}. ${item.quantity}x ${item.name}* - $${this.formatCOP(item.unitPrice * item.quantity)}`);
      
      // Término de la carne
      if (item.options && item.options.meatDoneness) {
        lines.push(`   🥩 _Término:_ ${item.options.meatDoneness}`);
      }
      
      // Sabor / variedad
      if (item.options && item.options.flavor) {
        lines.push(`   🥤 _Sabor:_ ${item.options.flavor}`);
      }

      // Adicionales
      if (item.options && item.options.extras && item.options.extras.length > 0) {
        const extrasStr = item.options.extras.map((e) => `+${e.name} ($${this.formatCOP(e.price)})`).join(", ");
        lines.push(`   🧀 _Extras:_ ${extrasStr}`);
      }

      // Notas especiales
      if (item.specialNotes && item.specialNotes.trim()) {
        lines.push(`   📝 _Nota:_ ${item.specialNotes.trim()}`);
      }
    });

    lines.push(`\n------------------------------------------`);
    lines.push(`💰 *RESUMEN DE PAGO:*`);
    lines.push(`Subtotal: $${this.formatCOP(subtotal)}`);
    if (this.orderType === "delivery") {
      if (deliveryFee === 0) {
        lines.push(`Domicilio: ¡GRATIS! 🎉 (Superó los $${this.formatCOP(RESTAURANT_INFO.freeDeliveryThreshold)})`);
      } else {
        lines.push(`Domicilio: $${this.formatCOP(deliveryFee)}`);
      }
    }
    lines.push(`*TOTAL A PAGAR: $${this.formatCOP(total)}*`);
    lines.push(`*Método de pago:* ${paymentLabel}`);

    if (this.customer.notes && this.customer.notes.trim()) {
      lines.push(`\n💬 *Observaciones:* ${this.customer.notes.trim()}`);
    }

    lines.push(`------------------------------------------`);
    lines.push(`📍 _Pa' Carnívoros Bucaramanga - Cra. 3 #63-60_`);
    lines.push(`_¡Gracias por tu compra! Quedo atento a la confirmación._`);

    return lines.join("\n");
  }

  getWhatsAppUrl() {
    const message = this.generateWhatsAppMessage();
    if (!message) return null;
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
  }

  formatCOP(amount) {
    return Number(amount).toLocaleString("es-CO");
  }
}

// Instancia global
window.cartManager = new CartManager();
