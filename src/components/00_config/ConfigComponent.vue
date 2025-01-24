<script setup>
import { isDarkTheme, lang, locale } from '@/shared/stores/common.js'
const isDark = isDarkTheme
const l = locale
</script>

<template>
  <div class="config">
    <div
      @click="isDark = !isDark"
      class="toggler"
      :class="isDark ? 'toggler-dark' : 'toggler-light'"
    >
      {{ isDark ? `${lang.dark} ◐` : `${lang.light} 🔆` }}
    </div>
    <div
      @click="l == 'en' ? (l = 'fr') : (l = 'en')"
      class="toggler"
      :class="isDark ? 'toggler-dark' : 'toggler-light'"
    >
      {{ l == 'en' ? `EN 🌎` : `FR 🌍` }}
    </div>
  </div>
</template>

<style scoped>
.config {
  display: flex;
  justify-content: center;
  gap: 5px;
  /* padding: 10px 10px;
  box-sizing: border-box;
  max-width: 300px;
  border: 4px solid #ffffff1d;
  backdrop-filter: blur(3px); */
  transition: var(--custom-transition);
  transition-duration: var(--custom-transition-duration);
}
.toggler {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  width: 100px;
}
.toggler:hover {
  cursor: pointer;
  scale: 1.05;
}

.toggler-dark {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
}
.toggler-light {
  transition: var(--custom-transition);
  transition-duration: var(--custom-transition-duration);
}
</style>
