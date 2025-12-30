

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