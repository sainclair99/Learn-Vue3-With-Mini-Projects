<!-- * {Script} part of code -->
<script setup>
import { ref } from 'vue'
import { axios } from 'axios'

const data = ref(null)
const loading = ref(false)

const fetchData = async () => {
  try {
    loading.value = true
    const response = await axios.get('path');
    data.value = response.data;
  } catch (error) {
    console.error(`Error fetching data : ${error}`)
  }
}
fetchData()
</script>

<!-- * Template {Html} part of code -->
<template>
  <h1>Data with Fetch</h1>
</template>

<!--
NB : First of all, install axios in the project using the command : npm install axios
 -->
