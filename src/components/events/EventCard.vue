<template>
  <article
    class="event-card"
    :class="{ 'event-card--live': happening }"
    @click="navigateToEvent"
    @keydown.enter="navigateToEvent"
    tabindex="0"
    role="button"
    :aria-label="happening ? `${localizedEvent.title} — ${t('acontecendoAgora')}` : localizedEvent.title"
  >
    <div class="event-card__image">
      <img :src="event.coverImage" :alt="localizedEvent.title" loading="lazy">

      <!-- Gradient overlay only when live -->
      <div v-if="happening" class="event-card__live-overlay"></div>

      <span class="event-card__category">{{ categoryLabel }}</span>

      <span v-if="happening" class="event-card__live">
        <span class="event-card__live-dot"></span>
        {{ t('acontecendoAgora') }}
      </span>
    </div>

    <div class="event-card__body">
      <h3 class="event-card__title">{{ localizedEvent.title }}</h3>

      <div class="event-card__meta">
        <span class="event-card__meta-item">
          <i class="bi bi-calendar3"></i>
          {{ formattedDate }}
        </span>
        <span class="event-card__meta-item">
          <i class="bi bi-geo-alt"></i>
          {{ localizedEvent.location.name }}
        </span>
      </div>

      <p class="event-card__desc">{{ localizedEvent.shortDescription }}</p>

      <div v-if="happening" class="event-card__live-cta">
        <i class="bi bi-arrow-right-circle-fill"></i>
        {{ t('verDetalhes') }}
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../../composables/useI18n.js'
import { useEvents, localizeEvent } from '../../composables/useEvents.js'

const props = defineProps({
  event: { type: Object, required: true }
})

const router = useRouter()
const { t, locale } = useI18n()
const { isHappeningNow } = useEvents()

const happening = computed(() => isHappeningNow(props.event))
const localizedEvent = computed(() => localizeEvent(props.event, locale.value))

const categoryLabel = computed(() => {
  const map = {
    surf:        t('catSurf'),
    religioso:   t('catReligioso'),
    cultural:    t('catCultural'),
    gastronomia: t('catGastronomia'),
    reveillon:   t('catReveillon'),
    esporte:     t('catEsporte'),
    musica:      t('catMusica')
  }
  return map[props.event.category] || props.event.category
})

const formattedDate = computed(() => {
  const localeCode = locale.value === 'pt' ? 'pt-BR' : locale.value === 'es' ? 'es-ES' : locale.value === 'de' ? 'de-DE' : locale.value === 'fr' ? 'fr-FR' : locale.value === 'it' ? 'it-IT' : 'en-US'
  const start = new Date(props.event.startDate + 'T00:00:00')
  const end   = new Date(props.event.endDate   + 'T00:00:00')

  if (props.event.startDate === props.event.endDate) {
    return start.toLocaleDateString(localeCode, { day: 'numeric', month: 'short', year: 'numeric' })
  }

  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()
  if (sameMonth) {
    return `${start.getDate()} – ${end.toLocaleDateString(localeCode, { day: 'numeric', month: 'short', year: 'numeric' })}`
  }
  return `${start.toLocaleDateString(localeCode, { day: 'numeric', month: 'short' })} – ${end.toLocaleDateString(localeCode, { day: 'numeric', month: 'short', year: 'numeric' })}`
})

function navigateToEvent() {
  router.push(`/eventos/${props.event.slug}`)
}
</script>

<style scoped>
/* ── Live badge dot animation ── */
.event-card__live-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
  animation: live-pulse 1.8s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes live-pulse {
  0%   { box-shadow: 0 0 0 0   rgba(74, 222, 128, 0.7); }
  60%  { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0);   }
  100% { box-shadow: 0 0 0 0   rgba(74, 222, 128, 0);   }
}

/* ── Live gradient overlay on image ── */
.event-card__live-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(14, 165, 233, 0.18) 0%,
    rgba(16, 185, 129, 0.12) 100%
  );
  pointer-events: none;
  z-index: 1;
}

/* ── Meta row (date + location) ── */
.event-card__meta {
  display: flex;
  flex-direction: column;
  gap: .3rem;
  margin-bottom: .6rem;
}

.event-card__meta-item {
  display: flex;
  align-items: center;
  gap: .4rem;
  font-size: .82rem;
  color: var(--gray-500);
}

.event-card__meta-item i {
  color: var(--brand-500);
  font-size: .85rem;
  flex-shrink: 0;
}

/* ── Live CTA row ── */
.event-card__live-cta {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  margin-top: .85rem;
  font-size: .82rem;
  font-weight: 700;
  color: var(--brand-600);
  letter-spacing: .01em;
  transition: gap .2s;
}

.event-card--live:hover .event-card__live-cta {
  gap: .6rem;
}

.event-card__live-cta i {
  font-size: 1rem;
}
</style>
