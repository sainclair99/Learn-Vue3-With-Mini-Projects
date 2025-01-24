<!-- * {JavaScript} part of code -->
<script setup>
import { ref } from "vue";
const friends = ref(['Wilfried', 'Leonnel', 'Delgado', 'Jonathan', 'John', 'Nick', 'Bleriot', 'Djery', 'Olice']);

</script>

<!-- * Template {Html} part of code -->
<template>
  <h3 v-for="(friend, index) in friends" :key="index">
    {{ friend }}
  </h3>
</template>
