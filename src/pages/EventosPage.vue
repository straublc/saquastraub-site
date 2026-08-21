<template>
  <!-- Page Header -->
  <div class="page-header">
    <div class="container">
      <nav aria-label="Trilha de navegação">
        <ol class="breadcrumb">
          <li><RouterLink to="/"><i class="bi bi-house-door"></i> {{ t('inicio') }}</RouterLink></li>
          <li class="breadcrumb__sep" aria-hidden="true"><i class="bi bi-chevron-right"></i></li>
          <li aria-current="page">{{ t('eventos') }}</li>
        </ol>
      </nav>
      <div class="section__header" style="margin-top:1.5rem;margin-bottom:0">
        <span class="section__eyebrow">{{ t('eventosEyebrow') }}</span>
        <h1 class="section__title">{{ t('eventosTitle') }}</h1>
        <p class="section__subtitle">{{ t('eventosSubtitle') }}</p>
      </div>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <EventFilters />

      <div v-if="filteredEvents.length" class="events-grid">
        <EventCard
          v-for="event in filteredEvents"
          :key="event.id"
          :event="event"
        />
      </div>

      <EventEmptyState v-else @clear="clearFilters" />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
import { useEvents } from '../composables/useEvents.js'
import EventFilters from '../components/events/EventFilters.vue'
import EventCard from '../components/events/EventCard.vue'
import EventEmptyState from '../components/events/EventEmptyState.vue'

const { t } = useI18n()
const { filteredEvents, clearFilters } = useEvents()
</script>
