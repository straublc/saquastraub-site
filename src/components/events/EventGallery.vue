<template>
  <div v-if="images.length" class="gallery-grid" style="margin-bottom:2rem">
    <div
      v-for="(img, i) in images"
      :key="i"
      class="gallery-item"
      @click="openLightbox(i)"
      @keydown.enter="openLightbox(i)"
      tabindex="0"
      role="button"
      :aria-label="`Abrir imagem ${i + 1}`"
    >
      <img :src="img" :alt="`${title} — foto ${i + 1}`" loading="lazy">
      <div class="gallery-overlay" aria-hidden="true"><i class="bi bi-zoom-in"></i></div>
    </div>
  </div>

  <GalleryLightbox
    v-model="lightboxOpen"
    :images="lightboxImages"
    :initial-index="lightboxIndex"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import GalleryLightbox from '../ui/GalleryLightbox.vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  title:  { type: String, default: '' }
})

const lightboxOpen  = ref(false)
const lightboxIndex = ref(0)

const lightboxImages = computed(() =>
  props.images.map((src, i) => ({ src, alt: `${props.title} — foto ${i + 1}` }))
)

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxOpen.value  = true
}
</script>
