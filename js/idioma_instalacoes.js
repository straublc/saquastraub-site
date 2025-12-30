const { createApp } = Vue;
const { createI18n } = VueI18n;

const messages = {
  pt: {
    externaTitulo: "Área Externa",
    externaTexto: "Desfrute de uma ampla e encantadora área externa, perfeita para reunir toda a galera! A casa conta com uma piscina refrescante, um chuveirão ao ar livre para aquele banho pós-praia e uma churrasqueira espaçosa, ideal para celebrar bons momentos com um banheiro de apoio ao lado para ainda mais conforto. O quintal é bem cuidado, com grama natural, coqueiros, um pé de goiaba e outras árvores que completam o clima tropical. E para garantir a diversão e o descanso, temos uma mesa de totó e duas redes convidativas, perfeitas para relaxar à sombra.",
    externaNoite: "Área Externa - Noite",
    internaTitulo: "Área Interna",
    internaTexto: "Nossa área interna combina conforto e lazer! Sala espaçosa com Wi-Fi e mesa de pingue-pongue, cozinha equipada com duas geladeiras, uma suíte no térreo e mais um banheiro. No andar superior, você encontra uma varanda com vista para o quintal, uma sala com poltronas e uma mesa de sinuca, outro banheiro e duas suítes. Todos os quartos são climatizados, garantindo noites mais agradáveis, e a casa acomoda com conforto até 20 pessoas com colchões disponíveis. Ideal para curtir com estilo e tranquilidade!",
    terreo: "Térreo",
    segundoAndar: "Segundo Andar",
    inicio: "Início",
    contato: "Contato",
    menu: "Menu",
    reservarTitulo: "Viva momentos inesquecíveis nesta casa espetacular em Saquarema!",
    reservarTexto: "Entre em contato e garanta sua reserva.",
    reservarBotao: "Reservar agora",
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
    reservarLink: "Reservar",
    placeholderData: "Selecione uma data",
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
    externaTitulo: "Outdoor Area",
    externaTexto: "Enjoy a large and charming outdoor area, perfect for gathering all your friends! The house features a refreshing pool, an outdoor shower for that post-beach rinse, and a spacious barbecue grill, ideal for celebrating good moments with a support bathroom nearby for even more comfort. The yard is well-maintained, with natural grass, palm trees, a guava tree, and other trees that complete the tropical vibe. And to ensure fun and relaxation, we have a foosball table and two inviting hammocks, perfect for relaxing in the shade.",
    externaNoite: "Outdoor Area - Night",
    internaTitulo: "Indoor Area",
    internaTexto: "Our indoor area combines comfort and leisure! Spacious living room with Wi-Fi and ping-pong table, kitchen equipped with two refrigerators, a suite on the ground floor, and another bathroom. Upstairs, you'll find a balcony overlooking the yard, a room with armchairs and a pool table, another bathroom, and two suites. All rooms are air-conditioned, ensuring more pleasant nights, and the house comfortably accommodates up to 20 people with available mattresses. Ideal to enjoy with style and tranquility!",
    terreo: "Ground Floor",
    segundoAndar: "Second Floor",
    inicio: "Home",
    contato: "Contact",
    menu: "Menu",
    reservarTitulo: "Live unforgettable moments in this spectacular house in Saquarema!",
    reservarTexto: "Get in touch and secure your booking.",
    reservarBotao: "Book now",
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
    externaTitulo: "Área Exterior",
    externaTexto: "Disfruta de una amplia y encantadora área exterior, perfecta para reunir a todos los amigos! La casa cuenta con una piscina refrescante, una ducha al aire libre para ese baño después de la playa y una espaciosa parrilla, ideal para celebrar buenos momentos con un baño de apoyo al lado para aún más comodidad. El patio está bien cuidado, con césped natural, palmeras, un árbol de guayaba y otros árboles que completan el ambiente tropical. Y para garantizar la diversión y el descanso, tenemos una mesa de futbolín y dos hamacas invitadoras, perfectas para relajarse a la sombra.",
    externaNoite: "Área Exterior - Noche",
    internaTitulo: "Área interna",
    internaTexto: "¡Nuestra área interna combina comodidad y ocio! Sala espaciosa con Wi-Fi y mesa de ping-pong, cocina equipada con dos refrigeradores, una suite en la planta baja y otro baño. En el piso superior, encontrarás un balcón con vista al patio, una sala con sillones y una mesa de billar, otro baño y dos suites. Todas las habitaciones están climatizadas, garantizando noches más agradables, y la casa acomoda cómodamente hasta 20 personas con colchones disponibles. ¡Ideal para disfrutar con estilo y tranquilidad!",
    terreo: "Planta Baja",
    segundoAndar: "Segundo Piso",
    inicio: "Inicio",
    contato: "Contacto",
    menu: "Menú",
    reservarTitulo: "¡Vive momentos inolvidables en esta casa espectacular en Saquarema!",
    reservarTexto: "Contáctanos y asegura tu reserva.",
    reservarBotao: "Reservar ahora",
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