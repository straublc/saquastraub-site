<template>
  <!-- ===== HERO ===== -->
  <section class="hero" id="home" aria-label="Banner principal">
    <div class="hero__slides" aria-hidden="true">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="hero__slide"
        :class="{ active: currentSlide === i }"
        :style="`background-image:url('${slide.img}');${slide.pos ? 'background-position:' + slide.pos : ''}`"
      ></div>
    </div>
    <div class="hero__overlay" aria-hidden="true"></div>

    <div class="hero__content">
      <p class="hero__eyebrow"><i class="bi bi-geo-alt-fill"></i> Saquarema, RJ</p>
      <h1 class="hero__title">{{ t('heroTitle') }}</h1>
      <p class="hero__subtitle">{{ t('heroSubtitle') }}</p>
      <div class="hero__cta">
        <a href="#reserva" class="btn btn--ghost">
          <i class="bi bi-calendar-check"></i><span>{{ t('heroButton') }}</span>
        </a>
        <RouterLink to="/instalacoes" class="btn btn--ghost" style="background:transparent;border-color:rgba(255,255,255,.35)">
          <i class="bi bi-images"></i><span>{{ t('verFotos') }}</span>
        </RouterLink>
      </div>
    </div>

    <div class="hero__dots" aria-label="Navegação do banner" role="tablist">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="hero__dot"
        :class="{ active: currentSlide === i }"
        @click="goToSlide(i)"
        :aria-label="`Slide ${i + 1}`"
        role="tab"
      ></button>
    </div>
  </section>

  <!-- ===== STATS BAR ===== -->
  <StatsBar />

  <!-- ===== GALLERY ===== -->
  <section class="section" id="galeria">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('galeriaEyebrow') }}</span>
        <h2 class="section__title">{{ t('galeriaTitle') }}</h2>
      </div>
      <div class="gallery-grid" id="gallery-home">
        <div
          v-for="(photo, i) in homeGallery"
          :key="i"
          class="gallery-item"
          @click="openLightbox(i)"
          @keydown.enter="openLightbox(i)"
          tabindex="0"
          role="button"
        >
          <img :src="photo.src" :alt="photo.alt" :loading="i === 0 ? 'eager' : 'lazy'" :fetchpriority="i === 0 ? 'high' : undefined">
          <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>
      <div class="text-center mt-4">
        <RouterLink to="/instalacoes" class="btn btn--outline">
          <i class="bi bi-images"></i><span>{{ t('verTodasFotos') }}</span>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- ===== AMENITIES ===== -->
  <section class="section section--alt" id="comodidades">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('comodidadesEyebrow') }}</span>
        <h2 class="section__title">{{ t('comodidades') }}</h2>
      </div>
      <div class="amenities-grid">
        <div class="amenity-card" v-for="amenity in amenities" :key="amenity.key">
          <div class="amenity-icon">
            <i v-if="amenity.icon" :class="`bi bi-${amenity.icon}`"></i>
            <svg v-else-if="amenity.svg === 'pingpong'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="9" cy="8" r="6"/>
              <line x1="3" y1="8" x2="15" y2="8"/>
              <line x1="13.2" y1="12.8" x2="20" y2="20"/>
              <line x1="14.8" y1="11.2" x2="21.5" y2="18.5"/>
              <path d="M20 20 Q21.5 21.5 21.5 18.5"/>
              <circle cx="20" cy="5" r="1.8" fill="currentColor" stroke="none" opacity=".7"/>
            </svg>
            <svg v-else-if="amenity.svg === 'toto'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="2" x2="5" y2="22"/><line x1="19" y1="2" x2="19" y2="22"/>
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="12" cy="9" r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" opacity=".4"/>
            </svg>
          </div>
          <span class="amenity-name">{{ t(amenity.key) }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== INSTALLATIONS PREVIEW ===== -->
  <section class="section" id="instalacoes-preview">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('instalacoesEyebrow') }}</span>
        <h2 class="section__title">{{ t('instalacoesTitle') }}</h2>
        <p class="section__subtitle">{{ t('instalacoesSubtitle') }}</p>
      </div>
      <div class="installations-grid">
        <div class="installation-card">
          <div class="installation-card__icon"><i class="bi bi-tree"></i></div>
          <h3 class="installation-card__title">{{ t('areaExternaTitle') }}</h3>
          <p class="installation-card__desc">{{ t('areaExternaDesc') }}</p>
          <ul class="installation-card__list">
            <li>{{ t('piscinaRefrescante') }}</li>
            <li>{{ t('churrasqueiraEspacosa') }}</li>
            <li>{{ t('chuveiraoAoArLivre') }}</li>
            <li>{{ t('quintalArborizado') }}</li>
          </ul>
        </div>
        <div class="installation-card">
          <div class="installation-card__icon"><i class="bi bi-house"></i></div>
          <h3 class="installation-card__title">{{ t('areaInternaTitle') }}</h3>
          <p class="installation-card__desc">{{ t('areaInternaDesc') }}</p>
          <ul class="installation-card__list">
            <li>{{ t('suitesClimatizadas') }}</li>
            <li>{{ t('salaEspacosa') }}</li>
            <li>{{ t('cozinhaEquipada') }}</li>
            <li>{{ t('varandaVista') }}</li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-5">
        <RouterLink to="/instalacoes" class="btn btn--primary">
          <i class="bi bi-images"></i><span>{{ t('verTodasInstalacoes') }}</span>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- ===== LOCATION ===== -->
  <section class="section section--alt" id="localizacao">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('localizacaoEyebrow') }}</span>
        <h2 class="section__title">{{ t('localizacao') }}</h2>
      </div>
      <div class="location-grid">
        <div class="location-text">
          <h3>{{ t('localizacaoTitulo') }}</h3>
          <p v-html="t('texto1')"></p>
          <p>{{ t('texto2') }}</p>
          <p>{{ t('texto3') }}</p>
          <div class="location-actions">
            <a href="https://www.google.com/maps/place/SaquaStraub+-+Casa+de+Praia+em+Saquarema+%7C+Piscina+%7C+At%C3%A9+20+pessoas/@-22.8990982,-42.4826869,17z" target="_blank" rel="noopener" class="btn btn--primary">
              <i class="bi bi-map"></i><span>{{ t('abrirGoogleMaps') }}</span>
            </a>
            <a href="https://waze.com/ul?ll=-22.8990982,-42.480112&navigate=yes&zoom=17&pin=1" target="_blank" rel="noopener" class="btn btn--outline">
              <i class="bi bi-geo-alt-fill"></i><span>{{ t('abrirWaze') }}</span>
            </a>
          </div>
        </div>
        <div class="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8!2d-42.4826869!3d-22.8990982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x975f9b6e4ea585%3A0xd7e2ffced1e7cce1!2sSaquaStraub%20-%20Casa%20de%20Praia%20em%20Saquarema!5e0!3m2!1spt-BR!2sbr!4v1718555000000!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização da SaquaStraub no Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== ATTRACTIONS ===== -->
  <section class="section" id="atracoes">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('atracoesEyebrow') }}</span>
        <h2 class="section__title">{{ t('atracoesTitle') }}</h2>
        <p class="section__subtitle">{{ t('atracoesSubtitle') }}</p>
      </div>
      <div class="attractions-grid">
        <div class="attraction-card" v-for="attr in attractions" :key="attr.key">
          <div class="attraction-card__icon">
            <i v-if="attr.icon" :class="`bi bi-${attr.icon}`"></i>
            <svg v-else-if="attr.svg === 'church'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="12" y1="2" x2="12" y2="6"/><line x1="10" y1="4" x2="14" y2="4"/>
              <path d="M9 6 L9 10 L5 10 L5 22 L19 22 L19 10 L15 10 L15 6 Z"/>
              <rect x="10" y="15" width="4" height="7"/>
              <path d="M9 10 L12 7 L15 10"/>
            </svg>
            <svg v-else-if="attr.svg === 'shop'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 9.5 L3 21 L21 21 L21 9.5"/>
              <path d="M2 6 L22 6 L20 3 L4 3 Z"/>
              <path d="M2 6 Q2 10 5 10 Q8 10 8 6"/>
              <path d="M8 6 Q8 10 12 10 Q16 10 16 6"/>
              <path d="M16 6 Q16 10 19 10 Q22 10 22 6"/>
              <rect x="9" y="14" width="6" height="7"/>
            </svg>
            <svg v-else-if="attr.svg === 'stadium'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <ellipse cx="12" cy="12" rx="9" ry="5"/>
              <path d="M3 12 Q3 20 12 20 Q21 20 21 12"/>
              <path d="M7 7 Q7 3 12 3 Q17 3 17 7"/>
              <line x1="12" y1="7" x2="12" y2="17"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
            </svg>
          </div>
          <h3 class="attraction-card__title">{{ t(attr.key) }}</h3>
          <p class="attraction-card__distance">{{ attr.distance }}</p>
          <p class="attraction-card__desc">{{ t(attr.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== EVENTS PREVIEW ===== -->
  <section class="section section--alt" id="eventos-preview" v-if="upcomingEvents.length">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('eventosPreviewEyebrow') }}</span>
        <h2 class="section__title">{{ t('eventosPreviewTitle') }}</h2>
        <p class="section__subtitle">{{ t('eventosPreviewSubtitle') }}</p>
      </div>
      <div class="events-preview-grid">
        <EventCard
          v-for="event in upcomingEvents"
          :key="event.id"
          :event="event"
        />
      </div>
      <div class="text-center mt-4">
        <RouterLink to="/eventos" class="btn btn--primary">
          <i class="bi bi-calendar-event"></i><span>{{ t('verTodosEventos') }}</span>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- ===== RESERVATION ===== -->
  <section class="section" id="reserva">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('reservaEyebrow') }}</span>
        <h2 class="section__title">{{ t('facaReserva') }}</h2>
        <p class="section__subtitle">{{ t('reservarTexto') }}</p>
      </div>
      <ReservationForm />
    </div>
  </section>

  <!-- Lightbox -->
  <GalleryLightbox v-model="lightboxOpen" :images="lightboxImages" :initial-index="lightboxIdx" />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useEvents } from '../composables/useEvents.js'
import StatsBar from '../components/ui/StatsBar.vue'
import EventCard from '../components/events/EventCard.vue'
import GalleryLightbox from '../components/ui/GalleryLightbox.vue'
import ReservationForm from '../components/ui/ReservationForm.vue'

const { t } = useI18n()
const { activeEvents } = useEvents()

// Hero slider
const slides = [
  { img: '/img/banner/casa.webp',        pos: 'center 45%' },
  { img: '/img/banner/piscina.webp',     pos: null },
  { img: '/img/banner/quintal.webp',     pos: null },
  { img: '/img/banner/quintalNoite.webp',pos: null },
  { img: '/img/banner/piscinaNoite.webp',pos: null }
]
const currentSlide = ref(0)
let sliderTimer = null

function goToSlide(n) {
  currentSlide.value = (n + slides.length) % slides.length
  resetTimer()
}

function startTimer() {
  sliderTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 4500)
}

function resetTimer() {
  clearInterval(sliderTimer)
  startTimer()
}

onMounted(() => startTimer())
onUnmounted(() => clearInterval(sliderTimer))

// Gallery
const homeGallery = [
  { src: '/img/externa/01.webp', alt: 'Casa' },
  { src: '/img/externa/02.webp', alt: 'Casa' },
  { src: '/img/externa/05.webp', alt: 'Piscina' },
  { src: '/img/externa/06.webp', alt: 'Piscina' },
  { src: '/img/externa/14.webp', alt: 'Churrasqueira' },
  { src: '/img/externa/17.jpg',  alt: 'Totó' }
]

const lightboxOpen = ref(false)
const lightboxIdx  = ref(0)
const lightboxImages = computed(() => homeGallery.map(p => ({ src: p.src, alt: p.alt })))

function openLightbox(i) {
  lightboxIdx.value  = i
  lightboxOpen.value = true
}

// Amenities
const amenities = [
  { key: 'ar',         icon: 'snow'        },
  { key: 'suites',     icon: 'house-door'  },
  { key: 'maxPessoas', icon: 'people'      },
  { key: 'churrasqueira', icon: 'fire'     },
  { key: 'banheiros',  icon: 'droplet'     },
  { key: 'wifi',       icon: 'wifi'        },
  { key: 'piscina',    icon: 'water'       },
  { key: 'pingpong',   svg: 'pingpong'     },
  { key: 'sinuca',     icon: '8-circle'    },
  { key: 'toto',       svg: 'toto'         }
]

// Attractions
const attractions = [
  { key: 'paroquia',       descKey: 'paroquiaDesc',       svg: 'church',   distance: '3.5 km • 7 min'  },
  { key: 'praiaVila',      descKey: 'praiaVilaDesc',      icon: 'sun',     distance: '5.5 km • 10 min' },
  { key: 'praiaItauna',    descKey: 'praiaItaunaDesc',    icon: 'water',   distance: '4.9 km • 8 min'  },
  { key: 'centroSaquarema',descKey: 'centroSaquaremaDesc',icon: 'shop',    distance: '3.2 km • 6 min'  },
  { key: 'bacaxa',         descKey: 'bacaxaDesc',         svg: 'shop',     distance: '2.0 km • 5 min'  },
  { key: 'estadioBoaVista',descKey: 'estadioBoaVistaDesc',svg: 'stadium',  distance: '4.0 km • 7 min'  }
]

// Events preview (next 3)
const upcomingEvents = computed(() => activeEvents.value.slice(0, 3))
</script>
