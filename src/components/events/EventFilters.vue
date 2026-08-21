<template>
  <div class="event-filters">
    <!-- Chip row -->
    <div class="event-filters__chips">
      <!-- All chip -->
      <button
        class="filter-chip"
        :class="{ active: activePill === 'all' }"
        @click="clearAll"
      >
        {{ t('todos') }}
      </button>

      <!-- Month chips -->
      <button
        v-for="month in availableMonths"
        :key="month"
        class="filter-chip"
        :class="{ active: activePill === month }"
        @click="selectMonth(month)"
      >
        {{ formatMonthChip(month) }}
      </button>

      <!-- Period toggle -->
      <button
        class="filter-chip"
        :class="{ active: activePill === 'period' }"
        @click="togglePeriod"
      >
        <i class="bi bi-calendar-range" style="margin-right:.35rem;font-size:.8rem"></i>{{ t('escolherPeriodo') }}
      </button>
    </div>

    <!-- Date inputs -->
    <div v-if="showPeriod" class="filter-period">
      <span class="filter-period__label">{{ t('de') }}</span>
      <input
        type="date"
        :value="filterStart || ''"
        @change="onStartChange($event.target.value)"
      >
      <span class="filter-period__label">{{ t('ate') }}</span>
      <input
        type="date"
        :value="filterEnd || ''"
        @change="onEndChange($event.target.value)"
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../../composables/useI18n.js'
import { useEvents } from '../../composables/useEvents.js'

const { t, locale } = useI18n()
const { availableMonths, filterMonth, filterStart, filterEnd, clearFilters } = useEvents()

const showPeriod = ref(false)

// Single source of truth for which pill is highlighted
const activePill = computed(() => {
  if (filterStart.value && filterEnd.value) return 'period'
  if (filterMonth.value) return filterMonth.value
  return 'all'
})

const MONTH_ABBR = {
  'pt-BR': ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
  'en-US': ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  'es-ES': ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
}

function formatMonthChip(yearMonth) {
  const [year, month] = yearMonth.split('-').map(Number)
  const localeCode = locale.value === 'pt' ? 'pt-BR' : locale.value === 'es' ? 'es-ES' : 'en-US'
  const abbrs = MONTH_ABBR[localeCode] || MONTH_ABBR['pt-BR']
  return `${abbrs[month - 1]} ${year}`
}

function selectMonth(month) {
  filterMonth.value = month
  filterStart.value = null
  filterEnd.value   = null
  showPeriod.value  = false
}

function togglePeriod() {
  showPeriod.value = !showPeriod.value
  // Opening the panel clears month/all filters so period is the only active pill
  if (showPeriod.value) {
    filterMonth.value = null
    // Keep any already-set date range; clear if closing without a range
  } else if (!filterStart.value || !filterEnd.value) {
    // Panel closed without a complete range — revert to "all"
    filterStart.value = null
    filterEnd.value   = null
  }
}

function onStartChange(value) {
  filterStart.value = value
  filterMonth.value = null
}

function onEndChange(value) {
  filterEnd.value = value
  filterMonth.value = null
}

function clearAll() {
  clearFilters()
  showPeriod.value = false
}
</script>
