const { createApp } = Vue;
const { createI18n } = VueI18n;

const messages = {
  pt: {
    instalacoesTitle: "Conheça Nossas Instalações",
    instalacoesSubtitle: "Descubra todos os ambientes e comodidades que tornam sua estadia inesquecível. Áreas internas e externas pensadas para seu conforto e diversão.",
    externaTitulo: "Área Externa",
    externaTexto: "Desfrute de uma ampla e encantadora área externa, perfeita para reunir toda a galera! A casa conta com uma piscina refrescante, um chuveirão ao ar livre para aquele banho pós-praia e uma churrasqueira espaçosa, ideal para celebrar bons momentos.",
    externaNoiteTitulo: "Área Externa - Noite",
    externaNoiteTexto: "À noite, a área externa ganha um charme especial com a iluminação ambiente, criando o cenário perfeito para momentos românticos e confraternizações inesquecíveis.",
    terreoTitulo: "Área Interna - Térreo",
    terreoTexto: "No térreo você encontra uma sala espaçosa com Wi-Fi e mesa de ping-pong, cozinha equipada com duas geladeiras, uma suíte climatizada e banheiro de apoio.",
    segundoAndarTitulo: "Área Interna - Segundo Andar",
    segundoAndarTexto: "No andar superior, você encontra uma varanda com vista para o quintal, sala com poltronas e mesa de sinuca, banheiro e duas suítes climatizadas.",
    inicio: "Início",
    localizacao: "Localização",
    reservarLink: "Reservar",
    menu: "Menu",
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
    footerDescription: "Sua casa de praia dos sonhos em Saquarema. Momentos inesquecíveis te esperam.",
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
    instalacoesTitle: "Discover Our Facilities",
    instalacoesSubtitle: "Explore all the spaces and amenities that make your stay unforgettable. Indoor and outdoor areas designed for your comfort and fun.",
    externaTitulo: "Outdoor Area",
    externaTexto: "Enjoy a large and charming outdoor area, perfect for gathering all your friends! The house features a refreshing pool, an outdoor shower for that post-beach rinse, and a spacious barbecue grill, ideal for celebrating good moments.",
    externaNoiteTitulo: "Outdoor Area - Night",
    externaNoiteTexto: "At night, the outdoor area gains special charm with ambient lighting, creating the perfect setting for romantic moments and unforgettable gatherings.",
    terreoTitulo: "Indoor Area - Ground Floor",
    terreoTexto: "On the ground floor you'll find a spacious room with Wi-Fi and ping-pong table, kitchen equipped with two refrigerators, an air-conditioned suite and support bathroom.",
    segundoAndarTitulo: "Indoor Area - Second Floor",
    segundoAndarTexto: "On the upper floor, you'll find a balcony overlooking the yard, room with armchairs and pool table, bathroom and two air-conditioned suites.",
    inicio: "Home",
    localizacao: "Location",
    reservarLink: "Book",
    menu: "Menu",
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
    erroCheckin: "Please select today's date or later.",
    erroCheckout: "Check-out date must be the same or later than check-in date.",
    placeholderData: "Select a date",
    footerDescription: "Your dream beach house in Saquarema. Unforgettable moments await you.",
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
    instalacoesTitle: "Conoce Nuestras Instalaciones",
    instalacoesSubtitle: "Descubre todos los espacios y comodidades que hacen tu estadía inolvidable. Áreas internas y externas pensadas para tu comodidad y diversión.",
    externaTitulo: "Área Exterior",
    externaTexto: "Disfruta de una amplia y encantadora área exterior, perfecta para reunir a todos los amigos! La casa cuenta con una piscina refrescante, una ducha al aire libre para ese baño después de la playa y una espaciosa parrilla, ideal para celebrar buenos momentos.",
    externaNoiteTitulo: "Área Exterior - Noche",
    externaNoiteTexto: "Por la noche, el área exterior gana un encanto especial con la iluminación ambiental, creando el escenario perfecto para momentos románticos y confraternizaciones inolvidables.",
    terreoTitulo: "Área Interna - Planta Baja",
    terreoTexto: "En la planta baja encuentras una sala espaciosa con Wi-Fi y mesa de ping-pong, cocina equipada con dos refrigeradores, una suite climatizada y baño de apoyo.",
    segundoAndarTitulo: "Área Interna - Segundo Piso",
    segundoAndarTexto: "En el piso superior, encuentras un balcón con vista al patio, sala con sillones y mesa de billar, baño y dos suites climatizadas.",
    inicio: "Inicio",
    localizacao: "Ubicación",
    reservarLink: "Reservar",
    menu: "Menú",
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
    placeholderData: "Seleccione una fecha",
    footerDescription: "Tu casa de playa de ensueño en Saquarema. Te esperan momentos inolvidables.",
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