<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagens"
      @click.self="close"
    >
      <button class="lightbox__btn lightbox__btn--close" aria-label="Fechar" @click="close">
        <i class="bi bi-x-lg"></i>
      </button>
      <button
        v-if="images.length > 1"
        class="lightbox__btn lightbox__btn--prev"
        aria-label="Anterior"
        @click="prev"
      >
        <i class="bi bi-chevron-left"></i>
      </button>
      <button
        v-if="images.length > 1"
        class="lightbox__btn lightbox__btn--next"
        aria-label="Próxima"
        @click="next"
      >
        <i class="bi bi-chevron-right"></i>
      </button>
      <div v-if="images.length > 1" class="lightbox__counter">
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>
      <img
        class="lightbox__img"
        :src="currentImage.src"
        :alt="currentImage.alt"
      >
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] }, // [{ src, alt }]
  initialIndex: { type: Number, default: 0 },
  modelValue: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])

const currentIndex = ref(props.initialIndex)
const isOpen = computed(() => props.modelValue)

const currentImage = computed(() => props.images[currentIndex.value] || { src: '', alt: '' })

function close() {
  emit('update:modelValue', false)
  document.body.style.overflow = ''
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function onKey(e) {
  if (!isOpen.value) return
  if (e.key === 'Escape')     close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft')  prev()
}

// Swipe
let touchStartX = 0
function onTouchStart(e) { touchStartX = e.changedTouches[0].screenX }
function onTouchEnd(e) {
  const diff = touchStartX - e.changedTouches[0].screenX
  if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
}

watch(() => props.modelValue, (val) => {
  if (val) {
    currentIndex.value = props.initialIndex
    document.body.style.overflow = 'hidden'
  }
})

watch(() => props.initialIndex, (val) => {
  currentIndex.value = val
})

onMounted(() => {
  document.addEventListener('keydown', onKey)
  document.addEventListener('touchstart', onTouchStart, { passive: true })
  document.addEventListener('touchend', onTouchEnd)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKey)
  document.removeEventListener('touchstart', onTouchStart)
  document.removeEventListener('touchend', onTouchEnd)
})
</script>
