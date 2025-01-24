<script setup>
import { ref } from 'vue'

const props = defineProps(['name'])

const text = ref('My text ' + props.name)
</script>

<template>
  <h1>{{ text }}</h1>
</template>
