<!-- * {JavaScript} part of code -->
<script setup>
import MyComponent from './MyComponent.vue';
import {ref, onMounted} from "vue"

const myRef = ref(null)

onMounted(()=>{
  console.log(myRef.value)
})


</script>

<!-- * Template {Html} part of code -->
<template>
  <MyComponent ref="myRef"/>
</template>
