<!-- * {JavaScript} part of code -->
<script setup>
const myRefFunc = (elt) => {
  console.log(elt.textContent) // Reading text content
  elt.textContent = 'This is my text content' // Setting text content
  elt.style.color = 'crimson' // Setting text color to 'crimson'
}
</script>

<!-- * Template {Html} part of code -->
<template>
  <h1 :ref="myRefFunc">This is my initial value</h1>
</template>
