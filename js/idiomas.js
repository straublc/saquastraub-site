

const { createApp } = Vue;
const { createI18n } = VueI18n;

const messages = {
  pt: {
    menu: "Menu",
    instalacoes: "Instalações",
    localizacao: "Localização",
    contato: "Contato",
    comodidades: "Comodidades",
    ar: "Ar-condicionado",
    suites: "03 Suítes",
    maxPessoas: "Máx. 20",
    jogos: "Jogos",
    wifi: "Wi-Fi",
    localizacaoTitulo: "Localização Privilegiada",
    texto1:
      "Estamos situados na <strong>Avenida Ademar Avelino Barreto, 114</strong>, no tranquilo bairro Verde Vale, em Saquarema - RJ.",
    texto2:
      "A apenas 10 minutos do centro de Bacaxá e de Saquarema, você estará próximo às famosas praias de Itaúna, palco de competições de surf e à encantadora Praia da Vila.",
    texto3: "Uma região que combina sossego, fácil acesso e o melhor do litoral carioca.",
    reservarTitulo: "Transforme momentos em memórias inesquecíveis em Saquarema!",
    reservarTexto:
      "Relaxe, aproveite o sol, o mar e momentos especiais em uma hospedagem que combina conforto, natureza e lazer. Garanta já sua reserva!",
    reservarBotao: "Reservar agora",
    abrirGoogleMaps: "Abrir no Google Maps",
    abrirWaze: "Abrir no Waze",
    mapaDescricao: "Localização da casa de praia no Google Maps",
    copyright: "Todos os direitos reservados.",
    facaReserva: "Faça sua Reserva",
    dataEntrada: "Data de Entrada",
    dataSaida: "Data de Saída",
    selecionePacote: "Selecione o Pacote",
    escolhaOpcao: "Escolha uma opção",
    pacote10: "Até 10 pessoas",
    pacote15: "Até 15 pessoas",
    pacote20: "Até 20 pessoas",
    botaoReservar: "Reservar via WhatsApp",
    erroCheckin: "Selecione uma data de hoje ou superior.",
    erroCheckout: "A data de saída deve ser igual ou posterior à data de entrada.",
    placeholderData: "Selecione uma data",
    reservarLink: "Reservar",
    heroTitle: "Casa de praia aluguel por temporada - Saquarema RJ",
    heroSubtitle: "Desfrute de momentos inesquecíveis em uma casa completa com piscina, churrasqueira e toda comodidade que você merece",
    heroButton: "Reserve Agora",
    piscina: "Piscina",
    footerDescription: "Sua casa de praia dos sonhos em Saquarema. Momentos inesquecíveis te esperam.",
    instalacoesTitle: "Conheça Nossas Instalações",
    instalacoesSubtitle: "Descubra todos os ambientes e comodidades que tornam sua estadia inesquecível. Áreas internas e externas pensadas para seu conforto e diversão.",
    areaExternaTitle: "Área Externa",
    areaExternaDesc: "Amplo espaço ao ar livre com piscina, churrasqueira e área de lazer completa para momentos únicos.",
    areaInternaTitle: "Área Interna", 
    areaInternaDesc: "Ambientes climatizados e confortáveis distribuídos em dois andares, com tudo que você precisa.",
    piscinaRefrescante: "Piscina refrescante",
    churrasqueiraEspacosa: "Churrasqueira espaçosa",
    chuveiraoAoArLivre: "Chuveirão ao ar livre",
    quintalArborizado: "Quintal arborizado",
    suitesClimatizadas: "3 suítes climatizadas",
    salaEspacosa: "Sala espaçosa com jogos",
    cozinhaEquipada: "Cozinha equipada",
    varandaVista: "Varanda com vista",
    verTodasInstalacoes: "Ver Todas as Instalações",
    skipToContent: "Pular para o conteúdo",
    galeriaTitle: "Galeria de Fotos",
    verTodasFotos: "Ver Todas as Fotos",
    churrasqueira: "Churrasqueira",
    banheiros: "06 Banheiros",
    pingpong: "Ping Pong",
    sinuca: "Sinuca",
    toto: "Totó",
    atracoesTitle: "Explore os Encantos de Saquarema",
    atracoesSubtitle: "Descubra as maravilhas que cercam nossa casa: praias paradisíacas, cultura local e diversão garantida para toda a família, tudo a poucos minutos de distância.",
    paroquia: "Paróquia Nossa Senhora de Nazareth",
    paroquiaDesc: "Igreja histórica e centro espiritual da comunidade local, com arquitetura tradicional.",
    praiaVila: "Praia da Vila",
    praiaVilaDesc: "Praia encantadora e tranquila, perfeita para famílias e momentos de relaxamento.",
    praiaItauna: "Praia de Itaúna",
    praiaItaunaDesc: "Mundialmente famosa por suas ondas perfeitas e competições internacionais de surf.",
    centroSaquarema: "Centro de Saquarema",
    centroSaquaremaDesc: "Centro histórico com comércio diversificado, restaurantes e serviços essenciais.",
    bacaxa: "Bacaxá",
    bacaxaDesc: "Distrito gastronômico com excelentes restaurantes e vida noturna vibrante.",
    estadioBoaVista: "Estádio do Boa Vista",
    estadioBoaVistaDesc: "Estádio municipal que recebe jogos de futebol e grandes eventos esportivos da região.",
    meses: [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ],
    diasSemana: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    lang: {
      pt: "Português",
      en: "English",
      es: "Español",
    }
  },
  en: {
    menu: "Menu",
    instalacoes: "Facilities",
    localizacao: "Location",
    contato: "Contact",
    comodidades: "Amenities",
    ar: "Air conditioning",
    suites: "03 Suites",
    maxPessoas: "Max. 20",
    jogos: "Games",
    wifi: "Wi-Fi",
    localizacaoTitulo: "Prime Location",
    texto1:
      "We are located at <strong>Avenida Ademar Avelino Barreto, 114</strong>, in the peaceful Verde Vale neighborhood in Saquarema - RJ.",
    texto2:
      "Just 10 minutes from downtown Bacaxá and Saquarema, close to the famous Itaúna beaches, a surf competition hub and the charming Praia da Vila.",
    texto3: "An area that combines tranquility, easy access, and the best of Rio’s coast.",
    reservarTitulo: "Turn moments into unforgettable memories in Saquarema!",
    reservarTexto:
      "Relax, enjoy the sun, the sea, and special moments in an accommodation that combines comfort, nature, and leisure. Book now!",
    reservarBotao: "Book now",
    abrirGoogleMaps: "Open in Google Maps",
    abrirWaze: "Open in Waze",
    mapaDescricao: "Location of the beach house on Google Maps",
    copyright: "All rights reserved.",
    facaReserva: "Make Your Reservation",
    dataEntrada: "Check-in Date",
    dataSaida: "Check-out Date",
    selecionePacote: "Select Package",
    escolhaOpcao: "Choose an option",
    pacote10: "Up to 10 people",
    pacote15: "Up to 15 people",
    pacote20: "Up to 20 people",
    botaoReservar: "Reserve via WhatsApp",
    erroCheckin: "Please select today’s date or later.",
    erroCheckout: "Check-out date must be the same or later than check-in date.",
    reservarLink: "Book",
    placeholderData: "Select a date",
    heroTitle: "Beach house rental by season - Saquarema RJ",
    heroSubtitle: "Enjoy unforgettable moments in a complete house with pool, barbecue and all the comfort you deserve",
    heroButton: "Book Now",
    piscina: "Pool",
    footerDescription: "Your dream beach house in Saquarema. Unforgettable moments await you.",
    instalacoesTitle: "Discover Our Facilities",
    instalacoesSubtitle: "Explore all the spaces and amenities that make your stay unforgettable. Indoor and outdoor areas designed for your comfort and fun.",
    areaExternaTitle: "Outdoor Area",
    areaExternaDesc: "Spacious outdoor area with pool, barbecue and complete leisure area for unique moments.",
    areaInternaTitle: "Indoor Area",
    areaInternaDesc: "Air-conditioned and comfortable environments distributed over two floors, with everything you need.",
    piscinaRefrescante: "Refreshing pool",
    churrasqueiraEspacosa: "Spacious barbecue",
    chuveiraoAoArLivre: "Outdoor shower",
    quintalArborizado: "Landscaped yard",
    suitesClimatizadas: "3 air-conditioned suites",
    salaEspacosa: "Spacious room with games",
    cozinhaEquipada: "Equipped kitchen",
    varandaVista: "Balcony with view",
    verTodasInstalacoes: "View All Facilities",
    skipToContent: "Skip to content",
    galeriaTitle: "Photo Gallery",
    verTodasFotos: "View All Photos",
    churrasqueira: "Barbecue",
    banheiros: "06 Bathrooms",
    pingpong: "Ping Pong",
    sinuca: "Pool Table",
    toto: "Foosball",
    atracoesTitle: "Explore the Charms of Saquarema",
    atracoesSubtitle: "Discover the wonders that surround our house: paradisiacal beaches, local culture and guaranteed fun for the whole family, all just minutes away.",
    paroquia: "Paróquia Nossa Senhora de Nazareth",
    paroquiaDesc: "Historic church and spiritual center of the local community, with traditional architecture.",
    praiaVila: "Praia da Vila",
    praiaVilaDesc: "Charming and peaceful beach, perfect for families and relaxing moments.",
    praiaItauna: "Praia de Itaúna",
    praiaItaunaDesc: "World famous for its perfect waves and international surf competitions.",
    centroSaquarema: "Centro de Saquarema",
    centroSaquaremaDesc: "Historic center with diverse commerce, restaurants and essential services.",
    bacaxa: "Bacaxá",
    bacaxaDesc: "Gastronomic district with excellent restaurants and vibrant nightlife.",
    estadioBoaVista: "Estádio do Boa Vista",
    estadioBoaVistaDesc: "Municipal stadium that hosts football games and major sporting events in the region.",
    meses: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ],
    diasSemana: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    lang: {
      pt: "Portuguese",
      en: "English",
      es: "Spanish"
    }
  },
  es: {
    menu: "Menú",
    instalacoes: "Instalaciones",
    localizacao: "Ubicación",
    contato: "Contacto",
    comodidades: "Comodidades",
    ar: "Aire acondicionado",
    suites: "03 Suites",
    maxPessoas: "Máx. 20",
    jogos: "Juegos",
    wifi: "Wi-Fi",
    localizacaoTitulo: "Ubicación privilegiada",
    texto1:
      "Estamos ubicados en la <strong>Avenida Ademar Avelino Barreto, 114</strong>, en el tranquilo barrio Verde Vale en Saquarema - RJ.",
    texto2:
      "A solo 10 minutos del centro de Bacaxá y de Saquarema, cerca de las famosas playas de Itaúna, escenario de competiciones de surf y de la encantadora Praia da Vila.",
    texto3: "Una región que combina tranquilidad, fácil acceso y lo mejor del litoral de Río.",
    reservarTitulo: "¡Transforma momentos en recuerdos inolvidables en Saquarema!",
    reservarTexto:
      "Relájate, disfruta del sol, el mar y momentos especiales en un alojamiento que combina comodidad, naturaleza y ocio. ¡Reserva ahora!",
    reservarBotao: "Reservar ahora",
    abrirGoogleMaps: "Abrir en Google Maps",
    abrirWaze: "Abrir en Waze",
    mapaDescricao: "Ubicación de la casa de playa en Google Maps",
    copyright: "Todos los derechos reservados.",
    facaReserva: "Haz tu Reserva",
    dataEntrada: "Fecha de Entrada",
    dataSaida: "Fecha de Salida",
    selecionePacote: "Seleccione el Paquete",
    escolhaOpcao: "Elija una opción",
    pacote10: "Hasta 10 personas",
    pacote15: "Hasta 15 personas",
    pacote20: "Hasta 20 personas",
    botaoReservar: "Reservar por WhatsApp",
    erroCheckin: "Seleccione una fecha de hoy o posterior.",
    erroCheckout: "La fecha de salida debe ser igual o posterior a la fecha de entrada.",
    reservarLink: "Reservar",
    placeholderData: "Seleccione una fecha",
    heroTitle: "Casa de playa alquiler por temporada - Saquarema RJ",
    heroSubtitle: "Disfruta de momentos inolvidables en una casa completa con piscina, parrilla y toda la comodidad que mereces",
    heroButton: "Reservar Ahora",
    piscina: "Piscina",
    footerDescription: "Tu casa de playa de ensueño en Saquarema. Te esperan momentos inolvidables.",
    instalacoesTitle: "Conoce Nuestras Instalaciones",
    instalacoesSubtitle: "Descubre todos los espacios y comodidades que hacen tu estadía inolvidable. Áreas internas y externas pensadas para tu comodidad y diversión.",
    areaExternaTitle: "Área Externa",
    areaExternaDesc: "Amplio espacio al aire libre con piscina, parrilla y área de ocio completa para momentos únicos.",
    areaInternaTitle: "Área Interna",
    areaInternaDesc: "Ambientes climatizados y cómodos distribuidos en dos pisos, con todo lo que necesitas.",
    piscinaRefrescante: "Piscina refrescante",
    churrasqueiraEspacosa: "Parrilla espaciosa",
    chuveiraoAoArLivre: "Ducha al aire libre",
    quintalArborizado: "Patio arbolado",
    suitesClimatizadas: "3 suites climatizadas",
    salaEspacosa: "Sala espaciosa con juegos",
    cozinhaEquipada: "Cocina equipada",
    varandaVista: "Balcón con vista",
    verTodasInstalacoes: "Ver Todas las Instalaciones",
    skipToContent: "Saltar al contenido",
    galeriaTitle: "Galería de Fotos",
    verTodasFotos: "Ver Todas las Fotos",
    churrasqueira: "Parrilla",
    banheiros: "06 Baños",
    pingpong: "Ping Pong",
    sinuca: "Mesa de Billar",
    toto: "Futbolín",
    atracoesTitle: "Explora los Encantos de Saquarema",
    atracoesSubtitle: "Descubre las maravillas que rodean nuestra casa: playas paradisíacas, cultura local y diversión garantizada para toda la familia, todo a pocos minutos de distancia.",
    paroquia: "Paróquia Nossa Senhora de Nazareth",
    paroquiaDesc: "Iglesia histórica y centro espiritual de la comunidad local, con arquitectura tradicional.",
    praiaVila: "Praia da Vila",
    praiaVilaDesc: "Playa encantadora y tranquila, perfecta para familias y momentos de relajación.",
    praiaItauna: "Praia de Itaúna",
    praiaItaunaDesc: "Mundialmente famosa por sus olas perfectas y competiciones internacionales de surf.",
    centroSaquarema: "Centro de Saquarema",
    centroSaquaremaDesc: "Centro histórico con comercio diversificado, restaurantes y servicios esenciales.",
    bacaxa: "Bacaxá",
    bacaxaDesc: "Distrito gastronómico con excelentes restaurantes y vida nocturna vibrante.",
    estadioBoaVista: "Estádio do Boa Vista",
    estadioBoaVistaDesc: "Estadio municipal que recibe juegos de fútbol y grandes eventos deportivos de la región.",
    meses: [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ],
    diasSemana: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    lang: {
      pt: "Portugués",
      en: "Inglés",
      es: "Español"
    }
  }
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "pt",
  fallbackLocale: "pt",
  messages
});

const sharedData = () => ({
  currentLang: i18n.global.locale.value,
  flags: {
    pt: 'br.webp',
    en: 'us.webp',
    es: 'es.webp'
  }
});

const sharedMethods = {
  changeLanguage() {
    i18n.global.locale.value = this.currentLang;
    localStorage.setItem("lang", this.currentLang);
    this.updateTexts();
  },
  updateTexts() {
    const t = i18n.global.t;

    // Atualiza elementos com texto puro
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.textContent = t(key);
      }
    });

    // Atualiza elementos com conteúdo HTML
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (key) {
        el.innerHTML = t(key);
      }
    });

    // Atualiza placeholders dos inputs de data
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    if (checkinInput) checkinInput.placeholder = t('placeholderData');
    if (checkoutInput) checkoutInput.placeholder = t('placeholderData');

    // Atualiza opções do select pacote
    const pacoteSelect = document.getElementById('pacote');
    if (pacoteSelect) {
      const options = pacoteSelect.querySelectorAll('option');
      if (options.length >= 4) {
        options[0].textContent = t('escolhaOpcao');
        options[1].textContent = t('pacote10');
        options[2].textContent = t('pacote15');
        options[3].textContent = t('pacote20');
      }
    }

    // Atualiza textos das mensagens de erro
    const erroCheckin = document.getElementById('erroCheckin');
    if (erroCheckin) erroCheckin.textContent = t('erroCheckin');
    const erroCheckout = document.getElementById('erroCheckout');
    if (erroCheckout) erroCheckout.textContent = t('erroCheckout');

    // Atualiza texto do botão de reserva
    const btnReservar = document.getElementById('btnReservar');
    if (btnReservar) btnReservar.textContent = t('botaoReservar');

    // Atualiza nomes dos idiomas nos selects
    const selects = document.querySelectorAll('select[aria-label="Seleção de idioma"]');
    selects.forEach(select => {
      select.querySelectorAll("option").forEach(option => {
        const key = option.value;
        if (t(`lang.${key}`)) option.textContent = t(`lang.${key}`);
      });
    });

    // Atualiza textos por id específicos, se existirem
    const menuEl = document.getElementById("offcanvasNavbarLabel");
    if (menuEl) menuEl.textContent = t("menu");
  }
};

function createLanguageApp(selector) {
  const app = createApp({
    data: sharedData,
    methods: sharedMethods,
    mounted() {
      this.updateTexts();
    },
    watch: {
      currentLang() {
        this.changeLanguage();
      }
    }
  });

  app.use(i18n);
  app.mount(selector);
}

createLanguageApp("#language-app");
createLanguageApp("#language-app-mobile");