<template>
  <div class="event-meta__item">
    <i class="bi bi-geo-alt-fill" style="color:var(--brand-500)"></i>
    <span>{{ location.address }}</span>
  </div>
  <div style="margin-top:1rem">
    <a
      :href="location.mapsUrl"
      target="_blank"
      rel="noopener"
      class="btn btn--outline"
    >
      <i class="bi bi-map"></i> {{ t('verNoMapa') }}
    </a>
  </div>
</template>

<script setup>
import { useI18n } from '../../composables/useI18n.js'

defineProps({
  location: { type: Object, required: true }
})

const { t } = useI18n()
</script>
