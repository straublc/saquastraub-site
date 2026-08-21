<template>
  <footer class="footer" id="contato">
    <div class="container">
      <div class="footer__grid">
        <div>
          <p class="footer__brand-name">SaquaStraub</p>
          <p class="footer__brand-tagline">{{ t('footerDescription') }}</p>
        </div>
        <div class="footer__social">
          <a
            href="https://wa.me/5521976011899?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20a%20casa%20em%20Saquarema."
            target="_blank"
            rel="noopener"
            class="footer__social-link --wa"
            aria-label="WhatsApp"
          >
            <i class="bi bi-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/saquastraub/"
            target="_blank"
            rel="noopener"
            class="footer__social-link --ig"
            aria-label="Instagram"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.google.com/search?q=saquastraub&oq=sa&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MggIABBFGCcYOzIICAEQRRgnGDsyDQgCEC4YgwEYsQMYgAQyBggDEEUYOTIKCAQQABixAxiABDIQCAUQLhjHARixAxjRAxiABDIHCAYQABiABDINCAcQABiDARixAxiABDINCAgQABiDARixAxiABDIKCAkQABixAxiABNIBCTIyNjZqMGoxNagCCLACAfEFC9gFQjTvBcfxBQvYBUI07wXH&sourceid=chrome&source=chrome.rb&ie=UTF-8"
            target="_blank"
            rel="noopener"
            class="footer__social-link --google"
            aria-label="Google"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 11h8.533c.044.385.067.78.067 1.184 0 2.734-.98 5.048-2.678 6.614C16.337 20.36 14.3 21.2 12 21.2c-3.426 0-6.386-1.961-7.842-4.827a9.005 9.005 0 0 1 0-8.746C5.614 4.761 8.574 2.8 12 2.8c2.3 0 4.187.812 5.657 2.123l-2.3 2.214C14.413 6.187 13.3 5.6 12 5.6c-2.62 0-4.827 1.748-5.6 4.12a5.563 5.563 0 0 0 0 4.56C7.173 16.652 9.38 18.4 12 18.4c1.467 0 2.7-.378 3.638-1.008 1.05-.715 1.75-1.773 2.018-3.003H12v-3.39Z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer__divider"></div>
      <div class="footer__bottom">
        <p>© {{ currentYear }} <strong>SaquaStraub</strong>. {{ t('copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../../composables/useI18n.js'

const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())
</script>
