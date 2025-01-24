<!-- * {JavaScript} part of code -->
<script setup>
import { ref, watch } from 'vue'

const username = ref('Sainclair')
const counter = ref(0)

watch([username, counter], (newV, oldV) => {
  console.log('New values ', newV)
  console.log('Old values ', oldV)
})

const increment = () => counter.value++
</script>

<!-- * Template {Html} part of code -->
<template>
  <h2>User : {{ username }}</h2>
  <h2>Count : {{ counter }}</h2>
  <button @click="username = 'Alain'">Change name</button>
  <button @click="increment">Increment</button>
</template>
