<!-- * {JavaScript} part of code -->
<script setup>
import { inject } from 'vue'
const user = inject('student')
</script>

<!-- * Template {Html} part of code -->
<template>
  <h1>Student Component</h1>
  <h2>Name : {{ user.name }}</h2>
  <h2>Age : {{ user.age }}</h2>
  <h2>Level : {{ user.level }}</h2>
  <h2>CC : {{ user.cc }}</h2>
</template>

<!-- * Usage -->
<!-- to inject a value in the component, it must be provide in Main vue {App.vue} as -->
<!-- import { provide } from 'vue'
provide('student', { name: 'Sainclair', age: 26, level: 'M2 Recherche', cc: 'Dr Mvogo' }) -->
<!-- signature : provide(key:String, value:any) -->
