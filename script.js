/* ==========================================
   SaquaStraub — Main Script
   Navbar · Hero · Lightbox · Form · AOS
========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── AOS ──────────────────────────────────
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 550, once: true, offset: 40, easing: 'ease-out-cubic' });
  }

  // ── NAVBAR scroll effect ──────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── MOBILE DRAWER ────────────────────────
  const burger        = document.getElementById('burger');
  const drawer        = document.getElementById('mobile-drawer');
  const mobileClose   = document.getElementById('mobile-close');
  const backdrop      = document.getElementById('mobile-backdrop');

  function openDrawer() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    burger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (burger && drawer) {
    burger.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
    if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
    if (backdrop)    backdrop.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  }

  // ── SMOOTH SCROLL ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ── HERO SLIDER ──────────────────────────
  const slides = document.querySelectorAll('.hero__slide');
  const dots   = document.querySelectorAll('.hero__dot');
  let current = 0;
  let timer;

  window.heroSlide = function(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    clearInterval(timer);
    timer = setInterval(() => window.heroSlide(current + 1), 4500);
  };

  if (slides.length) {
    timer = setInterval(() => window.heroSlide(current + 1), 4500);
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mouseenter', () => clearInterval(timer));
      hero.addEventListener('mouseleave', () => { timer = setInterval(() => window.heroSlide(current + 1), 4500); });
    }
  }

  // ── GALLERY LIGHTBOX ─────────────────────
  buildLightbox();

  // ── FORM VALIDATION ──────────────────────
  setupForm();

});

/* ── LIGHTBOX ────────────────────────────── */
function buildLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  const imgs = Array.from(items).map(item => {
    const img = item.querySelector('img');
    return img ? { src: img.src, alt: img.alt } : null;
  }).filter(Boolean);

  let idx = 0;

  function open(i) {
    idx = i;
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Visualizador de imagens');
    lb.innerHTML = `
      <button class="lightbox__btn lightbox__btn--close" aria-label="Fechar"><i class="bi bi-x-lg"></i></button>
      ${imgs.length > 1 ? `
        <button class="lightbox__btn lightbox__btn--prev" aria-label="Anterior"><i class="bi bi-chevron-left"></i></button>
        <button class="lightbox__btn lightbox__btn--next" aria-label="Próxima"><i class="bi bi-chevron-right"></i></button>
        <div class="lightbox__counter">${i + 1} / ${imgs.length}</div>
      ` : ''}
      <img class="lightbox__img" src="${imgs[i].src}" alt="${imgs[i].alt}">
    `;
    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';

    function update(n) {
      idx = (n + imgs.length) % imgs.length;
      lb.querySelector('.lightbox__img').src = imgs[idx].src;
      lb.querySelector('.lightbox__img').alt = imgs[idx].alt;
      const counter = lb.querySelector('.lightbox__counter');
      if (counter) counter.textContent = `${idx + 1} / ${imgs.length}`;
    }

    function close() {
      document.body.removeChild(lb);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    }

    function onKey(e) {
      if (e.key === 'Escape')       close();
      if (e.key === 'ArrowLeft')    update(idx - 1);
      if (e.key === 'ArrowRight')   update(idx + 1);
    }

    lb.querySelector('.lightbox__btn--close')?.addEventListener('click', close);
    lb.querySelector('.lightbox__btn--prev')?.addEventListener('click', () => update(idx - 1));
    lb.querySelector('.lightbox__btn--next')?.addEventListener('click', () => update(idx + 1));
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', onKey);

    // Swipe
    let sx = 0;
    lb.addEventListener('touchstart', e => { sx = e.changedTouches[0].screenX; }, { passive: true });
    lb.addEventListener('touchend', e => {
      const diff = sx - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) diff > 0 ? update(idx + 1) : update(idx - 1);
    });
  }

  items.forEach((item, i) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('click', () => open(i));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); } });
  });
}

/* ── FORM ────────────────────────────────── */
function setupForm() {
  const checkinEl  = document.getElementById('checkin');
  const checkoutEl = document.getElementById('checkout');
  const pacoteEl   = document.getElementById('pacote');
  const errIn      = document.getElementById('erroCheckin');
  const errOut     = document.getElementById('erroCheckout');
  const btn        = document.getElementById('btnReservar');

  if (!checkinEl || !btn) return;

  function validate() {
    const cin  = checkinEl.value;
    const cout = checkoutEl.value;
    const pkg  = pacoteEl.value;
    const today = new Date(); today.setHours(0,0,0,0);
    let valid = true;

    errIn.classList.remove('visible');
    errOut.classList.remove('visible');

    if (cin) {
      const d = new Date(cin + 'T00:00:00');
      if (d < today) { errIn.classList.add('visible'); valid = false; }
    }
    if (cin && cout) {
      const di = new Date(cin + 'T00:00:00');
      const do_ = new Date(cout + 'T00:00:00');
      if (do_ < di) { errOut.classList.add('visible'); valid = false; }
    }

    btn.disabled = !(valid && cin && cout && pkg);
  }

  checkinEl.addEventListener('input', validate);
  checkoutEl.addEventListener('input', validate);
  pacoteEl.addEventListener('change', validate);

  btn.addEventListener('click', () => {
    const cin = checkinEl.value;
    const cout = checkoutEl.value;
    const pkg = pacoteEl.options[pacoteEl.selectedIndex]?.text || pacoteEl.value;
    const fmt = d => { const [y,m,day] = d.split('-'); return `${day}/${m}/${y}`; };
    const msg = `Olá! Gostaria de fazer uma reserva na SaquaStraub:\n\n📅 Check-in: ${fmt(cin)}\n📅 Check-out: ${fmt(cout)}\n👥 Pacote: ${pkg}\n\nPode me passar a disponibilidade?`;
    window.open(`https://wa.me/5521976011899?text=${encodeURIComponent(msg)}`, '_blank');
  });
}
