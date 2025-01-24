<!-- * {Script} part of code -->
<script setup>
import { ref } from 'vue'
import ComponentOne from './ComponentOne.vue'
import ComponentTwo from './ComponentTwo.vue'
import ComponentThree from './ComponentThree.vue'

const currentTab = ref('ComponentOne')

const tabs = {
  ComponentOne,
  ComponentTwo,
  ComponentThree,
}
</script>

<!-- * Template {Html} part of code -->
<template>
  <button @click="currentTab = 'ComponentOne'">Wath is HTML?</button>
  <button @click="currentTab = 'ComponentTwo'">Wath is CSS?</button>
  <button @click="currentTab = 'ComponentThree'">Wath is JAVASCRIPT??</button>

  <!-- Dynamic Component -->
  <component :is="tabs[currentTab]"/>
</template>
