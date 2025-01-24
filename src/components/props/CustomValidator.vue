<!-- * {JavaScript} part of code -->
<script setup>
const props = defineProps({
  name: {
    type: String,
    validator: (value) => ['sainclair', 'alain'].includes(value),
  },
  age: {
    type: Number,
    validator: (value) => value >= 18 && value <= 99,
  },
  password: {
    type: String,
    required: false,
    validator: (value) => value.length >= 8,
  },
})
</script>

<!-- * Template {Html} part of code -->
<template>
  <h2>Name: {{ props.name }}</h2>
  <h2>Age: {{ props.age }}</h2>
  <h2>Password: {{ props.password }}</h2>
</template>
