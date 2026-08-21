<template>
  <!-- Page Header -->
  <div class="page-header">
    <div class="container">
      <nav aria-label="Trilha de navegação">
        <ol class="breadcrumb">
          <li><RouterLink to="/"><i class="bi bi-house-door"></i> {{ t('inicio') }}</RouterLink></li>
          <li class="breadcrumb__sep" aria-hidden="true"><i class="bi bi-chevron-right"></i></li>
          <li aria-current="page">{{ t('instalacoes') }}</li>
        </ol>
      </nav>
      <div class="section__header" style="margin-top:1.5rem;margin-bottom:0">
        <h1 class="section__title">{{ t('instalacoesTitle') }}</h1>
        <p class="section__subtitle">{{ t('instalacoesSubtitle') }}</p>
      </div>
    </div>
  </div>

  <!-- ===== ÁREA EXTERNA ===== -->
  <section class="section" id="area-externa">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('eyebrowDia') }}</span>
        <h2 class="section__title">{{ t('externaTitulo') }}</h2>
        <p class="section__subtitle">{{ t('externaTexto') }}</p>
      </div>

      <h3 class="gallery-section-label">{{ t('galeriaCasa') }}</h3>
      <div class="gallery-grid gallery-grid--full" style="margin-bottom:2rem">
        <div v-for="(p, i) in galCasa" :key="i" class="gallery-item" @click="openLb(allExternal, extCasaOffset + i)" tabindex="0" role="button" @keydown.enter="openLb(allExternal, extCasaOffset + i)">
          <img :src="p.src" :alt="p.alt" loading="lazy" decoding="async">
          <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>

      <h3 class="gallery-section-label">{{ t('galeriaQuintal') }}</h3>
      <div class="gallery-grid gallery-grid--full" style="margin-bottom:2rem">
        <div v-for="(p, i) in galQuintal" :key="i" class="gallery-item" @click="openLb(allExternal, extQuintalOffset + i)" tabindex="0" role="button" @keydown.enter="openLb(allExternal, extQuintalOffset + i)">
          <img :src="p.src" :alt="p.alt" loading="lazy" decoding="async">
          <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>

      <h3 class="gallery-section-label">{{ t('galeriaChurras') }}</h3>
      <div class="gallery-grid gallery-grid--full" style="margin-bottom:2rem">
        <div v-for="(p, i) in galChurras" :key="i" class="gallery-item" @click="openLb(allExternal, extChurrasOffset + i)" tabindex="0" role="button" @keydown.enter="openLb(allExternal, extChurrasOffset + i)">
          <img :src="p.src" :alt="p.alt" loading="lazy" decoding="async">
          <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>

      <h3 class="gallery-section-label">{{ t('galeriaLazer') }}</h3>
      <div class="gallery-grid gallery-grid--full">
        <div v-for="(p, i) in galLazer" :key="i" class="gallery-item" @click="openLb(allExternal, extLazerOffset + i)" tabindex="0" role="button" @keydown.enter="openLb(allExternal, extLazerOffset + i)">
          <img :src="p.src" :alt="p.alt" loading="lazy" decoding="async">
          <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== ÁREA EXTERNA NOITE ===== -->
  <section class="section section--alt" id="area-externa-noite">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('eyebrowNoite') }}</span>
        <h2 class="section__title">{{ t('externaNoiteTitulo') }}</h2>
        <p class="section__subtitle">{{ t('externaNoiteTexto') }}</p>
      </div>
      <div class="gallery-grid gallery-grid--full">
        <div v-for="(p, i) in galNoite" :key="i" class="gallery-item" @click="openLb(galNoite, i)" tabindex="0" role="button" @keydown.enter="openLb(galNoite, i)">
          <img :src="p.src" :alt="p.alt" loading="lazy" decoding="async">
          <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TÉRREO ===== -->
  <section class="section" id="terreo">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('eyebrowTerreo') }}</span>
        <h2 class="section__title">{{ t('terreoTitulo') }}</h2>
        <p class="section__subtitle">{{ t('terreoTexto') }}</p>
      </div>
      <div class="gallery-grid gallery-grid--full">
        <div v-for="(p, i) in galTerreo" :key="i" class="gallery-item" @click="openLb(galTerreo, i)" tabindex="0" role="button" @keydown.enter="openLb(galTerreo, i)">
          <img :src="p.src" :alt="p.alt" loading="lazy" decoding="async">
          <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== SEGUNDO ANDAR ===== -->
  <section class="section section--alt" id="segundo-andar">
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">{{ t('eyebrow2Andar') }}</span>
        <h2 class="section__title">{{ t('segundoAndarTitulo') }}</h2>
        <p class="section__subtitle">{{ t('segundoAndarTexto') }}</p>
      </div>
      <div class="gallery-grid gallery-grid--full">
        <div v-for="(p, i) in galSegundoAndar" :key="i" class="gallery-item" @click="openLb(galSegundoAndar, i)" tabindex="0" role="button" @keydown.enter="openLb(galSegundoAndar, i)">
          <img :src="p.src" :alt="p.alt" loading="lazy" decoding="async">
          <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
        </div>
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

  <GalleryLightbox v-model="lbOpen" :images="lbImages" :initial-index="lbIdx" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import GalleryLightbox from '../components/ui/GalleryLightbox.vue'
import ReservationForm from '../components/ui/ReservationForm.vue'

const { t } = useI18n()

// Gallery data
const galCasa = [
  { src: '/img/externa/01.webp', alt: 'Casa' },
  { src: '/img/externa/02.webp', alt: 'Casa' },
  { src: '/img/externa/03.webp', alt: 'Casa' },
  { src: '/img/externa/04.webp', alt: 'Casa' }
]
const galQuintal = [
  { src: '/img/externa/05.webp', alt: 'Piscina' },
  { src: '/img/externa/06.webp', alt: 'Piscina' },
  { src: '/img/externa/07.webp', alt: 'Piscina' },
  { src: '/img/externa/08.webp', alt: 'Piscina' },
  { src: '/img/externa/09.webp', alt: 'Piscina' },
  { src: '/img/externa/10.webp', alt: 'Piscina' },
  { src: '/img/externa/11.webp', alt: 'Piscina' },
  { src: '/img/externa/12.webp', alt: 'Piscina' },
  { src: '/img/externa/13.webp', alt: 'Piscina' }
]
const galChurras = [
  { src: '/img/externa/14.webp', alt: 'Churrasqueira' },
  { src: '/img/externa/15.webp', alt: 'Churrasqueira' },
  { src: '/img/externa/16.webp', alt: 'Churrasqueira' }
]
const galLazer = [
  { src: '/img/externa/17.jpg', alt: 'Totó' },
  { src: '/img/externa/18.jpg', alt: 'Redes' }
]

const allExternal = [...galCasa, ...galQuintal, ...galChurras, ...galLazer]
const extCasaOffset   = 0
const extQuintalOffset = galCasa.length
const extChurrasOffset = galCasa.length + galQuintal.length
const extLazerOffset   = galCasa.length + galQuintal.length + galChurras.length

const galNoite = [
  { src: '/img/externaNoite/externaNoite01.jpg', alt: 'Área noturna' },
  { src: '/img/externaNoite/externaNoite02.jpg', alt: 'Piscina iluminada' },
  { src: '/img/externaNoite/externaNoite03.jpg', alt: 'Churrasqueira noturna' },
  { src: '/img/externaNoite/externaNoite04.jpg', alt: 'Quintal noturno' },
  { src: '/img/externaNoite/externaNoite05.jpg', alt: 'Lazer noturno' },
  { src: '/img/externaNoite/externaNoite06.jpg', alt: 'Ambiente noturno' },
  { src: '/img/externaNoite/externaNoite07.jpg', alt: 'Iluminação' },
  { src: '/img/externaNoite/externaNoite08.jpg', alt: 'Vista noturna' },
  { src: '/img/externaNoite/externaNoite09.jpg', alt: 'Atmosfera' }
]

const galTerreo = [
  { src: '/img/internaTerreo/sala00.jpeg', alt: 'Sala de estar' },
  { src: '/img/internaTerreo/sala01.jpeg', alt: 'Sala' },
  { src: '/img/internaTerreo/sala02.jpeg', alt: 'Mesa da sala' },
  { src: '/img/internaTerreo/sala03.jpeg', alt: 'Ambiente interno' },
  { src: '/img/internaTerreo/ping01.jpeg', alt: 'Mesa de ping-pong' },
  { src: '/img/internaTerreo/cozinha01.jpeg', alt: 'Cozinha' },
  { src: '/img/internaTerreo/cozinha02.jpeg', alt: 'Cozinha' },
  { src: '/img/internaTerreo/cozinha03.jpeg', alt: 'Bancada' },
  { src: '/img/internaTerreo/cozinha04.jpeg', alt: 'Cozinha detalhes' },
  { src: '/img/internaTerreo/banheiro01.jpeg', alt: 'Banheiro térreo' },
  { src: '/img/internaTerreo/suite01.jpeg', alt: 'Suíte térreo' },
  { src: '/img/internaTerreo/suite02.jpeg', alt: 'Banheiro suíte' },
  { src: '/img/internaTerreo/suite03.jpeg', alt: 'Suíte detalhes' },
  { src: '/img/internaTerreo/suite04.jpeg', alt: 'Suíte' },
  { src: '/img/internaTerreo/suite05.jpeg', alt: 'Suíte' },
  { src: '/img/internaTerreo/suite06.jpeg', alt: 'Suíte' },
  { src: '/img/internaTerreo/escada.jpg', alt: 'Escada' },
  { src: '/img/internaTerreo/escada01.jpg', alt: 'Escada' }
]

const galSegundoAndar = [
  { src: '/img/internaSegundoAndar/sinuca.jpg', alt: 'Mesa de sinuca' },
  { src: '/img/internaSegundoAndar/banheiro02.jpg', alt: 'Banheiro 2º andar' },
  { src: '/img/internaSegundoAndar/suite04.jpg', alt: 'Suíte' },
  { src: '/img/internaSegundoAndar/suite05.jpg', alt: 'Banheiro suíte' },
  { src: '/img/internaSegundoAndar/suite06.jpg', alt: 'Segunda suíte' },
  { src: '/img/internaSegundoAndar/suite07.jpg', alt: 'Suíte detalhes' },
  { src: '/img/internaSegundoAndar/suite08.jpg', alt: 'Banheiro' },
  { src: '/img/internaSegundoAndar/suite09.jpg', alt: 'Suíte' },
  { src: '/img/internaSegundoAndar/varanda.jpg', alt: 'Varanda com vista' }
]

// Lightbox
const lbOpen   = ref(false)
const lbIdx    = ref(0)
const lbImages = ref([])

function openLb(gallery, idx) {
  lbImages.value = gallery.map(p => ({ src: p.src, alt: p.alt }))
  lbIdx.value    = idx
  lbOpen.value   = true
}
</script>
