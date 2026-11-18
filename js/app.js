/**
 * Pa' Carnívoros Bucaramanga - American Smokehouse & Grill Controller
 * Fotografías gastronómicas reales, micro-interacciones fluidas y checkout WhatsApp.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Estado local
  let currentCategory = "all";
  let searchQuery = "";
  let activeModalProduct = null;
  let modalSelectedMeat = null;
  let modalSelectedFlavor = null;
  let modalSelectedExtras = [];
  let modalQuantity = 1;

  // Inyectar iconos SVG desde ICONS
  function injectStaticIcons() {
    const cartIconHeader = document.getElementById("cart-icon-header");
    if (cartIconHeader) cartIconHeader.innerHTML = ICONS.bag;

    const heroFlame = document.getElementById("hero-flame-icon");
    if (heroFlame) heroFlame.innerHTML = ICONS.flame;
    const heroStar = document.getElementById("hero-star-icon");
    if (heroStar) heroStar.innerHTML = ICONS.star;
    const heroTag = document.getElementById("hero-tag-icon");
    if (heroTag) heroTag.innerHTML = ICONS.tag;
    const heroPin = document.getElementById("hero-pin-icon");
    if (heroPin) heroPin.innerHTML = ICONS.mapPin;
    const heroMoto = document.getElementById("hero-moto-icon");
    if (heroMoto) heroMoto.innerHTML = ICONS.motorcycle;

    const searchIconBox = document.getElementById("search-icon-box");
    if (searchIconBox) searchIconBox.innerHTML = ICONS.search;

    const locPin = document.getElementById("loc-pin-icon");
    if (locPin) locPin.innerHTML = ICONS.mapPin;
    const locClock = document.getElementById("loc-clock-icon");
    if (locClock) locClock.innerHTML = ICONS.clock;
    const locMoto = document.getElementById("loc-moto-icon");
    if (locMoto) locMoto.innerHTML = ICONS.motorcycle;
    const locNav = document.getElementById("loc-nav-icon");
    if (locNav) locNav.innerHTML = ICONS.navigation;
    const locBag = document.getElementById("loc-bag-icon");
    if (locBag) locBag.innerHTML = ICONS.bag;
    const mapStar = document.getElementById("map-star-icon");
    if (mapStar) mapStar.innerHTML = ICONS.star;

    const btnCloseModal = document.getElementById("btn-close-modal");
    if (btnCloseModal) btnCloseModal.innerHTML = ICONS.close;
    const btnModalMinus = document.getElementById("btn-modal-minus");
    if (btnModalMinus) btnModalMinus.innerHTML = ICONS.minus;
    const btnModalPlus = document.getElementById("btn-modal-plus");
    if (btnModalPlus) btnModalPlus.innerHTML = ICONS.plus;

    const btnCloseDrawer = document.getElementById("btn-close-drawer");
    if (btnCloseDrawer) btnCloseDrawer.innerHTML = ICONS.close;
    const emptyCartIcon = document.getElementById("empty-cart-icon");
    if (emptyCartIcon) emptyCartIcon.innerHTML = ICONS.bag;

    const tabMoto = document.getElementById("tab-icon-moto");
    if (tabMoto) tabMoto.innerHTML = ICONS.motorcycle;
    const tabTakeaway = document.getElementById("tab-icon-takeaway");
    if (tabTakeaway) tabTakeaway.innerHTML = ICONS.takeaway;
    const tabDinein = document.getElementById("tab-icon-dinein");
    if (tabDinein) tabDinein.innerHTML = ICONS.utensils;

    const payNequi = document.getElementById("pay-icon-nequi");
    if (payNequi) payNequi.innerHTML = ICONS.smartphone;
    const payCash = document.getElementById("pay-icon-cash");
    if (payCash) payCash.innerHTML = ICONS.cash;
    const payCard = document.getElementById("pay-icon-card");
    if (payCard) payCard.innerHTML = ICONS.creditCard;

    const waCheckoutIcon = document.getElementById("wa-checkout-icon");
    if (waCheckoutIcon) waCheckoutIcon.innerHTML = ICONS.whatsapp;

    const mobIconMenu = document.getElementById("mob-icon-menu");
    if (mobIconMenu) mobIconMenu.innerHTML = CATEGORY_ICONS.burgers;
    const mobIconLoc = document.getElementById("mob-icon-loc");
    if (mobIconLoc) mobIconLoc.innerHTML = ICONS.mapPin;
    const mobIconCart = document.getElementById("mob-icon-cart");
    if (mobIconCart) mobIconCart.innerHTML = ICONS.bag;
    const mobIconWa = document.getElementById("mob-icon-wa");
    if (mobIconWa) mobIconWa.innerHTML = ICONS.whatsapp;
  }

  // Elementos DOM
  const categoriesContainer = document.getElementById("categories-bar");
  const productsContainer = document.getElementById("products-grid");
  const searchInput = document.getElementById("search-input");
  const sectionTitle = document.getElementById("section-title");
  const itemsCountBadge = document.getElementById("items-count");

  // Carrito Drawer DOM
  const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
  const cartItemsList = document.getElementById("cart-items-list");
  const cartEmptyState = document.getElementById("cart-empty-state");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const cartDeliveryRow = document.getElementById("cart-delivery-row");
  const cartDeliveryFeeEl = document.getElementById("cart-delivery-fee");
  const cartTotalEl = document.getElementById("cart-total");
  const btnCheckoutWhatsapp = document.getElementById("btn-checkout-whatsapp");
  const cartCountHeaders = document.querySelectorAll(".cart-counter");

  // Formulario del carrito DOM
  const orderTypeTabs = document.querySelectorAll(".type-tab");
  const deliveryFields = document.getElementById("delivery-fields");
  const dineinFields = document.getElementById("dinein-fields");
  const paymentCards = document.querySelectorAll(".payment-card-btn");
  const cashAmountWrapper = document.getElementById("cash-amount-wrapper");

  // Modal de Personalización DOM
  const productModalOverlay = document.getElementById("product-modal-overlay");
  const modalImgContainer = document.getElementById("modal-img-container");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalOptionsBody = document.getElementById("modal-options-body");
  const modalQtyDisplay = document.getElementById("modal-qty");
  const btnModalMinus = document.getElementById("btn-modal-minus");
  const btnModalPlus = document.getElementById("btn-modal-plus");
  const btnModalAdd = document.getElementById("btn-modal-add");
  const modalPriceTotal = document.getElementById("modal-price-total");
  const modalNotesInput = document.getElementById("modal-notes");

  // Inputs cliente
  const inputName = document.getElementById("customer-name");
  const inputPhone = document.getElementById("customer-phone");
  const inputAddress = document.getElementById("customer-address");
  const inputNeighborhood = document.getElementById("customer-neighborhood");
  const inputTable = document.getElementById("customer-table");
  const inputCash = document.getElementById("customer-cash");
  const inputNotes = document.getElementById("customer-order-notes");

  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");
  const addressError = document.getElementById("address-error");

  const toastContainer = document.getElementById("toast-container");

  // --------------------------------------------------------------------------
  // 1. RENDERIZADO DE CATEGORÍAS
  // --------------------------------------------------------------------------
  function renderCategories() {
    categoriesContainer.innerHTML = CATEGORIES.map((cat) => {
      const isActive = cat.id === currentCategory ? "active" : "";
      const iconSvg = CATEGORY_ICONS[cat.id] || ICONS.flame;
      return `
        <button class="cat-pill ${isActive}" data-category="${cat.id}" role="tab" aria-selected="${cat.id === currentCategory}">
          <span class="cat-icon">${iconSvg}</span>
          <span>${cat.name}</span>
        </button>
      `;
    }).join("");

    categoriesContainer.querySelectorAll(".cat-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentCategory = btn.getAttribute("data-category");
        renderCategories();
        renderProducts();
        updateSectionTitle();
      });
    });
  }

  function updateSectionTitle() {
    const catObj = CATEGORIES.find((c) => c.id === currentCategory);
    const catIcon = catObj ? (CATEGORY_ICONS[catObj.id] || ICONS.flame) : ICONS.flame;
    sectionTitle.innerHTML = `<span style="display:inline-flex; align-items:center; margin-right: 8px;">${catIcon}</span> ${catObj ? catObj.name : "La Carta al Fuego"}`;
  }

  // --------------------------------------------------------------------------
  // 2. RENDERIZADO DE PRODUCTOS CON FOTOGRAFÍA REAL
  // --------------------------------------------------------------------------
  function renderProducts() {
    const filtered = MENU_ITEMS.filter((item) => {
      const matchesCat = currentCategory === "all" || item.category === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });

    itemsCountBadge.textContent = `${filtered.length} cortes y platos listos`;

    if (filtered.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
          <div style="display:inline-flex; padding: 18px; border-radius: 50%; background: var(--color-grill-card); margin-bottom: 1rem; color: var(--color-ember); border: 1px dashed var(--color-grill-border);">
            ${ICONS.search}
          </div>
          <h3 style="color: #fff; font-size: 1.6rem; margin-bottom: 0.35rem; font-family: var(--font-display); letter-spacing: 0.04em;">No se encontraron cortes ni platos</h3>
          <p style="font-size: 0.95rem;">Prueba buscando otra palabra clave o explora todas las categorías al fuego.</p>
        </div>
      `;
      return;
    }

    productsContainer.innerHTML = filtered.map((item) => {
      const tagText = item.tag ? item.tag.replace(/[^\w\s\dÁÉÍÓÚáéíóúñÑ/]/g, "").trim() : "";
      return `
        <article class="product-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${item.name}, $${item.price.toLocaleString("es-CO")}">
          <div class="card-media-wrapper">
            ${item.tag ? `<span class="card-badge badge-${item.badgeColor || 'orange'}"><span style="display:inline-flex;">${ICONS.flame}</span> ${tagText}</span>` : ""}
            <img src="${item.image}" alt="${item.name}" class="card-media-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div style="display:none; width:100%; height:100%;">
              ${getFoodIllustration(item.category)}
            </div>
            <div class="card-media-overlay"></div>
          </div>
          <div class="card-body">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-desc">${item.description}</p>
            <div class="card-footer">
              <div class="card-price">
                <small>COP</small> $${item.price.toLocaleString("es-CO")}
              </div>
              <button class="btn-add btn-card-action" data-id="${item.id}" aria-label="Agregar ${item.name} a la orden">
                <span>${item.customizable ? "Personalizar" : "Agregar"}</span>
                <span style="display:inline-flex;">${ICONS.plus}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Botones de acción
    productsContainer.querySelectorAll(".btn-card-action").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const prodId = btn.getAttribute("data-id");
        const product = MENU_ITEMS.find((p) => p.id === prodId);
        if (!product) return;

        if (product.customizable) {
          openCustomizationModal(product);
        } else {
          window.cartManager.addItem(product, 1);
          showToast(`¡${product.name} sumado a la orden!`, ICONS.check);
        }
      });
    });

    productsContainer.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", () => {
        const prodId = card.getAttribute("data-id");
        const product = MENU_ITEMS.find((p) => p.id === prodId);
        if (product) openCustomizationModal(product);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const prodId = card.getAttribute("data-id");
          const product = MENU_ITEMS.find((p) => p.id === prodId);
          if (product) openCustomizationModal(product);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. BUSCADOR
  // --------------------------------------------------------------------------
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // --------------------------------------------------------------------------
  // 4. MODAL DE PERSONALIZACIÓN
  // --------------------------------------------------------------------------
  function openCustomizationModal(product) {
    activeModalProduct = product;
    modalQuantity = 1;
    modalSelectedExtras = [];
    modalNotesInput.value = "";

    modalTitle.textContent = product.name;
    modalDesc.textContent = product.description;
    modalImgContainer.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div style="display:none; width:100%; height:100%;">
        ${getFoodIllustration(product.category)}
      </div>
    `;
    modalQtyDisplay.textContent = modalQuantity;

    let optionsHtml = "";

    if (product.options) {
      if (product.options.meatDoneness && product.options.meatDoneness.length > 0) {
        modalSelectedMeat = product.options.meatDoneness[0];
        optionsHtml += `
          <div class="modal-section-title">
            <span>Término al carbón</span>
            <small style="color: var(--color-text-dim); font-size: 0.78rem;">Requerido</small>
          </div>
          <div class="options-group" role="radiogroup" aria-label="Término de la carne">
            ${product.options.meatDoneness.map((doneness, idx) => `
              <label class="option-radio">
                <span class="option-label">
                  <input type="radio" name="modal-meat" value="${doneness}" ${idx === 0 ? "checked" : ""}>
                  ${doneness}
                </span>
              </label>
            `).join("")}
          </div>
        `;
      }

      if (product.options.flavor && product.options.flavor.length > 0) {
        modalSelectedFlavor = product.options.flavor[0];
        optionsHtml += `
          <div class="modal-section-title">
            <span>Elige tu sabor</span>
            <small style="color: var(--color-text-dim); font-size: 0.78rem;">Requerido</small>
          </div>
          <div class="options-group" role="radiogroup" aria-label="Sabor de bebida">
            ${product.options.flavor.map((flavor, idx) => `
              <label class="option-radio">
                <span class="option-label">
                  <input type="radio" name="modal-flavor" value="${flavor}" ${idx === 0 ? "checked" : ""}>
                  ${flavor}
                </span>
              </label>
            `).join("")}
          </div>
        `;
      }

      if (product.options.extras && product.options.extras.length > 0) {
        optionsHtml += `
          <div class="modal-section-title">
            <span>Adicionales & Toppings Smokehouse</span>
            <small style="color: var(--color-text-dim); font-size: 0.78rem;">Opcional</small>
          </div>
          <div class="options-group">
            ${product.options.extras.map((extra) => `
              <label class="option-checkbox">
                <span class="option-label">
                  <input type="checkbox" class="extra-check" data-name="${extra.name}" data-price="${extra.price}">
                  ${extra.name}
                </span>
                <span class="option-price">+$${extra.price.toLocaleString("es-CO")}</span>
              </label>
            `).join("")}
          </div>
        `;
      }
    }

    modalOptionsBody.innerHTML = optionsHtml;

    modalOptionsBody.querySelectorAll("input[name='modal-meat']").forEach((radio) => {
      radio.addEventListener("change", (e) => {
        modalSelectedMeat = e.target.value;
      });
    });

    modalOptionsBody.querySelectorAll("input[name='modal-flavor']").forEach((radio) => {
      radio.addEventListener("change", (e) => {
        modalSelectedFlavor = e.target.value;
      });
    });

    modalOptionsBody.querySelectorAll(".extra-check").forEach((check) => {
      check.addEventListener("change", () => {
        const name = check.getAttribute("data-name");
        const price = parseInt(check.getAttribute("data-price"), 10);
        if (check.checked) {
          modalSelectedExtras.push({ name, price });
        } else {
          modalSelectedExtras = modalSelectedExtras.filter((e) => e.name !== name);
        }
        updateModalPrice();
      });
    });

    updateModalPrice();
    productModalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCustomizationModal() {
    productModalOverlay.classList.remove("open");
    document.body.style.overflow = "";
    activeModalProduct = null;
  }

  function updateModalPrice() {
    if (!activeModalProduct) return;
    const extrasTotal = modalSelectedExtras.reduce((sum, e) => sum + e.price, 0);
    const unitPrice = activeModalProduct.price + extrasTotal;
    const total = unitPrice * modalQuantity;
    modalPriceTotal.textContent = `$${total.toLocaleString("es-CO")}`;
  }

  btnModalMinus.addEventListener("click", () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      modalQtyDisplay.textContent = modalQuantity;
      updateModalPrice();
    }
  });

  btnModalPlus.addEventListener("click", () => {
    modalQuantity++;
    modalQtyDisplay.textContent = modalQuantity;
    updateModalPrice();
  });

  btnModalAdd.addEventListener("click", () => {
    if (!activeModalProduct) return;

    const options = {};
    if (modalSelectedMeat) options.meatDoneness = modalSelectedMeat;
    if (modalSelectedFlavor) options.flavor = modalSelectedFlavor;
    if (modalSelectedExtras.length > 0) options.extras = [...modalSelectedExtras];

    const notes = modalNotesInput.value.trim();

    window.cartManager.addItem(activeModalProduct, modalQuantity, options, notes);
    showToast(`¡${modalQuantity}x ${activeModalProduct.name} agregada!`, ICONS.check);
    closeCustomizationModal();
  });

  document.getElementById("btn-close-modal").addEventListener("click", closeCustomizationModal);
  productModalOverlay.addEventListener("click", (e) => {
    if (e.target === productModalOverlay) closeCustomizationModal();
  });

  // --------------------------------------------------------------------------
  // 5. CARRITO Y CHECKOUT WHATSAPP
  // --------------------------------------------------------------------------
  function openCartDrawer() {
    cartDrawerOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCartDrawer() {
    cartDrawerOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".btn-open-cart").forEach((btn) => {
    btn.addEventListener("click", openCartDrawer);
  });

  document.getElementById("btn-close-drawer").addEventListener("click", closeCartDrawer);
  cartDrawerOverlay.addEventListener("click", (e) => {
    if (e.target === cartDrawerOverlay) closeCartDrawer();
  });

  orderTypeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      orderTypeTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const type = tab.getAttribute("data-type");
      window.cartManager.setOrderType(type);

      if (type === "delivery") {
        deliveryFields.style.display = "flex";
        dineinFields.style.display = "none";
      } else if (type === "dinein") {
        deliveryFields.style.display = "none";
        dineinFields.style.display = "block";
      } else {
        deliveryFields.style.display = "none";
        dineinFields.style.display = "none";
      }
    });
  });

  paymentCards.forEach((btn) => {
    btn.addEventListener("click", () => {
      paymentCards.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const method = btn.getAttribute("data-method");
      window.cartManager.setPaymentMethod(method);

      if (method === "efectivo") {
        cashAmountWrapper.style.display = "block";
      } else {
        cashAmountWrapper.style.display = "none";
      }
    });
  });

  function validateField(input, errorEl, condition) {
    if (!condition) {
      input.classList.add("error");
      errorEl.classList.add("visible");
      return false;
    } else {
      input.classList.remove("error");
      errorEl.classList.remove("visible");
      return true;
    }
  }

  inputName.addEventListener("blur", () => {
    validateField(inputName, nameError, inputName.value.trim().length >= 2);
  });
  inputName.addEventListener("input", (e) => {
    if (inputName.classList.contains("error")) {
      validateField(inputName, nameError, inputName.value.trim().length >= 2);
    }
    window.cartManager.setCustomerData("name", e.target.value);
  });

  inputPhone.addEventListener("blur", () => {
    validateField(inputPhone, phoneError, inputPhone.value.trim().length >= 7);
  });
  inputPhone.addEventListener("input", (e) => {
    if (inputPhone.classList.contains("error")) {
      validateField(inputPhone, phoneError, inputPhone.value.trim().length >= 7);
    }
    window.cartManager.setCustomerData("phone", e.target.value);
  });

  inputAddress.addEventListener("blur", () => {
    if (window.cartManager.orderType === "delivery") {
      validateField(inputAddress, addressError, inputAddress.value.trim().length >= 5);
    }
  });
  inputAddress.addEventListener("input", (e) => {
    if (inputAddress.classList.contains("error")) {
      validateField(inputAddress, addressError, inputAddress.value.trim().length >= 5);
    }
    window.cartManager.setCustomerData("address", e.target.value);
  });

  inputNeighborhood.addEventListener("input", (e) => window.cartManager.setCustomerData("neighborhood", e.target.value));
  inputTable.addEventListener("input", (e) => window.cartManager.setCustomerData("tableNumber", e.target.value));
  inputCash.addEventListener("input", (e) => window.cartManager.setCustomerData("cashAmount", e.target.value));
  inputNotes.addEventListener("input", (e) => window.cartManager.setCustomerData("notes", e.target.value));

  btnCheckoutWhatsapp.addEventListener("click", () => {
    const state = window.cartManager.getState();
    if (state.items.length === 0) {
      showToast("Agrega al menos un plato a tu carrito para ordenar.", ICONS.bag);
      return;
    }

    const isNameValid = validateField(inputName, nameError, inputName.value.trim().length >= 2);
    const isPhoneValid = validateField(inputPhone, phoneError, inputPhone.value.trim().length >= 7);
    let isAddressValid = true;

    if (state.orderType === "delivery") {
      isAddressValid = validateField(inputAddress, addressError, inputAddress.value.trim().length >= 5);
    }

    if (!isNameValid) {
      inputName.focus();
      showToast("Por favor completa tu nombre antes de enviar.", ICONS.close);
      return;
    }
    if (!isPhoneValid) {
      inputPhone.focus();
      showToast("Por favor ingresa un teléfono de contacto.", ICONS.phone);
      return;
    }
    if (!isAddressValid) {
      inputAddress.focus();
      showToast("Por favor indica la dirección de entrega en Bucaramanga.", ICONS.mapPin);
      return;
    }

    const originalText = btnCheckoutWhatsapp.innerHTML;
    btnCheckoutWhatsapp.innerHTML = `<span style="display:inline-flex;">${ICONS.clock}</span> Generando despacho...`;
    btnCheckoutWhatsapp.disabled = true;

    setTimeout(() => {
      const waUrl = window.cartManager.getWhatsAppUrl();
      if (waUrl) {
        window.open(waUrl, "_blank");
        showToast("¡Redirigiendo a WhatsApp de Pa' Carnívoros!", ICONS.whatsapp);
      }
      btnCheckoutWhatsapp.innerHTML = originalText;
      btnCheckoutWhatsapp.disabled = false;
    }, 350);
  });

  window.cartManager.subscribe((state) => {
    cartCountHeaders.forEach((el) => {
      el.textContent = state.itemCount;
    });

    if (state.items.length === 0) {
      cartItemsList.innerHTML = "";
      cartEmptyState.style.display = "block";
      btnCheckoutWhatsapp.disabled = true;
    } else {
      cartEmptyState.style.display = "none";
      btnCheckoutWhatsapp.disabled = false;

      cartItemsList.innerHTML = state.items.map((item) => {
        let optionsDetail = "";
        if (item.options) {
          const parts = [];
          if (item.options.meatDoneness) parts.push(`Término: ${item.options.meatDoneness}`);
          if (item.options.flavor) parts.push(`Sabor: ${item.options.flavor}`);
          if (item.options.extras && item.options.extras.length > 0) {
            parts.push(`Extras: ${item.options.extras.map((e) => e.name).join(", ")}`);
          }
          if (item.specialNotes) parts.push(`Nota: "${item.specialNotes}"`);
          if (parts.length > 0) {
            optionsDetail = `<div class="cart-item-options">${parts.map((p) => `<span>• ${p}</span>`).join("")}</div>`;
          }
        }

        return `
          <div class="cart-item" data-key="${item.key}">
            <div class="cart-item-header">
              <span class="cart-item-title">${item.quantity}x ${item.name}</span>
              <span class="cart-item-price">$${(item.unitPrice * item.quantity).toLocaleString("es-CO")}</span>
            </div>
            ${optionsDetail}
            <div class="cart-item-controls">
              <div class="qty-control">
                <button class="btn-qty btn-cart-dec" data-key="${item.key}" aria-label="Reducir cantidad de ${item.name}">
                  ${ICONS.minus}
                </button>
                <span class="qty-display">${item.quantity}</span>
                <button class="btn-qty btn-cart-inc" data-key="${item.key}" aria-label="Aumentar cantidad de ${item.name}">
                  ${ICONS.plus}
                </button>
              </div>
              <button class="btn-remove-item" data-key="${item.key}" aria-label="Eliminar ${item.name}">
                <span style="display:inline-flex;">${ICONS.trash}</span> Quitar
              </button>
            </div>
          </div>
        `;
      }).join("");

      cartItemsList.querySelectorAll(".btn-cart-dec").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-key");
          const item = state.items.find((i) => i.key === key);
          if (item) window.cartManager.updateQuantity(key, item.quantity - 1);
        });
      });

      cartItemsList.querySelectorAll(".btn-cart-inc").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-key");
          const item = state.items.find((i) => i.key === key);
          if (item) window.cartManager.updateQuantity(key, item.quantity + 1);
        });
      });

      cartItemsList.querySelectorAll(".btn-remove-item").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-key");
          window.cartManager.removeItem(key);
        });
      });
    }

    cartSubtotalEl.textContent = `$${state.subtotal.toLocaleString("es-CO")}`;

    if (state.orderType === "delivery") {
      cartDeliveryRow.style.display = "flex";
      if (state.deliveryFee === 0 && state.subtotal > 0) {
        cartDeliveryFeeEl.innerHTML = `<span style="color: #4ade80; font-weight: 800;">¡GRATIS!</span>`;
      } else {
        cartDeliveryFeeEl.textContent = `$${state.deliveryFee.toLocaleString("es-CO")}`;
      }
    } else {
      cartDeliveryRow.style.display = "none";
    }

    cartTotalEl.textContent = `$${state.total.toLocaleString("es-CO")}`;
  });

  // --------------------------------------------------------------------------
  // 6. TOAST NOTIFICACIONES
  // --------------------------------------------------------------------------
  function showToast(message, iconSvg = ICONS.flame) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span style="display:inline-flex; color: var(--color-ember);">${iconSvg}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 0.25s ease, transform 0.25s ease";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(14px)";
      setTimeout(() => toast.remove(), 260);
    }, 2800);
  }

  // Inicializar
  injectStaticIcons();
  renderCategories();
  renderProducts();
});
