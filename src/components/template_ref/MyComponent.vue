<!-- * {JavaScript} part of code -->
<script setup>
import { ref } from 'vue'
const count = ref(0)

const increment = () => count.value++
const decrement = () => count.value--

defineExpose({ count, increment, decrement })
</script>

<!-- * Template {Html} part of code -->
<template>
  <h1>Count : {{ count }}</h1>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<!-- * {CSS} part of code -->
<style scoped>
button {
  width: 100px;
  height: 50px;
  margin-right: 10px;
}
</style>

<!-- * Template ref
* When using the <script setup>
  - It's private by default
  - A parent referencing a child won't be able to access anything
* First we have to expose all the properties an methods then we'd be able to use them in parent component
  - user (defineExpose) to expose our data for the parent to use
 -->
