<script setup>
import { ref } from 'vue'

const user = ref({
  username: 'Sainclair',
  email: 'alainsainclair@gmail.com',
  password: 'alainsainclair',
})

const placeholder = (area) => 'Please enter your ' + area
</script>

<template>
   <form>
    <input type="text" :placeholder="placeholder('username')" v-model="user.username" /><br />
    <input type="text" :placeholder="placeholder('email')" v-model="user.email" /><br />
    <input type="text" :placeholder="placeholder('password')" v-model="user.password" />
  </form>
  <h2 v-for="(value, key) in user" :key="key">Ref : {{ value }}</h2>
</template>