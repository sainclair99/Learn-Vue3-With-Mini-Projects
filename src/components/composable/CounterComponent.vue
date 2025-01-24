<!-- * {JavaScript} part of code -->
<script setup>
import { useCounter } from '../../shared/useCounter'
const count = useCounter()
</script>

<!-- * Template {Html} part of code -->
<template>
  <h2>Counter: {{ count.count }}</h2>
  <button @click="count.increment"> ++ </button>
  <button @click="count.decrement"> -- </button>
</template>
