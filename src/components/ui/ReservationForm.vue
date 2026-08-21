<template>
  <div class="reservation-wrapper">
    <div class="reservation-card">
      <div class="form-field">
        <label class="form-label" :for="`${uid}-checkin`">{{ t('dataEntrada') }}</label>
        <input type="date" :id="`${uid}-checkin`" class="form-input" v-model="checkin" autocomplete="off">
        <p class="form-error" :class="{ visible: errCheckin }">{{ t('erroCheckin') }}</p>
      </div>
      <div class="form-field">
        <label class="form-label" :for="`${uid}-checkout`">{{ t('dataSaida') }}</label>
        <input type="date" :id="`${uid}-checkout`" class="form-input" v-model="checkout" autocomplete="off">
        <p class="form-error" :class="{ visible: errCheckout }">{{ t('erroCheckout') }}</p>
      </div>
      <div class="form-field">
        <label class="form-label" :for="`${uid}-pacote`">{{ t('selecionePacote') }}</label>
        <select :id="`${uid}-pacote`" class="form-input" v-model="pacote">
          <option value="" disabled>{{ t('escolhaOpcao') }}</option>
          <option v-for="n in 20" :key="n" :value="n">
            {{ n }} {{ n === 1 ? pessoaSingular : pessoaPlural }}
          </option>
        </select>
      </div>
      <button class="btn btn--whatsapp btn--full" :disabled="!canReserve" @click="reservar">
        <i class="bi bi-whatsapp"></i>
        <span>{{ t('botaoReservar') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../../composables/useI18n.js'

// Unique id prefix so label `for` attrs don't clash when used on the same page
const uid = `rsv-${Math.random().toString(36).slice(2, 7)}`

const { t, locale } = useI18n()

const checkin  = ref('')
const checkout = ref('')
const pacote   = ref('')

const errCheckin = computed(() => {
  if (!checkin.value) return false
  const today = new Date(); today.setHours(0, 0, 0, 0)
  return new Date(checkin.value + 'T00:00:00') < today
})

const errCheckout = computed(() => {
  if (!checkin.value || !checkout.value) return false
  return new Date(checkout.value + 'T00:00:00') < new Date(checkin.value + 'T00:00:00')
})

const canReserve = computed(() =>
  checkin.value && checkout.value && pacote.value && !errCheckin.value && !errCheckout.value
)

const pessoaSingular = computed(() =>
  locale.value === 'en' ? 'guest' : locale.value === 'es' ? 'persona' : 'pessoa'
)
const pessoaPlural = computed(() =>
  locale.value === 'en' ? 'guests' : locale.value === 'es' ? 'personas' : 'pessoas'
)

function fmt(d) {
  const [y, m, day] = d.split('-')
  return `${day}/${m}/${y}`
}

function reservar() {
  const pessoas = `${pacote.value} ${pacote.value === 1 ? pessoaSingular.value : pessoaPlural.value}`
  const msg = `Olá! Gostaria de fazer uma reserva na SaquaStraub:\n\n📅 Check-in: ${fmt(checkin.value)}\n📅 Check-out: ${fmt(checkout.value)}\n👥 Pessoas: ${pessoas}\n\nPode me passar a disponibilidade?`
  window.open(`https://wa.me/5521976011899?text=${encodeURIComponent(msg)}`, '_blank')
}
</script>
