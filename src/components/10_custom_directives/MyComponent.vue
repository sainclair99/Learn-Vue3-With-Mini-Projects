<!-- * {Script} part of code -->
<script setup>
const vFormateDiv = {
  mounted: (elt, binding) => {
    console.log(elt, binding)
    elt.style.fontSize = binding.value ? `${binding.value}rem` : '4rem'
    elt.style.fontStyle = 'italic'
    elt.style.fontFamily = 'Dank Mono'
    elt.style.color = 'teal'
    elt.style.textAlign = 'center'
    elt.style.border = `${binding.arg}px solid teal`
  },
}
const vFormate = (elt) => elt.style.fontStyle = 'italic'
</script>

<!-- * Template {Html} part of code -->
<template>
  <div v-formate-div>Custom directives</div>
  <!--* Use without passing any value -->
  <div v-formate-div="7">Custom directives 2</div>
  <!--* Use passing value that can be take from << binding.value >> -->
  <div v-formate-div:8>Custom directives 2</div>
  <!--* Use passing value that can be take from << binding.arg >> -->
  <p v-formate> The end </p>
</template>
