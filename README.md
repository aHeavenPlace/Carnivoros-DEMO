# 🥩 Pa' Carnívoros Bucaramanga - American Grill & Mobile-First Web App

Menú digital interactivo, catálogo gastronómico y sistema de pedidos directos a WhatsApp para **Pa' Carnívoros** en **Bucaramanga, Santander** (Cra. 3 #63-60).

Optimizado con **Mobile-First UX**, **Thumb-Zone Optimization**, **Bottom-Sheets Nativos**, y directrices de **UI/UX Pro Max**.

---

## 📱 Optimizaciones Especiales para Teléfonos Celulares

Dado que más del 85% de los clientes acceden desde dispositivos móviles, la interfaz fue diseñada bajo estándares de aplicaciones móviles nativas (como UberEats, Rappi y DoorDash):

1. **Sticky Thumb Bar (Barra Flotante del Carrito):**
   - Tan pronto el cliente agrega un plato, emerge una barra flotante en la zona natural del pulgar (inferior de la pantalla).
   - Muestra en tiempo real la cantidad de platos, el total acumulado y un acceso directo a la orden sin necesidad de subir hasta el encabezado.

2. **Native Bottom-Sheets (Hojas Deslizables Inferiores):**
   - **Personalización de Platos:** En pantallas móviles, el modal se convierte en un *Bottom-Sheet* deslizable desde abajo con manija táctil (*pull handle*), esquinas redondeadas y cierre por deslizamiento táctil (*swipe-to-dismiss*).
   - **Bandeja de Pedido:** La bandeja de compras se despliega desde abajo cubriendo el 92% de la pantalla para una revisión cómoda con una sola mano.

3. **Zona de Toque Cómoda (Touch Targets ≥ 44px):**
   - Todos los botones, pestañas, selectores de término de carne y adicionales cuentan con un área mínima de **44×44px** y separación de al menos 8px.

4. **Prevención de Zoom en iOS Safari:**
   - Tipografía en campos de texto configurada a **16px** estricta para evitar que iOS Safari haga zoom no deseado al enfocar un campo.

5. **Soporte de Safe-Areas (iPhone & Android):**
   - Padding dinámico mediante `env(safe-area-inset-bottom)` para que ningún botón o barra quede tapado por la barra de inicio de iPhone o los botones de navegación del sistema.

6. **Hero Banner Compacto en Móvil:**
   - Altura y proporciones adaptadas para que el catálogo de comida y las categorías sean visibles de inmediato (*above the fold*), sin tener que deslizar 3 pantallas.

---

## 🎨 Sistema de Diseño Implementado

- **Estética:** American Smokehouse, brasas al carbón de roble y madera ahumada.
- **Tipografía:** `Bebas Neue` (titulares pesados de asador) + `Plus Jakarta Sans` (cuerpo editorial claro).
- **Fotografía Gastronómica Real:** Cortes Angus, smash burgers, papas monstruo y costillas BBQ con respaldo automático offline.
- **Logo Oficial:** Incorporado desde `logo.jpg` en header, hero banner, mapa y footer.

---

## 🚀 Cómo Probar Localmente

```bash
python3 server.py
```
Abre en tu navegador o dispositivo móvil en red local: `http://localhost:8080`.

---

## 🔗 Repositorio GitHub

- **URL:** [https://github.com/aHeavenPlace/Carnivoros-DEMO](https://github.com/aHeavenPlace/Carnivoros-DEMO)
- **Rama:** `main`
