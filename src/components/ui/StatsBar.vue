<template>
  <div class="stats-bar" aria-label="Destaques da casa">
    <div class="container">
      <div class="stats-bar__grid">
        <div class="stats-bar__item" v-for="stat in stats" :key="stat.key">
          <div class="stats-bar__icon"><i :class="`bi bi-${stat.icon}`"></i></div>
          <span class="stats-bar__value">{{ stat.value }}</span>
          <span class="stats-bar__label">{{ t(stat.key) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '../../composables/useI18n.js'

const { t } = useI18n()

const stats = [
  { key: 'statSuites',    value: '3',      icon: 'house-door' },
  { key: 'statPessoas',   value: '20',     icon: 'people' },
  { key: 'statBanheiros', value: '6',      icon: 'droplet' },
  { key: 'statPraia',     value: '4.9 km', icon: 'geo-alt' }
]
</script>
