<!-- * {JavaScript} part of code -->
<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

const message = ref('Hello, vue 3 !')

// Life-cycle Hooks
onBeforeMount(() => {
  console.log('Component is about to be mounted')
})

onMounted(() => {
  console.log('Component has been mounted')
})

onBeforeUpdate(() => {
  console.log('Component is about to update')
})

onUpdated(() => {
  console.log('Component has been updated')
})

onBeforeUnmount(() => {
  console.log('Component is about to be unmounted')
})

onUnmounted(() => {
  console.log('Component has been unmounted')
})
</script>

<!-- * Template {Html} part of code -->
<template>
  <h1>{{ message }}</h1>
  <button @click="message = 'Hi, vue 3 !'">Update Message</button>
</template>
