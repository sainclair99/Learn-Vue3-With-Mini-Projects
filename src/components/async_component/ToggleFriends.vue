<!-- * {JavaScript} part of code -->
<script setup>
// import RenderFriends from './RenderFriends.vue'
import { ref,defineAsyncComponent } from 'vue'

// this import permit to mounted the component to the DOM just when we need
// To see the behavior look at the network part in the browser inspector
const RenderFriends = defineAsyncComponent(() => import('./RenderFriends.vue'))

const showFriends = ref(false)

const toggleFriends = () => (showFriends.value = !showFriends.value)
</script>

<!-- * Template {Html} part of code -->
<template>
  <div v-if="showFriends">
    <RenderFriends />
  </div>
  <button @click="toggleFriends">Toggle friends</button>
</template>
