<script setup>
// import { ref } from 'vue'

const props = defineProps({
  post: Object,
})

</script>

<template>
  <h1>{{ props.post }}</h1>
</template>
