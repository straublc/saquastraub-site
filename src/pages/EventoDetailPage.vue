<template>
  <div v-if="event" class="event-detail">
    <div class="event-detail__container">

      <!-- Back link -->
      <RouterLink to="/eventos" class="event-detail__back">
        ← {{ t('voltarEventos') }}
      </RouterLink>

      <!-- Hero image -->
      <img :src="event.coverImage" :alt="event.title" class="event-hero">

      <!-- Category badge + live -->
      <div class="event-detail__badges">
        <span class="event-detail__category">{{ categoryLabel }}</span>
        <span v-if="happening" class="detail-live-badge">
          <span class="detail-live-badge__dot"></span>
          {{ t('acontecendoAgora') }}
        </span>
      </div>

      <!-- Title -->
      <h1 class="event-detail__title">{{ event.title }}</h1>

      <!-- Meta -->
      <div class="event-meta">
        <div class="event-meta__item">
          <i class="bi bi-calendar3 event-meta__icon"></i>
          <span>{{ formattedDate }}</span>
        </div>
        <div class="event-meta__item">
          <i class="bi bi-geo-alt event-meta__icon"></i>
          <span>{{ event.location.name }}</span>
        </div>
        <div class="event-meta__item" v-if="event.officialUrl">
          <i class="bi bi-link-45deg event-meta__icon"></i>
          <a :href="event.officialUrl" target="_blank" rel="noopener" class="event-detail__link">
            {{ t('siteOficial') }}
          </a>
        </div>
      </div>

      <!-- Description -->
      <div class="event-detail__section">
        <h2 class="event-detail__section-title">{{ t('sobreEvento') }}</h2>
        <div class="event-detail__description">{{ event.description }}</div>
      </div>

      <!-- Gallery -->
      <div v-if="event.gallery?.length" class="event-detail__section">
        <h2 class="event-detail__section-title">{{ t('galeriaEvento') }}</h2>
        <EventGallery :images="event.gallery" :title="event.title" />
      </div>

      <!-- CTA WhatsApp -->
      <div class="event-cta">
        <h3>{{ t('reserveParaEvento') }}</h3>
        <p>{{ t('reserveParaEventoDesc') }}</p>
        <button class="btn btn--whatsapp" @click="reservarParaEvento">
          <i class="bi bi-whatsapp"></i>
          {{ t('reservarEventoWhats') }}
        </button>
      </div>

    </div>
  </div>

  <!-- 404 state -->
  <div v-else class="section">
    <div class="event-detail__not-found">
      <div class="event-detail__not-found-emoji">🤷</div>
      <h2 class="event-detail__not-found-title">{{ t('eventoNaoEncontrado') }}</h2>
      <p class="event-detail__not-found-desc">{{ t('eventoNaoEncontradoDesc') }}</p>
      <RouterLink to="/eventos" class="btn btn--primary">{{ t('verTodosEventos') }}</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useEvents } from '../composables/useEvents.js'
import EventGallery from '../components/events/EventGallery.vue'

const props = defineProps({
  slug: { type: String, required: true }
})

const { t, locale } = useI18n()
const { getEventBySlug, isHappeningNow } = useEvents()

const event    = computed(() => getEventBySlug(props.slug))
const happening = computed(() => event.value ? isHappeningNow(event.value) : false)

watchEffect(() => {
  if (event.value) {
    document.title = `${event.value.title} — SaquaStraub`
    setMeta('og:title',       `${event.value.title} — SaquaStraub`)
    setMeta('og:description', event.value.shortDescription)
    setMeta('og:image',       event.value.coverImage)
  }
})

function setMeta(prop, content) {
  let el = document.querySelector(`meta[property="${prop}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', prop)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const categoryLabel = computed(() => {
  if (!event.value) return ''
  const map = {
    surf:        t('catSurf'),
    religioso:   t('catReligioso'),
    cultural:    t('catCultural'),
    gastronomia: t('catGastronomia'),
    reveillon:   t('catReveillon'),
    esporte:     t('catEsporte'),
    musica:      t('catMusica')
  }
  return map[event.value.category] || event.value.category
})

const formattedDate = computed(() => {
  if (!event.value) return ''
  const localeCode = locale.value === 'pt' ? 'pt-BR' : locale.value === 'es' ? 'es-ES' : locale.value === 'de' ? 'de-DE' : locale.value === 'fr' ? 'fr-FR' : locale.value === 'it' ? 'it-IT' : 'en-US'
  const start = new Date(event.value.startDate + 'T00:00:00')
  const end   = event.value.endDate ? new Date(event.value.endDate + 'T00:00:00') : null
  if (!end || event.value.startDate === event.value.endDate) {
    return start.toLocaleDateString(localeCode, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  }
  return `${start.toLocaleDateString(localeCode, { day: 'numeric', month: 'long' })} – ${end.toLocaleDateString(localeCode, { day: 'numeric', month: 'long', year: 'numeric' })}`
})

function fmtWhats(dateStr) {
  if (!dateStr) return '?'
  const [y, m, d] = dateStr.split('-')
  return `${d}/${m}/${y}`
}

function reservarParaEvento() {
  if (!event.value) return
  const endStr = event.value.endDate
    ? `a ${fmtWhats(event.value.endDate)}`
    : 'em diante'
  const msg = `Olá! Vi o evento "${event.value.title}", que acontece de ${fmtWhats(event.value.startDate)} ${endStr} em Saquarema, e gostaria de consultar a disponibilidade da casa nesse período.`
  window.open(`https://wa.me/5521976011899?text=${encodeURIComponent(msg)}`, '_blank')
}
</script>

<style scoped>
/* ── Page layout ── */
.event-detail {
  padding-top: 5.5rem;
  padding-bottom: var(--section-py);
}

.event-detail__container {
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
}

/* ── Back link ── */
.event-detail__back {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  color: var(--brand-500);
  font-size: .88rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  transition: color .2s;
}
.event-detail__back:hover { color: var(--brand-600); }

/* ── Badges row ── */
.event-detail__badges {
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
}

.event-detail__category {
  background: var(--brand-500);
  color: #fff;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: .3rem .8rem;
  border-radius: var(--r-full);
}

/* ── Title ── */
.event-detail__title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--gray-900);
  line-height: 1.2;
  margin-bottom: 1rem;
}

/* ── Meta icons ── */
.event-meta__icon { color: var(--brand-500); }

/* ── Official site link ── */
.event-detail__link {
  color: var(--brand-500);
  transition: color .2s;
}
.event-detail__link:hover { color: var(--brand-600); }

/* ── Description / Gallery sections ── */
.event-detail__section {
  margin-bottom: 3rem;
}

.event-detail__section-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 1rem;
}

.event-detail__description {
  color: var(--gray-600);
  line-height: 1.8;
  white-space: pre-line;
}

/* ── 404 state ── */
.event-detail__not-found {
  text-align: center;
  padding: 4rem 1rem;
}

.event-detail__not-found-emoji  { font-size: 3rem; margin-bottom: 1rem; }

.event-detail__not-found-title {
  font-family: var(--font-display);
  color: var(--gray-900);
  margin-bottom: .5rem;
}

.event-detail__not-found-desc {
  color: var(--gray-500);
  margin-bottom: 1.5rem;
}

/* ── Live badge ── */
.detail-live-badge {
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  background: rgba(22, 163, 74, 0.1);
  border: 1.5px solid rgba(22, 163, 74, 0.3);
  color: #15803d;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  padding: .35rem 1rem;
  border-radius: var(--r-full);
}

.detail-live-badge__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  animation: detail-live-pulse 1.8s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes detail-live-pulse {
  0%   { box-shadow: 0 0 0 0   rgba(34, 197, 94, 0.7); }
  60%  { box-shadow: 0 0 0 7px rgba(34, 197, 94, 0);   }
  100% { box-shadow: 0 0 0 0   rgba(34, 197, 94, 0);   }
}
</style>
