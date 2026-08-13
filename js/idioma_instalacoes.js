/* ============================================
   SaquaStraub — i18n para instalacoes.html
   Reutiliza a lógica de idiomas.js
   (mesmas chaves, paths relativos diferentes)
============================================ */

const TRANSLATIONS = {
  pt: {
    skipToContent: "Pular para o conteúdo",
    inicio: "Início",
    instalacoes: "Instalações",
    localizacao: "Localização",
    reservarLink: "Reservar",
    idiomaLabel: "Idioma",
    instalacoesTitle: "Conheça Nossas Instalações",
    instalacoesSubtitle: "Áreas internas e externas pensadas para seu conforto e diversão.",
    eyebrowDia: "Dia",
    eyebrowNoite: "Noite",
    eyebrowTerreo: "Térreo",
    eyebrow2Andar: "2º Andar",
    externaTitulo: "Área Externa",
    externaTexto: "Piscina, churrasqueira, chuveirão e quintal arborizado para momentos inesquecíveis.",
    galeriaCasa: "A Casa",
    galeriaQuintal: "Quintal e Piscina",
    galeriaChurras: "Churrasqueira",
    galeriaLazer: "Lazer",
    externaNoiteTitulo: "Área Externa - Noite",
    externaNoiteTexto: "Iluminação ambiente que cria o cenário perfeito para noites inesquecíveis.",
    terreoTitulo: "Área Interna - Térreo",
    terreoTexto: "Sala, cozinha equipada, suíte climatizada e banheiro de apoio.",
    segundoAndarTitulo: "Área Interna - Segundo Andar",
    segundoAndarTexto: "Varanda, sinuca, banheiro e duas suítes climatizadas.",
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
    inicio: "Home",
    instalacoes: "Facilities",
    localizacao: "Location",
    reservarLink: "Book",
    idiomaLabel: "Language",
    instalacoesTitle: "Discover Our Facilities",
    instalacoesSubtitle: "Indoor and outdoor areas designed for your comfort and fun.",
    eyebrowDia: "Daytime",
    eyebrowNoite: "Night",
    eyebrowTerreo: "Ground Floor",
    eyebrow2Andar: "2nd Floor",
    externaTitulo: "Outdoor Area",
    externaTexto: "Pool, barbecue, outdoor shower and landscaped yard for unforgettable moments.",
    galeriaCasa: "The House",
    galeriaQuintal: "Yard & Pool",
    galeriaChurras: "Barbecue",
    galeriaLazer: "Leisure",
    externaNoiteTitulo: "Outdoor Area - Night",
    externaNoiteTexto: "Ambient lighting creates the perfect setting for unforgettable nights.",
    terreoTitulo: "Indoor Area - Ground Floor",
    terreoTexto: "Lounge, equipped kitchen, air-conditioned suite and support bathroom.",
    segundoAndarTitulo: "Indoor Area - Second Floor",
    segundoAndarTexto: "Balcony, pool table, bathroom and two air-conditioned suites.",
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
    inicio: "Inicio",
    instalacoes: "Instalaciones",
    localizacao: "Ubicación",
    reservarLink: "Reservar",
    idiomaLabel: "Idioma",
    instalacoesTitle: "Conoce Nuestras Instalaciones",
    instalacoesSubtitle: "Áreas internas y externas pensadas para tu comodidad y diversión.",
    eyebrowDia: "Día",
    eyebrowNoite: "Noche",
    eyebrowTerreo: "Planta Baja",
    eyebrow2Andar: "2º Piso",
    externaTitulo: "Área Exterior",
    externaTexto: "Piscina, parrilla, ducha y patio arbolado para momentos inolvidables.",
    galeriaCasa: "La Casa",
    galeriaQuintal: "Patio y Piscina",
    galeriaChurras: "Parrilla",
    galeriaLazer: "Ocio",
    externaNoiteTitulo: "Área Exterior - Noche",
    externaNoiteTexto: "Iluminación ambiental que crea el escenario perfecto para noches inolvidables.",
    terreoTitulo: "Área Interna - Planta Baja",
    terreoTexto: "Sala, cocina equipada, suite climatizada y baño de apoyo.",
    segundoAndarTitulo: "Área Interna - Segundo Piso",
    segundoAndarTexto: "Balcón, mesa de billar, baño y dos suites climatizadas.",
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

const FLAGS = { pt: 'br.webp', en: 'us.webp', es: 'es.webp' };
const LANG_LABEL = { pt: 'PT', en: 'EN', es: 'ES' };

let currentLang = localStorage.getItem('lang') || 'pt';
const basePath = '../';

function applyLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

  const t = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  const flag  = document.getElementById('lang-flag');
  const label = document.getElementById('lang-label');
  if (flag)  flag.src = basePath + 'img/bandeiras/' + FLAGS[lang];
  if (label) label.textContent = LANG_LABEL[lang];

  document.querySelectorAll('.lang-picker__option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  document.querySelectorAll('.navbar__mobile-lang-options button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* Desktop picker */
const picker    = document.getElementById('lang-picker');
const pickerBtn = document.getElementById('lang-btn');

if (picker && pickerBtn) {
  pickerBtn.addEventListener('click', () => {
    const open = picker.classList.toggle('open');
    pickerBtn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => {
    if (!picker.contains(e.target)) { picker.classList.remove('open'); pickerBtn.setAttribute('aria-expanded', 'false'); }
  });
  document.querySelectorAll('.lang-picker__option').forEach(opt => {
    opt.addEventListener('click', () => { applyLang(opt.dataset.lang); picker.classList.remove('open'); });
    opt.addEventListener('keydown', e => { if (e.key === 'Enter') { applyLang(opt.dataset.lang); picker.classList.remove('open'); } });
  });
}

/* Mobile lang */
document.querySelectorAll('.navbar__mobile-lang-options button').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(currentLang);
