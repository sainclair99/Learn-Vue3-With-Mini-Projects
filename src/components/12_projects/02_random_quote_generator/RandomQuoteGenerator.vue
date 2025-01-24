<!-- * {Script} part of code -->
<script setup>
import { lang, isDarkTheme, locale } from '@/shared/stores/common'
import { onMounted, ref } from 'vue'

const l = lang
const lc = locale
const isDark = isDarkTheme

const quotes = ref([
  {
    text: 'The only way to do great work is to love what you do.',
    textFr: "La seule manière de faire du bon travail est d'aimer ce que l'on fait.",
    author: 'Steve Jobs',
  },
  {
    text: "Believe you can and you're halfway there.",
    textFr: 'Croyez que vous pouvez et vous êtes à mi-chemin',
    author: 'Theodore Roosevelt',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    textFr: "La vie est ce qui arrive lorsque vous êtes occupé à faire d'autres projets",
    author: 'John Lennon',
  },
])

const currentQuote = ref({ text: '', textFr: '', author: '' })

const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.value.length)
  currentQuote.value = quotes.value[index]
}

onMounted(getRandomQuote)
</script>

<!-- * Template {Html} part of code -->
<template>
  <div class="quote-generator" :class="isDark ? 'dark-theme' : ''">
    <h1 class="app-title">{{ l.random_quote_generator }}</h1>
    <blockquote class="quote-container">
      <p>{{ lc == 'en' ? currentQuote.text : currentQuote.textFr }}</p>
      <cite>-- {{ currentQuote.author }} --</cite>
    </blockquote>
    <button @click="getRandomQuote" class="quote-btn">{{ l.generate }}</button>
  </div>
</template>

<!-- * {CSS} part of code -->
<style scoped>
.quote-generator {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  font-family: 'Dank Mono';
  font-style: italic;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: var(--custom-transition);
  transition-duration: var(--custom-transition-duration);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.quote-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

cite {
  font-style: normal;
  color: #777;
}

.quote-btn {
  padding: 10px 12px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.quote-btn:hover {
  background-color: #2980b9;
}

/* Dark Theme */
.dark-theme {
  background-color: var(--dark-bg-color);
  transition: var(--custom-transition);
  transition-duration: var(--custom-transition-duration);
}

.dark-theme > h1 {
  color: var(--dark-text-color);
}

.dark-theme > .quote-container {
  border: none;
  background-color: #000;
}

.dark-theme > .quote-container > p {
  color: #fff;
}
</style>
