<!-- * {JavaScript} part of code -->
<script setup>
import { ref, onMounted } from 'vue'

const myRef = ref('Sainclair')

console.log(myRef.value) // Sainlcair

onMounted(() => {
  console.log(myRef.value) // <input type="text" placeholder="Enter your name"/>
  myRef.value.focus()
  myRef.value.style = 'height:49px;'
  myRef.value.value = 'Sainclair Web Learning'
})
</script>

<!-- * Template {Html} part of code -->
<template>
  <h1>Basic Template ref</h1>
  <input type="text" placeholder="Enter your name" ref="myRef" />
</template>
