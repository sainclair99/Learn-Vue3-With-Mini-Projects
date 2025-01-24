<!-- * {JavaScript} part of code -->
<script setup>
import { ref, watch } from 'vue'

const message = ref('Hello, vue3!')

const inputText = ref('Init...')

const placeholder = 'Enter a text'

// watch for changes in inputText an update message
watch(inputText, (newValue, oldValue) => {
  // you can perform some logic here when the inputText changes
  console.log('New value : ', newValue)
  console.log('Old value ', oldValue)
})
</script>

<!-- * Template {Html} part of code -->
<template>
  <div>
    <h1>Msg : {{ message }}</h1>
    <hr />
    <h1>InputText : {{ inputText }}</h1>
    <input type="text" v-model="inputText" :placeholder="placeholder" />
  </div>
</template>
