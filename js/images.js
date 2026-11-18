/**
 * Generador de imágenes e ilustraciones SVG temáticas para Pa' Carnívoros
 */

const FOOD_SVGS = {
  // Hamburguesa
  burgers: `
    <svg viewBox="0 0 400 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="food-illustration">
      <defs>
        <radialGradient id="bg-burgers" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#2a150c"/>
          <stop offset="100%" stop-color="#140a06"/>
        </radialGradient>
        <linearGradient id="bun-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
        <linearGradient id="patty" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#451a03"/>
          <stop offset="100%" stop-color="#260e02"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#ea580c" flood-opacity="0.3"/>
        </filter>
      </defs>
      <rect width="400" height="280" fill="url(#bg-burgers)"/>
      <circle cx="200" cy="140" r="100" fill="#f97316" opacity="0.08" filter="url(#glow)"/>
      
      <!-- Plato / Tabla de madera -->
      <ellipse cx="200" cy="225" rx="140" ry="25" fill="#1c1917" stroke="#44403c" stroke-width="2"/>
      
      <!-- Pan inferior -->
      <path d="M 120 190 Q 200 200 280 190 C 275 210 125 210 120 190 Z" fill="#b45309"/>
      
      <!-- Salsa tártara / base -->
      <path d="M 125 188 Q 200 192 275 188 Q 200 185 125 188" fill="#fef08a" opacity="0.8"/>
      
      <!-- Carne de Res al carbón -->
      <rect x="115" y="165" width="170" height="24" rx="10" fill="url(#patty)"/>
      <!-- Marcas de parrilla -->
      <line x1="135" y1="167" x2="165" y2="187" stroke="#170801" stroke-width="3" stroke-linecap="round"/>
      <line x1="175" y1="167" x2="205" y2="187" stroke="#170801" stroke-width="3" stroke-linecap="round"/>
      <line x1="215" y1="167" x2="245" y2="187" stroke="#170801" stroke-width="3" stroke-linecap="round"/>
      
      <!-- Queso Cheddar fundido -->
      <path d="M 115 165 C 130 172 140 182 148 185 C 160 170 170 180 185 185 C 200 170 215 182 230 185 C 245 172 260 180 285 165 Z" fill="#f59e0b"/>
      
      <!-- Tocineta crujiente -->
      <path d="M 120 156 Q 160 150 200 158 Q 240 166 280 156 Q 240 162 200 154 Q 160 148 120 156" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
      <path d="M 130 152 Q 170 158 210 150 Q 250 156 270 148" stroke="#fca5a5" stroke-width="2" fill="none"/>
      
      <!-- Cebolla caramelizada & Tomate -->
      <path d="M 125 148 C 150 144 250 144 275 148 C 265 155 135 155 125 148" fill="#ef4444"/>
      
      <!-- Lechuga crespa -->
      <path d="M 110 145 C 120 140 135 150 150 142 C 165 152 180 140 195 148 C 210 140 225 150 240 142 C 255 150 270 140 290 145 C 285 152 115 152 110 145 Z" fill="#22c55e"/>
      
      <!-- Pan superior (Brioche dorado) -->
      <path d="M 115 140 C 115 80 285 80 285 140 Z" fill="url(#bun-top)"/>
      <path d="M 130 115 Q 200 85 270 115" stroke="#fef3c7" stroke-width="4" opacity="0.4" fill="none"/>
      
      <!-- Ajonjolí -->
      <ellipse cx="160" cy="105" rx="3" ry="1.5" fill="#fef3c7" transform="rotate(-15 160 105)"/>
      <ellipse cx="190" cy="98" rx="3" ry="1.5" fill="#fef3c7" transform="rotate(10 190 98)"/>
      <ellipse cx="225" cy="102" rx="3" ry="1.5" fill="#fef3c7" transform="rotate(-5 225 102)"/>
      <ellipse cx="145" cy="122" rx="3" ry="1.5" fill="#fef3c7" transform="rotate(25 145 122)"/>
      <ellipse cx="250" cy="120" rx="3" ry="1.5" fill="#fef3c7" transform="rotate(-20 250 120)"/>
      <ellipse cx="205" cy="115" rx="3" ry="1.5" fill="#fef3c7" transform="rotate(8 205 115)"/>
    </svg>
  `,

  // Papas Locas
  papas: `
    <svg viewBox="0 0 400 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="food-illustration">
      <defs>
        <radialGradient id="bg-papas" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#241407"/>
          <stop offset="100%" stop-color="#0f0702"/>
        </radialGradient>
      </defs>
      <rect width="400" height="280" fill="url(#bg-papas)"/>
      <!-- Plato hondo rústico -->
      <ellipse cx="200" cy="210" rx="145" ry="35" fill="#1c1917" stroke="#b45309" stroke-width="2"/>
      
      <!-- Montaña de Papas a la francesa -->
      <g stroke="#f59e0b" stroke-width="7" stroke-linecap="round">
        <line x1="140" y1="200" x2="190" y2="150"/>
        <line x1="150" y1="190" x2="220" y2="140"/>
        <line x1="210" y1="195" x2="250" y2="155"/>
        <line x1="170" y1="180" x2="240" y2="160"/>
        <line x1="130" y1="180" x2="180" y2="135"/>
        <line x1="200" y1="175" x2="265" y2="145"/>
        <line x1="160" y1="160" x2="230" y2="125"/>
        <line x1="175" y1="150" x2="215" y2="115"/>
      </g>
      
      <!-- Carne desmechada / Chicharrón en trozos -->
      <ellipse cx="170" cy="155" rx="14" ry="9" fill="#78350f"/>
      <ellipse cx="220" cy="145" rx="16" ry="10" fill="#78350f"/>
      <ellipse cx="195" cy="165" rx="18" ry="10" fill="#991b1b"/>
      <ellipse cx="150" cy="175" rx="12" ry="8" fill="#78350f"/>
      <ellipse cx="240" cy="165" rx="14" ry="9" fill="#991b1b"/>
      
      <!-- Chorizo en rodajas doradas -->
      <ellipse cx="185" cy="140" rx="12" ry="7" fill="#b91c1c" stroke="#fca5a5" stroke-width="2"/>
      <ellipse cx="215" cy="170" rx="11" ry="6" fill="#b91c1c" stroke="#fca5a5" stroke-width="2"/>
      
      <!-- Maíz tierno desgranado -->
      <circle cx="165" cy="140" r="4" fill="#facc15"/>
      <circle cx="175" cy="130" r="4" fill="#facc15"/>
      <circle cx="210" cy="130" r="4" fill="#facc15"/>
      <circle cx="230" cy="140" r="4" fill="#facc15"/>
      <circle cx="190" cy="120" r="4" fill="#facc15"/>
      
      <!-- Baño de Queso fundido y tártara derramándose -->
      <path d="M 140 160 Q 180 135 220 145 Q 260 140 270 170 Q 230 185 190 175 Q 150 185 140 160" fill="#fef08a" opacity="0.85"/>
      <path d="M 160 150 Q 200 130 240 150" stroke="#f59e0b" stroke-width="4" fill="none" opacity="0.9"/>
      
      <!-- Tocineta crocante por encima -->
      <rect x="180" y="125" width="8" height="6" rx="2" fill="#7f1d1d"/>
      <rect x="205" y="122" width="10" height="5" rx="2" fill="#7f1d1d"/>
      <rect x="165" y="152" width="7" height="6" rx="2" fill="#7f1d1d"/>
    </svg>
  `,

  // Perro Caliente
  perros: `
    <svg viewBox="0 0 400 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="food-illustration">
      <defs>
        <radialGradient id="bg-perros" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#1e130b"/>
          <stop offset="100%" stop-color="#0d0805"/>
        </radialGradient>
      </defs>
      <rect width="400" height="280" fill="url(#bg-perros)"/>
      <ellipse cx="200" cy="215" rx="140" ry="25" fill="#1c1917" stroke="#44403c" stroke-width="2"/>
      
      <!-- Pan de perro artesanal -->
      <ellipse cx="200" cy="165" rx="125" ry="38" fill="#d97706"/>
      <ellipse cx="200" cy="160" rx="120" ry="32" fill="#f59e0b"/>
      
      <!-- Hendidura del pan -->
      <path d="M 95 160 Q 200 175 305 160" stroke="#92400e" stroke-width="8" stroke-linecap="round" fill="none"/>
      
      <!-- Salchicha Jumbo / Americana asada -->
      <path d="M 90 158 Q 200 170 310 158" stroke="#991b1b" stroke-width="26" stroke-linecap="round" fill="none"/>
      <path d="M 100 155 Q 200 167 300 155" stroke="#b91c1c" stroke-width="20" stroke-linecap="round" fill="none"/>
      
      <!-- Lomo de res salteado / Chimi -->
      <ellipse cx="160" cy="150" rx="12" ry="6" fill="#451a03"/>
      <ellipse cx="200" cy="152" rx="14" ry="7" fill="#451a03"/>
      <ellipse cx="240" cy="150" rx="13" ry="6" fill="#451a03"/>
      
      <!-- Ripio de papa artesanal dorado -->
      <path d="M 110 148 Q 200 160 290 148" stroke="#fef08a" stroke-width="12" stroke-dasharray="4,3" fill="none"/>
      
      <!-- Queso fundido gratinado -->
      <path d="M 120 145 Q 200 158 280 145" stroke="#fef08a" stroke-width="8" opacity="0.8" fill="none"/>
      
      <!-- Salsas zig-zag (Tártara y Piña) -->
      <path d="M 115 145 Q 130 135 145 145 Q 160 135 175 145 Q 190 135 205 145 Q 220 135 235 145 Q 250 135 265 145 Q 280 135 290 145" fill="none" stroke="#f59e0b" stroke-width="4"/>
      <path d="M 125 148 Q 140 138 155 148 Q 170 138 185 148 Q 200 138 215 148 Q 230 138 245 148 Q 260 138 275 148" fill="none" stroke="#22c55e" stroke-width="3" opacity="0.85"/>
    </svg>
  `,

  // Parrilla & Cortes
  parrilla: `
    <svg viewBox="0 0 400 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="food-illustration">
      <defs>
        <radialGradient id="bg-parrilla" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#360a0a"/>
          <stop offset="100%" stop-color="#120404"/>
        </radialGradient>
      </defs>
      <rect width="400" height="280" fill="url(#bg-parrilla)"/>
      <ellipse cx="200" cy="215" rx="145" ry="32" fill="#292524" stroke="#78350f" stroke-width="3"/>
      
      <!-- Fuego sutil de brasas -->
      <path d="M 160 210 Q 180 170 190 200 Q 210 160 225 195 Q 240 175 250 210 Z" fill="#ea580c" opacity="0.25"/>
      
      <!-- Corte de Carne / Ribs / Baby Beef sellado al carbón -->
      <path d="M 120 185 C 110 150 140 130 190 130 C 250 130 280 145 285 175 C 275 195 240 205 180 200 C 135 195 125 195 120 185 Z" fill="#450a0a" stroke="#7f1d1d" stroke-width="3"/>
      
      <!-- Rayas cruzadas de parrilla al carbón (Grill Marks) -->
      <line x1="140" y1="145" x2="260" y2="185" stroke="#170606" stroke-width="4" stroke-linecap="round"/>
      <line x1="150" y1="135" x2="270" y2="175" stroke="#170606" stroke-width="4" stroke-linecap="round"/>
      <line x1="135" y1="165" x2="245" y2="200" stroke="#170606" stroke-width="4" stroke-linecap="round"/>
      
      <line x1="250" y1="140" x2="140" y2="185" stroke="#170606" stroke-width="4" stroke-linecap="round"/>
      <line x1="265" y1="150" x2="160" y2="195" stroke="#170606" stroke-width="4" stroke-linecap="round"/>
      
      <!-- Jugosidad & Mantequilla de hierbas derretida -->
      <ellipse cx="195" cy="160" rx="20" ry="10" fill="#f59e0b" opacity="0.75"/>
      <ellipse cx="198" cy="158" rx="8" ry="4" fill="#22c55e" opacity="0.9"/>
      
      <!-- Papa criolla dorada al lado -->
      <circle cx="105" cy="180" r="14" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
      <circle cx="95" cy="195" r="11" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
      
      <!-- Romero / Rama aromática -->
      <path d="M 180 135 Q 210 145 235 138" stroke="#15803d" stroke-width="3" fill="none"/>
      <line x1="190" y1="137" x2="195" y2="130" stroke="#15803d" stroke-width="2"/>
      <line x1="205" y1="141" x2="210" y2="134" stroke="#15803d" stroke-width="2"/>
      <line x1="220" y1="142" x2="225" y2="135" stroke="#15803d" stroke-width="2"/>
    </svg>
  `,

  // Bebidas & Granizados
  bebidas: `
    <svg viewBox="0 0 400 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="food-illustration">
      <defs>
        <radialGradient id="bg-bebidas" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#082f49"/>
          <stop offset="100%" stop-color="#02131f"/>
        </radialGradient>
      </defs>
      <rect width="400" height="280" fill="url(#bg-bebidas)"/>
      <ellipse cx="200" cy="225" rx="100" ry="18" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" opacity="0.5"/>
      
      <!-- Vaso frappé alto -->
      <path d="M 155 85 L 170 215 C 170 225 230 225 230 215 L 245 85 Z" fill="#0284c7" opacity="0.4" stroke="#bae6fd" stroke-width="2"/>
      
      <!-- Granizado escarchado tropical -->
      <path d="M 158 95 L 171 210 C 175 220 225 220 229 210 L 242 95 Z" fill="#84cc16"/>
      <path d="M 158 135 L 171 210 C 175 220 225 220 229 210 L 242 135 Z" fill="#eab308" opacity="0.8"/>
      
      <!-- Escarchado de sal y pimienta en el borde -->
      <ellipse cx="200" cy="85" rx="45" ry="10" fill="#f8fafc" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
      
      <!-- Rodaja de limón en el borde -->
      <circle cx="160" cy="80" r="18" fill="#a3e635" stroke="#4d7c0f" stroke-width="2"/>
      <circle cx="160" cy="80" r="14" fill="#d9f99d"/>
      
      <!-- Pitillo llamativo -->
      <line x1="215" y1="50" x2="190" y2="180" stroke="#f43f5e" stroke-width="6" stroke-linecap="round"/>
      <line x1="215" y1="50" x2="190" y2="180" stroke="#ffffff" stroke-width="6" stroke-dasharray="8,8" stroke-linecap="round"/>
      
      <!-- Hielo frappé y burbujas -->
      <circle cx="185" cy="130" r="3" fill="#ffffff" opacity="0.7"/>
      <circle cx="210" cy="150" r="4" fill="#ffffff" opacity="0.6"/>
      <circle cx="195" cy="180" r="3" fill="#ffffff" opacity="0.8"/>
    </svg>
  `,

  // Adicionales
  adicionales: `
    <svg viewBox="0 0 400 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="food-illustration">
      <defs>
        <radialGradient id="bg-adicionales" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#241506"/>
          <stop offset="100%" stop-color="#0f0902"/>
        </radialGradient>
      </defs>
      <rect width="400" height="280" fill="url(#bg-adicionales)"/>
      <ellipse cx="200" cy="215" rx="120" ry="24" fill="#1c1917" stroke="#44403c" stroke-width="2"/>
      
      <!-- Ramequín con salsa tártara o queso fundido -->
      <ellipse cx="160" cy="170" rx="35" ry="18" fill="#e2e8f0"/>
      <path d="M 125 170 C 125 195 195 195 195 170" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
      <ellipse cx="160" cy="168" rx="30" ry="14" fill="#facc15"/>
      
      <!-- Arepa dorada -->
      <ellipse cx="240" cy="165" rx="38" ry="22" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
      <ellipse cx="240" cy="160" rx="30" ry="16" fill="#fef08a" opacity="0.9"/>
      <!-- Queso mozzarella sobre la arepa -->
      <path d="M 220 158 Q 240 150 260 158 Q 255 170 235 170 Z" fill="#ffffff" opacity="0.9"/>
      
      <!-- Tiras de tocineta crujiente -->
      <path d="M 170 190 Q 200 178 230 192" stroke="#991b1b" stroke-width="7" stroke-linecap="round"/>
      <path d="M 175 190 Q 205 178 225 192" stroke="#fca5a5" stroke-width="2" fill="none"/>
    </svg>
  `
};

function getFoodIllustration(category) {
  return FOOD_SVGS[category] || FOOD_SVGS.burgers;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { FOOD_SVGS, getFoodIllustration };
}
