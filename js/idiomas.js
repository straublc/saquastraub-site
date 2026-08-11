/* ============================================
   SaquaStraub — i18n (Vanilla JS, sem Vue)
   Suporta: pt | en | es
   Persiste em localStorage → key "lang"
============================================ */

const TRANSLATIONS = {
  pt: {
    skipToContent: "Pular para o conteúdo",
    instalacoes: "Instalações",
    localizacao: "Localização",
    reservarLink: "Reservar",
    idiomaLabel: "Idioma",
    heroTitle: "Casa de praia aluguel por temporada — Saquarema RJ",
    heroSubtitle: "Desfrute de momentos inesquecíveis em uma casa completa com piscina, churrasqueira e toda comodidade que você merece",
    heroButton: "Reserve Agora",
    verFotos: "Ver Fotos",
    statSuites: "Suítes",
    statPessoas: "Pessoas",
    statBanheiros: "Banheiros",
    statPraia: "da Praia",
    galeriaEyebrow: "Fotos",
    galeriaTitle: "Galeria de Fotos",
    verTodasFotos: "Ver Todas as Fotos",
    comodidadesEyebrow: "O que tem",
    comodidades: "Comodidades",
    ar: "Ar-condicionado",
    suites: "03 Suítes",
    maxPessoas: "Máx. 20",
    churrasqueira: "Churrasqueira",
    banheiros: "06 Banheiros",
    wifi: "Wi-Fi",
    piscina: "Piscina",
    pingpong: "Ping Pong",
    sinuca: "Sinuca",
    toto: "Totó",
    instalacoesEyebrow: "Espaços",
    instalacoesTitle: "Conheça Nossas Instalações",
    instalacoesSubtitle: "Áreas internas e externas pensadas para seu conforto e diversão.",
    areaExternaTitle: "Área Externa",
    areaExternaDesc: "Amplo espaço ao ar livre com piscina, churrasqueira e área de lazer completa.",
    piscinaRefrescante: "Piscina refrescante",
    churrasqueiraEspacosa: "Churrasqueira espaçosa",
    chuveiraoAoArLivre: "Chuveirão ao ar livre",
    quintalArborizado: "Quintal arborizado",
    areaInternaTitle: "Área Interna",
    areaInternaDesc: "Ambientes climatizados distribuídos em dois andares, com tudo que você precisa.",
    suitesClimatizadas: "3 suítes climatizadas",
    salaEspacosa: "Sala espaçosa com jogos",
    cozinhaEquipada: "Cozinha equipada",
    varandaVista: "Varanda com vista",
    verTodasInstalacoes: "Ver Todas as Instalações",
    localizacaoEyebrow: "Onde fica",
    localizacaoTitulo: "Localização Privilegiada",
    texto1: "Estamos situados na <strong>Avenida Ademar Aurelino Barreto, 114</strong>, no tranquilo bairro Verde Vale, em Saquarema - RJ.",
    texto2: "A apenas 10 minutos do centro de Bacaxá e de Saquarema, próximo às famosas praias de Itaúna e à encantadora Praia da Vila.",
    texto3: "Uma região que combina sossego, fácil acesso e o melhor do litoral carioca.",
    abrirGoogleMaps: "Google Maps",
    abrirWaze: "Waze",
    atracoesEyebrow: "Ao redor",
    atracoesTitle: "Explore Saquarema",
    atracoesSubtitle: "Praias paradisíacas, cultura local e diversão a poucos minutos de distância.",
    paroquia: "Paróquia N. S. de Nazareth",
    paroquiaDesc: "Igreja histórica com arquitetura tradicional.",
    praiaVila: "Praia da Vila",
    praiaVilaDesc: "Praia tranquila, perfeita para famílias.",
    praiaItauna: "Praia de Itaúna",
    praiaItaunaDesc: "Famosa por suas ondas e competições de surf.",
    centroSaquarema: "Centro de Saquarema",
    centroSaquaremaDesc: "Comércio, restaurantes e serviços essenciais.",
    bacaxa: "Bacaxá",
    bacaxaDesc: "Gastronomia e vida noturna.",
    estadioBoaVista: "Estádio Boa Vista",
    estadioBoaVistaDesc: "Eventos esportivos da região.",
    reservaEyebrow: "Garanta sua vaga",
    facaReserva: "Faça sua Reserva",
    reservarTexto: "Relaxe, aproveite o sol e garanta sua reserva via WhatsApp.",
    dataEntrada: "Data de Entrada",
    dataSaida: "Data de Saída",
    selecionePacote: "Selecione a Quantidade de Pessoas",
    escolhaOpcao: "Escolha uma opção",
    pacote1: "1 pessoa",
    pacote2: "2 pessoas",
    pacote3: "3 pessoas",
    pacote4: "4 pessoas",
    pacote5: "5 pessoas",
    pacote6: "6 pessoas",
    pacote7: "7 pessoas",
    pacote8: "8 pessoas",
    pacote9: "9 pessoas",
    pacote10: "10 pessoas",
    pacote11: "11 pessoas",
    pacote12: "12 pessoas",
    pacote13: "13 pessoas",
    pacote14: "14 pessoas",
    pacote15: "15 pessoas",
    pacote16: "16 pessoas",
    pacote17: "17 pessoas",
    pacote18: "18 pessoas",
    pacote19: "19 pessoas",
    pacote20: "20 pessoas",
    botaoReservar: "Reservar via WhatsApp",
    erroCheckin: "Selecione uma data de hoje ou superior.",
    erroCheckout: "A data de saída deve ser igual ou posterior à data de entrada.",
    footerDescription: "Sua casa de praia dos sonhos em Saquarema. Momentos inesquecíveis te esperam.",
    copyright: "Todos os direitos reservados.",
  },
  en: {
    skipToContent: "Skip to content",
    instalacoes: "Facilities",
    localizacao: "Location",
    reservarLink: "Book",
    idiomaLabel: "Language",
    heroTitle: "Beach house vacation rental — Saquarema RJ",
    heroSubtitle: "Enjoy unforgettable moments in a complete house with pool, barbecue and all the comfort you deserve",
    heroButton: "Book Now",
    verFotos: "View Photos",
    statSuites: "Suites",
    statPessoas: "Guests",
    statBanheiros: "Bathrooms",
    statPraia: "from Beach",
    galeriaEyebrow: "Photos",
    galeriaTitle: "Photo Gallery",
    verTodasFotos: "View All Photos",
    comodidadesEyebrow: "What's included",
    comodidades: "Amenities",
    ar: "Air conditioning",
    suites: "03 Suites",
    maxPessoas: "Max. 20",
    churrasqueira: "Barbecue",
    banheiros: "06 Bathrooms",
    wifi: "Wi-Fi",
    piscina: "Pool",
    pingpong: "Ping Pong",
    sinuca: "Pool Table",
    toto: "Foosball",
    instalacoesEyebrow: "Spaces",
    instalacoesTitle: "Discover Our Facilities",
    instalacoesSubtitle: "Indoor and outdoor areas designed for your comfort and fun.",
    areaExternaTitle: "Outdoor Area",
    areaExternaDesc: "Spacious outdoor area with pool, barbecue and complete leisure area.",
    piscinaRefrescante: "Refreshing pool",
    churrasqueiraEspacosa: "Spacious barbecue",
    chuveiraoAoArLivre: "Outdoor shower",
    quintalArborizado: "Landscaped yard",
    areaInternaTitle: "Indoor Area",
    areaInternaDesc: "Air-conditioned environments across two floors, with everything you need.",
    suitesClimatizadas: "3 air-conditioned suites",
    salaEspacosa: "Spacious lounge with games",
    cozinhaEquipada: "Fully equipped kitchen",
    varandaVista: "Balcony with view",
    verTodasInstalacoes: "View All Facilities",
    localizacaoEyebrow: "Where we are",
    localizacaoTitulo: "Prime Location",
    texto1: "We are located at <strong>Avenida Ademar Aurelino Barreto, 114</strong>, in the peaceful Verde Vale neighborhood in Saquarema - RJ.",
    texto2: "Just 10 minutes from downtown Bacaxá and Saquarema, close to the famous Itaúna Beach and charming Praia da Vila.",
    texto3: "A region that combines tranquility, easy access, and the best of Rio's coast.",
    abrirGoogleMaps: "Google Maps",
    abrirWaze: "Waze",
    atracoesEyebrow: "Nearby",
    atracoesTitle: "Explore Saquarema",
    atracoesSubtitle: "Paradisiacal beaches, local culture and fun just minutes away.",
    paroquia: "N. S. de Nazareth Church",
    paroquiaDesc: "Historic church with traditional architecture.",
    praiaVila: "Praia da Vila",
    praiaVilaDesc: "Peaceful beach, perfect for families.",
    praiaItauna: "Praia de Itaúna",
    praiaItaunaDesc: "World famous for its waves and surf competitions.",
    centroSaquarema: "Saquarema City Center",
    centroSaquaremaDesc: "Shops, restaurants and essential services.",
    bacaxa: "Bacaxá",
    bacaxaDesc: "Gastronomy and nightlife.",
    estadioBoaVista: "Boa Vista Stadium",
    estadioBoaVistaDesc: "Regional sporting events.",
    reservaEyebrow: "Secure your spot",
    facaReserva: "Make Your Reservation",
    reservarTexto: "Relax, enjoy the sun and book your stay via WhatsApp.",
    dataEntrada: "Check-in Date",
    dataSaida: "Check-out Date",
    selecionePacote: "Select Number of Guests",
    escolhaOpcao: "Choose an option",
    pacote1: "1 guest",
    pacote2: "2 guests",
    pacote3: "3 guests",
    pacote4: "4 guests",
    pacote5: "5 guests",
    pacote6: "6 guests",
    pacote7: "7 guests",
    pacote8: "8 guests",
    pacote9: "9 guests",
    pacote10: "10 guests",
    pacote11: "11 guests",
    pacote12: "12 guests",
    pacote13: "13 guests",
    pacote14: "14 guests",
    pacote15: "15 guests",
    pacote16: "16 guests",
    pacote17: "17 guests",
    pacote18: "18 guests",
    pacote19: "19 guests",
    pacote20: "20 guests",
    botaoReservar: "Book via WhatsApp",
    erroCheckin: "Please select today's date or later.",
    erroCheckout: "Check-out must be the same or after check-in.",
    footerDescription: "Your dream beach house in Saquarema. Unforgettable moments await.",
    copyright: "All rights reserved.",
  },
  es: {
    skipToContent: "Saltar al contenido",
    instalacoes: "Instalaciones",
    localizacao: "Ubicación",
    reservarLink: "Reservar",
    idiomaLabel: "Idioma",
    heroTitle: "Casa de playa alquiler por temporada — Saquarema RJ",
    heroSubtitle: "Disfruta de momentos inolvidables en una casa completa con piscina, parrilla y toda la comodidad que mereces",
    heroButton: "Reservar Ahora",
    verFotos: "Ver Fotos",
    statSuites: "Suites",
    statPessoas: "Personas",
    statBanheiros: "Baños",
    statPraia: "de la Playa",
    galeriaEyebrow: "Fotos",
    galeriaTitle: "Galería de Fotos",
    verTodasFotos: "Ver Todas las Fotos",
    comodidadesEyebrow: "Qué incluye",
    comodidades: "Comodidades",
    ar: "Aire acondicionado",
    suites: "03 Suites",
    maxPessoas: "Máx. 20",
    churrasqueira: "Parrilla",
    banheiros: "06 Baños",
    wifi: "Wi-Fi",
    piscina: "Piscina",
    pingpong: "Ping Pong",
    sinuca: "Mesa de Billar",
    toto: "Futbolín",
    instalacoesEyebrow: "Espacios",
    instalacoesTitle: "Conoce Nuestras Instalaciones",
    instalacoesSubtitle: "Áreas internas y externas pensadas para tu comodidad y diversión.",
    areaExternaTitle: "Área Exterior",
    areaExternaDesc: "Amplio espacio al aire libre con piscina, parrilla y área de ocio completa.",
    piscinaRefrescante: "Piscina refrescante",
    churrasqueiraEspacosa: "Parrilla espaciosa",
    chuveiraoAoArLivre: "Ducha al aire libre",
    quintalArborizado: "Patio arbolado",
    areaInternaTitle: "Área Interna",
    areaInternaDesc: "Ambientes climatizados en dos pisos, con todo lo que necesitas.",
    suitesClimatizadas: "3 suites climatizadas",
    salaEspacosa: "Sala espaciosa con juegos",
    cozinhaEquipada: "Cocina equipada",
    varandaVista: "Balcón con vista",
    verTodasInstalacoes: "Ver Todas las Instalaciones",
    localizacaoEyebrow: "Dónde estamos",
    localizacaoTitulo: "Ubicación Privilegiada",
    texto1: "Estamos ubicados en la <strong>Avenida Ademar Aurelino Barreto, 114</strong>, en el tranquilo barrio Verde Vale en Saquarema - RJ.",
    texto2: "A solo 10 minutos del centro de Bacaxá y Saquarema, cerca de las famosas playas de Itaúna y la encantadora Praia da Vila.",
    texto3: "Una región que combina tranquilidad, fácil acceso y lo mejor del litoral de Río.",
    abrirGoogleMaps: "Google Maps",
    abrirWaze: "Waze",
    atracoesEyebrow: "Alrededor",
    atracoesTitle: "Explora Saquarema",
    atracoesSubtitle: "Playas paradisíacas, cultura local y diversión a pocos minutos de distancia.",
    paroquia: "Parroquia N. S. de Nazareth",
    paroquiaDesc: "Iglesia histórica con arquitectura tradicional.",
    praiaVila: "Praia da Vila",
    praiaVilaDesc: "Playa tranquila, perfecta para familias.",
    praiaItauna: "Praia de Itaúna",
    praiaItaunaDesc: "Mundialmente famosa por sus olas y competencias de surf.",
    centroSaquarema: "Centro de Saquarema",
    centroSaquaremaDesc: "Comercio, restaurantes y servicios esenciales.",
    bacaxa: "Bacaxá",
    bacaxaDesc: "Gastronomía y vida nocturna.",
    estadioBoaVista: "Estadio Boa Vista",
    estadioBoaVistaDesc: "Eventos deportivos de la región.",
    reservaEyebrow: "Asegura tu lugar",
    facaReserva: "Haz tu Reserva",
    reservarTexto: "Relájate, disfruta el sol y reserva tu estadía por WhatsApp.",
    dataEntrada: "Fecha de Entrada",
    dataSaida: "Fecha de Salida",
    selecionePacote: "Seleccione la Cantidad de Personas",
    escolhaOpcao: "Elija una opción",
    pacote1: "1 persona",
    pacote2: "2 personas",
    pacote3: "3 personas",
    pacote4: "4 personas",
    pacote5: "5 personas",
    pacote6: "6 personas",
    pacote7: "7 personas",
    pacote8: "8 personas",
    pacote9: "9 personas",
    pacote10: "10 personas",
    pacote11: "11 personas",
    pacote12: "12 personas",
    pacote13: "13 personas",
    pacote14: "14 personas",
    pacote15: "15 personas",
    pacote16: "16 personas",
    pacote17: "17 personas",
    pacote18: "18 personas",
    pacote19: "19 personas",
    pacote20: "20 personas",
    botaoReservar: "Reservar por WhatsApp",
    erroCheckin: "Seleccione una fecha de hoy o posterior.",
    erroCheckout: "La fecha de salida debe ser igual o posterior a la entrada.",
    footerDescription: "Tu casa de playa de ensueño en Saquarema. Te esperan momentos inolvidables.",
    copyright: "Todos los derechos reservados.",
  }
};

/* ── Flags map ── */
const FLAGS = { pt: 'br.webp', en: 'us.webp', es: 'es.webp' };
const LANG_LABEL = { pt: 'PT', en: 'EN', es: 'ES' };

/* ── State ── */
let currentLang = localStorage.getItem('lang') || 'pt';

/* Determine base path (root vs pages/) */
const isSubPage = window.location.pathname.includes('/pages/');
const basePath  = isSubPage ? '../' : './';

/* ── Apply translations ── */
function applyLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

  const t = TRANSLATIONS[lang];

  // data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update desktop lang picker UI
  const flag  = document.getElementById('lang-flag');
  const label = document.getElementById('lang-label');
  if (flag)  flag.src = basePath + 'img/bandeiras/' + FLAGS[lang];
  if (label) label.textContent = LANG_LABEL[lang];

  // Update active states desktop
  document.querySelectorAll('.lang-picker__option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Update active states mobile
  document.querySelectorAll('.navbar__mobile-lang-options button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── Desktop picker ── */
const picker     = document.getElementById('lang-picker');
const pickerBtn  = document.getElementById('lang-btn');
const pickerDrop = document.getElementById('lang-dropdown');

if (picker && pickerBtn) {
  pickerBtn.addEventListener('click', () => {
    const open = picker.classList.toggle('open');
    pickerBtn.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', e => {
    if (!picker.contains(e.target)) {
      picker.classList.remove('open');
      pickerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.lang-picker__option').forEach(opt => {
    opt.addEventListener('click', () => {
      applyLang(opt.dataset.lang);
      picker.classList.remove('open');
      pickerBtn.setAttribute('aria-expanded', 'false');
    });
    opt.addEventListener('keydown', e => {
      if (e.key === 'Enter') { applyLang(opt.dataset.lang); picker.classList.remove('open'); }
    });
  });
}

/* ── Mobile lang buttons ── */
document.querySelectorAll('.navbar__mobile-lang-options button').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ── Init ── */
applyLang(currentLang);
