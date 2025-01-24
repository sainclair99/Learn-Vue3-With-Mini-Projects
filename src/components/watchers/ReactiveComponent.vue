<!-- * {JavaScript} part of code -->
<script setup>
import { reactive, watch } from 'vue'

const message = reactive({ username: 'alain' })

watch(
  () => message.username,
  (newV, oldV) => {
    console.log(newV)
    console.log(oldV)
  },
)
</script>

<!-- * Template {Html} part of code -->
<template>
  <h2>{{ message.username }}</h2>
  <button @click="message.username = 'Jordan'">Change Username</button>
</template>
