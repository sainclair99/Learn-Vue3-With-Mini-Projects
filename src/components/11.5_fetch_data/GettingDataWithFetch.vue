<!-- * {Script} part of code -->
<script setup>
import { ref } from 'vue'
const data = ref(null)
const loading = ref(false)


const fetchData = () => {
  loading.value = true
  // let response = await fetch('../../api/posts.json')
  // if (!response.ok) {
  //   throw new Error(`HTTP Error! Status : ${response.status}`)
  // }
  // let reps = await response.json()
  fetch('C:/Users/fonko/Downloads/TUTOS/VUE%203%20C/vue3-learn/src/api/posts.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status : ${response.status}`)
      }
      console.log('Response ', response)
      return response.json()
    })
    .then((resp) => {
      data.value = resp
      loading.value = false
    })
    .catch((err) => {
      loading.value = false
      console.log('Error ', err)
    })
}
fetchData()
</script>

<!-- * Template {Html} part of code -->
<template>
  <h1>Data with Fetch</h1>
</template>
