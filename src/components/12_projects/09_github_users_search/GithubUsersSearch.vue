<!-- * {Script} part of code -->
<script setup>
import { ref, computed } from 'vue'
const username = ref('')
const userProfile = ref(null)
const error = ref(null)
const API_URL = computed(() => `http://api.github.com/users/${username.value}`)

const getUserProfile = async () => {
  try {
    const response = await fetch(API_URL.value)
    const data = await response.json()

    if (!response.ok) {
      userProfile.value = null
      error.value = `Error ${data.message}`
      throw new Error(error.value)
    }

    userProfile.value = data
    error.value = null
  } catch (e) {
    console.error(e)
    error.value = 'An error occurred'+e
  }
}
</script>

<!-- * Template {Html} part of code -->
<template>
  <div class="github-profile-container">
    <h2 class="app-title">Github User Profile</h2>
    <div class="input-container">
      <input v-model="username" @input="getUserProfile" placeholder="Enter github username" />
    </div>
    <div class="user-profile" v-if="userProfile">
      <img :src="userProfile.avatar_url" :alt="userProfile.login" />
      <div class="user-details">
        <p><strong>Name:</strong>{{ userProfile.login }}</p>
        <p><strong>Location:</strong>{{ userProfile.location }}</p>
        <p><strong>Followers:</strong>{{ userProfile.followers }}</p>
        <p><strong>Following:</strong>{{ userProfile.following }}</p>
        <p><strong>Public Repos:</strong>{{ userProfile.public_repos }}</p>
      </div>
    </div>

    <div class="error-message" v-if="error">
      <p>
        {{ error }}
      </p>
    </div>
  </div>
</template>

<!-- * {CSS} part of code -->
<style scoped>
.github-profile-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.input-container {
  height: 100px;
  margin-bottom: 10px;
}

input {
  width: 95%;
  padding: 10px;
  font-size: 16px;
}

.user-profile {
  margin-top: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

img {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.user-details {
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}
.error-message {
  color: #e74c3c;
  margin-top: 20px;
}
</style>
