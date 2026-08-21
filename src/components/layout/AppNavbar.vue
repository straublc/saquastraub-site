<template>
  <header class="navbar" :class="{ scrolled: isScrolled }" id="navbar">
    <div class="navbar__inner">
      <!-- Logo -->
      <RouterLink to="/" class="navbar__logo" :aria-label="t('inicio') + ' — SaquaStraub'">
        <img src="/img/logo.png" alt="SaquaStraub" width="120" height="48">
      </RouterLink>

      <!-- Desktop Nav -->
      <nav aria-label="Navegação principal">
        <ul class="navbar__links">
          <li>
            <RouterLink to="/instalacoes">{{ t('instalacoes') }}</RouterLink>
          </li>
          <li>
            <a href="#" @click.prevent="scrollTo('localizacao')">{{ t('localizacao') }}</a>
          </li>
          <li>
            <RouterLink to="/eventos">{{ t('eventos') }}</RouterLink>
          </li>
          <li>
            <a href="#" @click.prevent="scrollTo('reserva')" class="btn btn--primary" style="padding:.5rem 1.25rem;font-size:.85rem">
              {{ t('reservarLink') }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Language Picker Desktop -->
      <div class="lang-picker" :class="{ open: pickerOpen }" role="navigation" :aria-label="t('idiomaLabel')">
        <button
          class="lang-picker__btn"
          @click="pickerOpen = !pickerOpen"
          :aria-expanded="pickerOpen"
          aria-haspopup="listbox"
        >
          <img :src="`/img/bandeiras/${currentFlag}`" alt="" aria-hidden="true">
          <span>{{ currentLangLabel }}</span>
          <i class="bi bi-chevron-down chevron"></i>
        </button>
        <ul class="lang-picker__dropdown" role="listbox">
          <li
            v-for="lang in langs"
            :key="lang.code"
            class="lang-picker__option"
            :class="{ active: locale === lang.code }"
            role="option"
            tabindex="0"
            @click="selectLang(lang.code)"
            @keydown.enter="selectLang(lang.code)"
          >
            <img :src="`/img/bandeiras/${lang.flag}`" :alt="lang.name"> {{ lang.name }}
          </li>
        </ul>
      </div>

      <!-- Burger -->
      <button
        class="navbar__burger"
        :class="{ open: drawerOpen }"
        @click="toggleDrawer"
        :aria-label="drawerOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="drawerOpen"
        aria-controls="mobile-drawer"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="navbar__mobile" :class="{ open: drawerOpen }" id="mobile-drawer" :aria-hidden="!drawerOpen">
    <div class="navbar__mobile-backdrop" @click="closeDrawer"></div>
    <div class="navbar__mobile-panel" role="dialog" aria-label="Menu de navegação">
      <div class="navbar__mobile-header">
        <img src="/img/logo.png" alt="SaquaStraub" height="64">
        <button class="navbar__mobile-close" @click="closeDrawer" aria-label="Fechar menu">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <nav class="navbar__mobile-nav">
        <RouterLink to="/" @click="closeDrawer">
          <i class="bi bi-house"></i><span>{{ t('inicio') }}</span>
        </RouterLink>
        <RouterLink to="/instalacoes" @click="closeDrawer">
          <i class="bi bi-images"></i><span>{{ t('instalacoes') }}</span>
        </RouterLink>
        <a href="#" @click.prevent="scrollTo('localizacao'); closeDrawer()">
          <i class="bi bi-geo-alt"></i><span>{{ t('localizacao') }}</span>
        </a>
        <RouterLink to="/eventos" @click="closeDrawer">
          <i class="bi bi-calendar-event"></i><span>{{ t('eventos') }}</span>
        </RouterLink>
        <a href="#" @click.prevent="scrollTo('reserva'); closeDrawer()">
          <i class="bi bi-calendar-check"></i><span>{{ t('reservarLink') }}</span>
        </a>
      </nav>
      <div class="navbar__mobile-lang">
        <p>{{ t('idiomaLabel') }}</p>
        <div class="navbar__mobile-lang-options">
          <button
            v-for="lang in langs"
            :key="lang.code"
            :class="{ active: locale === lang.code }"
            @click="selectLang(lang.code)"
          >
            <img :src="`/img/bandeiras/${lang.flag}`" :alt="lang.name">{{ lang.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from '../../composables/useI18n.js'

const { t, locale, setLang } = useI18n()
const router = useRouter()
const route  = useRoute()

const isScrolled  = ref(false)
const drawerOpen  = ref(false)
const pickerOpen  = ref(false)

const langs = [
  { code: 'pt', label: 'PT', name: 'Português',  flag: 'br.webp' },
  { code: 'en', label: 'EN', name: 'English',     flag: 'us.webp' },
  { code: 'es', label: 'ES', name: 'Español',     flag: 'es.webp' },
  { code: 'fr', label: 'FR', name: 'Français',    flag: 'fr.svg'  },
  { code: 'it', label: 'IT', name: 'Italiano',    flag: 'it.svg'  },
]

const currentFlag      = computed(() => langs.find(l => l.code === locale.value)?.flag  ?? 'br.webp')
const currentLangLabel = computed(() => langs.find(l => l.code === locale.value)?.label ?? 'PT')

function selectLang(code) {
  setLang(code)
  pickerOpen.value = false
}

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value
  document.body.style.overflow = drawerOpen.value ? 'hidden' : ''
}

function closeDrawer() {
  drawerOpen.value = false
  document.body.style.overflow = ''
}

/**
 * Scroll to an anchor on the home page.
 * If already on /, scroll directly.
 * If on another page, navigate first, then wait for the element to appear
 * in the DOM before scrolling — no arbitrary timeouts.
 */
async function scrollTo(id) {
  if (route.path !== '/') {
    await router.push('/')
  }
  scrollWhenReady(id)
}

function scrollWhenReady(id, attempts = 0) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    return
  }
  // Retry up to ~30 frames (~500 ms) waiting for Vue to mount the home page
  if (attempts < 30) {
    requestAnimationFrame(() => scrollWhenReady(id, attempts + 1))
  }
}

function onScroll() {
  isScrolled.value = window.scrollY > 30
}

function onKeydown(e) {
  if (e.key === 'Escape') {
    closeDrawer()
    pickerOpen.value = false
  }
}

function onDocClick(e) {
  if (pickerOpen.value && !e.target.closest('.lang-picker')) {
    pickerOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onDocClick)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onDocClick)
})
</script>
