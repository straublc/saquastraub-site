<template>
  <div class="empty-state">
    <div class="empty-state__emoji">🏄</div>
    <h3 class="empty-state__title">{{ t('semEventos') }}</h3>
    <p class="empty-state__desc">{{ t('semEventosDesc') }}</p>
    <button class="btn btn--outline" @click="$emit('clear')">
      {{ t('limparFiltros') }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from '../../composables/useI18n.js'

const { t } = useI18n()
defineEmits(['clear'])
</script>

<style scoped>
.empty-state {
  text-align: center;
  padding: 4rem 1rem;
}

.empty-state__emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.empty-state__title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--gray-900);
  margin-bottom: .5rem;
}

.empty-state__desc {
  color: var(--gray-500);
  margin-bottom: 1.5rem;
}
</style>
