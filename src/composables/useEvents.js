import { computed, ref } from 'vue'
import { events } from '../data/events.js'

// ── Shared state (singleton) ─────────────────────────────────────────────────
// Defined outside the function so every call to useEvents() reads/writes the
// same refs — filters set in EventFilters are immediately visible in EventosPage.
const filterMonth = ref(null)  // '2026-09'
const filterStart = ref(null)  // '2026-09-10'
const filterEnd   = ref(null)  // '2026-09-20'
// ─────────────────────────────────────────────────────────────────────────────

export function useEvents() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Base: published + endDate >= today  (null = sem expiração)
  const activeEvents = computed(() => {
    return events
      .filter(e => e.published)
      .filter(e => e.endDate === null || new Date(e.endDate + 'T00:00:00') >= today)
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
  })

  // With filters applied
  const filteredEvents = computed(() => {
    let result = activeEvents.value

    if (filterStart.value && filterEnd.value) {
      // Interval intersection — null endDate = "open-ended", always overlaps
      result = result.filter(e => {
        const eEnd = e.endDate ?? '9999-12-31'
        return e.startDate <= filterEnd.value && eEnd >= filterStart.value
      })
    } else if (filterMonth.value) {
      // Any overlap with selected month — null endDate treated as open-ended
      const [year, month] = filterMonth.value.split('-').map(Number)
      const monthStart = `${year}-${String(month).padStart(2, '0')}-01`
      const lastDay = new Date(year, month, 0).getDate()
      const monthEnd = `${year}-${String(month).padStart(2, '0')}-${lastDay}`
      result = result.filter(e => {
        const eEnd = e.endDate ?? '9999-12-31'
        return e.startDate <= monthEnd && eEnd >= monthStart
      })
    }

    return result
  })

  // Available months derived from active events
  const availableMonths = computed(() => {
    const months = new Set()
    activeEvents.value.forEach(e => {
      const start = new Date(e.startDate + 'T00:00:00')
      const endStr = e.endDate ?? e.startDate   // null = open-ended, use start month only
      const end   = new Date(endStr + 'T00:00:00')
      const cur = new Date(start.getFullYear(), start.getMonth(), 1)
      const endMonth = new Date(end.getFullYear(), end.getMonth(), 1)
      while (cur <= endMonth) {
        const key = `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, '0')}`
        months.add(key)
        cur.setMonth(cur.getMonth() + 1)
      }
    })
    return Array.from(months).sort()
  })

  const isHappeningNow = (event) => {
    const start = new Date(event.startDate + 'T00:00:00')
    if (event.endDate === null) return today >= start   // open-ended = always on after start
    const end = new Date(event.endDate + 'T00:00:00')
    return today >= start && today <= end
  }

  const getEventBySlug = (slug) => events.find(e => e.slug === slug)

  const clearFilters = () => {
    filterMonth.value = null
    filterStart.value = null
    filterEnd.value   = null
  }

  return {
    filteredEvents,
    activeEvents,
    availableMonths,
    filterMonth,
    filterStart,
    filterEnd,
    isHappeningNow,
    getEventBySlug,
    clearFilters
  }
}
