<script setup>
import { isDarkTheme } from '@/shared/stores/common.js'
const isDark = isDarkTheme
</script>

<template>
  <div class="arrows">
    <div class="btn" :class="isDark ? 'btn-dark' : 'btn-light'" @click="$emit('prev')">◀</div>
    <div class="btn" :class="isDark ? 'btn-dark' : 'btn-light'" @click="$emit('next')">▶</div>
  </div>
</template>

<style scoped>
.arrows {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 25px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  width: 100px;
}
.btn:hover {
  cursor: pointer;
  scale: 1.05;
}

.btn-dark {
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 600ms;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
}
.btn-light {
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 600ms;
}
</style>
