<!-- * {JavaScript} part of code -->
<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
</script>

<!-- * Template {Html} part of code -->
<template>
  <form @submit.prevent="$emit('userInfo', name, email, password)">
    Name : <input type="text" v-model="name" /><br />
    Email : <input type="email" v-model="email" /><br />
    Password : <input type="password" v-model="password" /><br />
    <button type="submit">Submit</button>
  </form>
</template>

<!-- * {CSS} part of code -->
<style scoped></style>
