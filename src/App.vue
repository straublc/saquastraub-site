<template>
  <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>
  <AppNavbar />
  <main id="main-content">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import { useI18n } from './composables/useI18n.js'

const { t } = useI18n()
</script>
