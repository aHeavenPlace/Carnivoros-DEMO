/**
 * Catálogo Gastronómico de Pa' Carnívoros Bucaramanga
 * Estilo American Grill & Smokehouse
 */

const RESTAURANT_INFO = {
  name: "Pa' Carnívoros",
  tagline: "Authentic Steak, Burgers & Smokehouse Grill",
  slogan: "El templo del carbón y el sabor carnívoro en Bucaramanga",
  rating: 3.3,
  reviewCount: 165,
  priceRange: "$20.000 - $45.000",
  address: "Cra. 3 #63-60, Bucaramanga, Santander",
  neighborhood: "Real de Minas / La Ciudadela",
  plusCode: "3VXF+WG Bucaramanga, Santander",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cra.+3+%2363-60,+Bucaramanga,+Santander",
  whatsappNumber: "573183501234",
  phone: "+57 (607) 644-8899",
  instagram: "@pacarnivorosbga",
  hours: {
    days: "Lunes a Domingo",
    open: "17:00",
    close: "23:30",
    display: "5:00 p.m. - 11:30 p.m."
  },
  deliveryFee: 5000,
  freeDeliveryThreshold: 70000
};

const CATEGORIES = [
  { id: "all", name: "Todo el Fuego" },
  { id: "burgers", name: "Smash & Burgers" },
  { id: "papas", name: "Papas Monstruo" },
  { id: "perros", name: "Perros Salvajes" },
  { id: "parrilla", name: "Cortes & Smokehouse" },
  { id: "bebidas", name: "Bebidas & Cold Beer" },
  { id: "adicionales", name: "Sides & Extras" }
];

const MENU_ITEMS = [
  // --- BURGERS ---
  {
    id: "burger-salvaje",
    category: "burgers",
    name: "Burger Salvaje Signature",
    tag: "El Ícono del Fuego",
    badgeColor: "gold",
    price: 32000,
    description: "200g de carne de res Angus madurada al carbón de roble, doble tocineta ahumada crujiente en leña de manzano, queso cheddar americano fundido, cebolla caramelizada al bourbon de Kentucky y salsa tártara de la casa en pan brioche de papa artesanal.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      meatDoneness: ["Término 3/4 (Recomendado)", "Bien Asada", "Término Medio"],
      extras: [
        { name: "Carne extra 150g al carbón", price: 9000 },
        { name: "Doble tocineta ahumada crujiente", price: 4500 },
        { name: "Queso cheddar líquido extra", price: 3500 },
        { name: "Huevo frito a caballo", price: 2500 }
      ]
    }
  },
  {
    id: "burger-feroz-2x1",
    category: "burgers",
    name: "Combo Feroz 2x1",
    tag: "Super Promo 2x1",
    badgeColor: "red",
    price: 38000,
    description: "¡Dos bestias a la parrilla! Cada hamburguesa con 150g de carne jugosa al carbón, queso mozzarella derretido a la plancha, tocineta ahumada, lechuga romana fresca, rodaja de tomate maduro y una generosa porción de papas a la francesa.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      meatDoneness: ["Bien Asada", "Término 3/4"],
      extras: [
        { name: "Papas rústicas con queso cheddar y bacon", price: 4500 },
        { name: "Doble porción de salsas artesanales", price: 2000 }
      ]
    }
  },
  {
    id: "burger-centinela",
    category: "burgers",
    name: "Centinela Doble Carne (300g)",
    tag: "Doble Smash Monster",
    badgeColor: "orange",
    price: 36000,
    description: "300g de res en dos pisos smash sellados a temperatura volcánica, queso costeño asado a la brasa, tocineta glaseada en maple, ripio artesanal extra fino y reducción de BBQ ahumada estilo Texas.",
    image: "https://images.unsplash.com/photo-1583032015879-63a1f18e9526?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      meatDoneness: ["Término 3/4", "Bien Asada"],
      extras: [
        { name: "Porción de chicharrón crocante carnudo", price: 6000 },
        { name: "Queso cheddar americano extra", price: 3500 }
      ]
    }
  },
  {
    id: "burger-crispy-chicken",
    category: "burgers",
    name: "Crispy Thunder Pollo Sureño",
    tag: "Estilo Nashville",
    badgeColor: "yellow",
    price: 28000,
    description: "Suprema de pollo marinada en buttermilk por 24 horas y apanada estilo Nashville ultra crujiente, ensalada creamy coleslaw con toque cítrico, pepinillos encurtidos y mayonesa honey mustard casera.",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      extras: [
        { name: "Tocineta ahumada crujiente", price: 4500 },
        { name: "Queso mozzarella derretido extra", price: 3000 }
      ]
    }
  },

  // --- PAPAS MONSTRUO ---
  {
    id: "papas-monstruo",
    category: "papas",
    name: "Papas Monstruo Carnívora",
    tag: "Plato Insignia",
    badgeColor: "red",
    price: 39000,
    description: "Bandeja colosal de papas fritas rústicas con lomo fino salteado al wok, pollo desmechado en mantequilla de hierbas, chorizo santandereano ahumado, trocitos de tocineta crujiente, maíz tierno dulce y bañadas en lava de queso fundido y salsa tártara.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      extras: [
        { name: "Chicharrón crujiente picado", price: 6000 },
        { name: "Guacamole fresco con pico de gallo", price: 3500 },
        { name: "Queso fundido extra", price: 3500 }
      ]
    }
  },
  {
    id: "papas-salvajes-chicharron",
    category: "papas",
    name: "Papas Casco con Chicharrón Crackling",
    tag: "Favorito Bucaro",
    badgeColor: "gold",
    price: 34000,
    description: "Papas en cascos doradas sazonadas con paprika y sal marina, coronadas con generoso chicharrón de cerdo carnudo y tostado, sour cream ácido de la casa y chimichurri criollo de campo.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      extras: [
        { name: "Bacon bits ahumados", price: 4000 },
        { name: "Lluvia de queso costeño rallado", price: 3000 }
      ]
    }
  },
  {
    id: "papas-desmechadas",
    category: "papas",
    name: "Papas Rancheras Mixtas",
    tag: "Clásico Americano",
    badgeColor: "blue",
    price: 29000,
    description: "Papas a la francesa crocantes cubiertas con carne desmechada estofada en su propio jugo, pechuga salteada, maíz dulce desgranado y una costra de queso mozzarella gratinado al soplete.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      extras: [
        { name: "Salsa tártara de ajo confitado extra", price: 2000 },
        { name: "Salchicha americana ahumada en rodajas", price: 3500 }
      ]
    }
  },

  // --- PERROS SALVAJES ---
  {
    id: "dog-carnicero",
    category: "perros",
    name: "Dog Carnicero Supremo Grill",
    tag: "Bestia Callejera",
    badgeColor: "red",
    price: 26000,
    description: "Salchicha americana premium envuelta en tocineta y asada a la parrilla, montada sobre pan artesanal y coronada con lomo fino de res salteado con cebolla y chimichurri, guacamole fresco, lluvia de ripio crujiente y salsa tártara.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      extras: [
        { name: "Queso mozzarella derretido arriba", price: 3000 },
        { name: "Porción de papas a la francesa", price: 5000 }
      ]
    }
  },
  {
    id: "dog-suizo-brutal",
    category: "perros",
    name: "Perro Suizo Gratinado al Carbón",
    tag: "Ultra Quesudo",
    badgeColor: "yellow",
    price: 23000,
    description: "Salchicha suiza ahumada artesanal, tocineta crocante picada, mermelada de piña calada casera, ripio de papa y un bloque derretido de queso mozzarella asado al fuego vivo.",
    image: "https://images.unsplash.com/photo-1627054234050-8b1b51e06fa2?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      extras: [
        { name: "Pollo jugoso desmechado", price: 4500 },
        { name: "Papas francesas de acompañamiento", price: 5000 }
      ]
    }
  },

  // --- PARRILLA & CORTES ---
  {
    id: "baby-beef-parrilla",
    category: "parrilla",
    name: "Baby Beef al Carbón de Roble (350g)",
    tag: "Corte Maestro Prime",
    badgeColor: "gold",
    price: 42000,
    description: "Corte premium de lomo fino asado a las brasas vivas y perfumado con mantequilla de romero y ajo asado. Acompañado de papas criollas doradas en manteca de cerdo, ensalada fresca del huerto y chimichurri artesanal.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      meatDoneness: ["Término 3/4 (Recomendado)", "Término Medio", "Bien Asada"],
      extras: [
        { name: "Arepa santandereana con doble queso", price: 4000 },
        { name: "Chorizo santandereano a la brasa", price: 5000 }
      ]
    }
  },
  {
    id: "costillas-bbq",
    category: "parrilla",
    name: "St. Louis Ribs BBQ Ahumadas (500g)",
    tag: "Slow Smoked 6 Horas",
    badgeColor: "orange",
    price: 44000,
    description: "Costillas de cerdo premium ahumadas a fuego lento durante 6 horas sobre madera de manzano, laqueadas con nuestra salsa BBQ casera al caramelo y pimienta negra. Servidas con papas a la francesa y ensalada coleslaw.",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      extras: [
        { name: "Extra salsa BBQ ahumada", price: 2000 },
        { name: "Porción de papas rústicas", price: 4500 }
      ]
    }
  },
  {
    id: "picada-carnivora-2p",
    category: "parrilla",
    name: "Banquete Carnívoro Smokehouse (2-3 Personas)",
    tag: "Para Compartir",
    badgeColor: "gold",
    price: 46000,
    description: "Tabla gigante con trozos de Baby Beef al carbón, pechuga dorada a la brasa, chicharrón crocante carnudo, chorizo santandereano, papas criollas al vapor, patacones crocantes con hogao montañero y salsa tártara.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      extras: [
        { name: "Costillitas BBQ adicionales (250g)", price: 14000 },
        { name: "Porción de guacamole con totopos", price: 5000 }
      ]
    }
  },

  // --- BEBIDAS & COLD BEER ---
  {
    id: "granizado-mango-biche",
    category: "bebidas",
    name: "Granizado de Mango Biche Criollo",
    tag: "El Favorito Helado",
    badgeColor: "green",
    price: 11000,
    description: "Frappé elaborado con pulpa natural de mango biche recién exprimido, escarchado en copa con sal marina volcánica, pimienta y limón Tahití.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    customizable: false
  },
  {
    id: "granizado-maracuya",
    category: "bebidas",
    name: "Granizado de Maracuyá Frutal",
    tag: "Refrescante",
    badgeColor: "yellow",
    price: 11000,
    description: "Pura fruta de la pasión batida en frappé helado con azúcar morena y escarchado dulce cítrico.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
    customizable: false
  },
  {
    id: "gaseosa-400ml",
    category: "bebidas",
    name: "Gaseosa Clásica en Botella 400ml",
    tag: "Bien Helada",
    badgeColor: "blue",
    price: 6000,
    description: "Coca-Cola Original, Coca-Cola Zero, Postobón Manzana, Colombiana o Cuatro servida con vaso y hielo.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    customizable: true,
    options: {
      flavor: ["Coca-Cola Original", "Coca-Cola Zero", "Postobón Manzana", "Colombiana", "Cuatro"]
    }
  },
  {
    id: "cerveza-artesanal",
    category: "bebidas",
    name: "Cerveza Coronita / Stella Artois 330ml",
    tag: "Parrillera",
    badgeColor: "gold",
    price: 9000,
    description: "Cerveza importada helada servida con rodaja de limón fresco para acompañar tus cortes.",
    image: "https://images.unsplash.com/photo-1608270195724-4f0578659d48?auto=format&fit=crop&w=800&q=80",
    customizable: false
  },

  // --- SIDES & EXTRAS ---
  {
    id: "porcion-papas-francesas",
    category: "adicionales",
    name: "Papas Francesas Crujientes",
    tag: "Crujientes",
    badgeColor: "yellow",
    price: 8000,
    description: "Porción de papas doradas con sazonador especial de hierbas secas y salsa tártara de la casa.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    customizable: false
  },
  {
    id: "arepa-santandereana-queso",
    category: "adicionales",
    name: "Arepa Santandereana con Queso Asada al Carbón",
    tag: "Tradición Brasa",
    badgeColor: "orange",
    price: 7000,
    description: "Arepa de maíz pelao asada directamente sobre la parrilla con capa dorada de queso derretido.",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    customizable: false
  },
  {
    id: "brownie-helado",
    category: "adicionales",
    name: "Skillet Brownie con Helado de Vainilla",
    tag: "El Broche de Oro",
    badgeColor: "red",
    price: 12000,
    description: "Brownie húmedo de chocolate oscuro servido caliente con bola de helado de vainilla y salsa fudge de chocolate.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    customizable: false
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { RESTAURANT_INFO, CATEGORIES, MENU_ITEMS };
}
