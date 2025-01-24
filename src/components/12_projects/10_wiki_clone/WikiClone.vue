<!-- * {Script} part of code -->
<script setup>
import { ref } from 'vue'
const searchQuery = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const error = ref(null)
const isDartTheme = ref(false)

const searchWikipedia = async (query) => {
  const encodedQuery = encodeURIComponent(query)
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utt8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`

  try {
    isLoading.value = true
    const response = await fetch(endpoint)
    const data = await response.json()

    if (data.query && data.query.search) {
      searchResults.value = data.query.search
      error.value = null
    } else {
      searchResults.value = []
      error.value = `No result found`
    }
  } catch (e) {
    console.error(e)
    error.value = e.message
    searchResults.value = []
  } finally {
    isLoading.value = false
  }
}

const toggleTheme = () => (isDartTheme.value = !isDartTheme.value)

const submitSearch = () => {
  if (searchQuery.value.trim() !== '') {
    searchWikipedia(searchQuery.value)
  } else {
    searchResults.value = []
    error.value = 'Please enter a search'
  }
}
</script>

<!-- * Template {Html} part of code -->
<template>
  <div :class="{ 'dark-theme': isDartTheme }">
    <div class="container">
      <div class="header-container">
        <h1>Search Wikipedia</h1>
        <span id="theme-toggler" @click="toggleTheme">
          {{ isDartTheme ? 'Light' : 'Dark' }}
        </span>
      </div>

      <form @submit.prevent="submitSearch" id="search-form">
        <input type="text" v-model="searchQuery" placeholder="Enter search term" id="search-input"/>
        <button type="submit">Search</button>
      </form>

      <div id="search-result">
        <div v-if="isLoading" class="spinner">Loading...</div>
        <div v-if="searchResults.length">
          <div v-for="result in searchResults" :key="result.pageid" class="result-item">
            <h3 class="result-title">
              <a :href="`https://en.wikipedia.org/?curid=${result.pageid}`" target="_blank" rel="noopener">{{ result.title }}</a>
            </h3>

            <a :href="`https://en.wikipedia.org/?curid=${result.pageid}`" class="result-link" target="_blank" rel="noopener">{{ `https://en.wikipedia.org/?curid=${result.pageid}` }}</a>

            <p class="result-snippet" v-html="result.snippet" ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- * {CSS} part of code -->
<style scoped>

.container{
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1{
  font-size: 3rem;
  margin-bottom: 2rem;
}

#search-form{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

#search-input{
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 2px solid #ccc;
  border-radius: 0.25rem;
  flex-grow: 1;
}

#search-input:focus{
  outline: none;
  border-color: #0074d9;
}

button[type='submit']{
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

#search-results{
  margin-bottom: 2rem;
}

.result-title{
  font-size: 1.5rem;
  margin-top: 0;
}

.result-link{
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #0074d9;
}

.result-link:hover{
  text-decoration: underline;
}

.result-snippet{
  margin-top: 0;
}

.spinner{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 10rem;
}

/* Dark theme */
.header-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#theme-toggler{
  border: none;
  background: transparent;
  cursor: pointer;
  background: #e2e2e2;
  padding: 10px 20px;
  border-radius: 100px;
}

.dark-theme{
  background-color: #282c34;
  color: #fff;
}

.dark-theme #search-input{
  color: #fff;
  background-color: #25242494;
}

.dark-theme #search-input:focus{
  border-color: #0074d9;
}

.dark-theme button[type='submit']{
background-color: #0074d9;
}

.dark-theme .result-link,
.dark-theme .result-link:hover{
  color: #90caf9;
}
</style>
