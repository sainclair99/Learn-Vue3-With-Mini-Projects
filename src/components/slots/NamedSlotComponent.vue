<!-- * {JavaScript} part of code -->
<script setup>
// import { ref } from 'vue'
</script>

<!-- * Template {Html} part of code -->
<template>
  <!-- Creating a slot -->
  <slot name="one">
    <h1>Fallback Named Slot content One</h1>
  </slot>
  <slot name="two">
    <h1>Fallback Named Slot content Two</h1>
  </slot>
</template>

<!-- * Usage -->
<!-- <NamedSlotComponent>
  using => v-slot:one --------
  <template v-slot:one>
    Slot one content
  </template>
  OR => #two -----------
  <template #two>
    Slot two content
  </template>
</NamedSlotComponent> -->
