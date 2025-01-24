<!-- * {Script} part of code -->
<script setup>
import { ref } from 'vue'
import ArrowsComponent from './components/00_config/ArrowsComponent.vue'
import ConfigComponent from './components/00_config/ConfigComponent.vue'
import TodoList from './components/12_projects/01_todo_list/TodoList.vue'
import RandomQuoteGenerator from './components/12_projects/02_random_quote_generator/RandomQuoteGenerator.vue'
import { isDarkTheme, menuTabs } from '@/shared/stores/common.js'
import AmazingCalculator from './components/12_projects/03_amazing_calculator/AmazingCalculator.vue'

const menu = menuTabs

const currentTab = ref(0)
const isDark = isDarkTheme

const tabs = [TodoList, RandomQuoteGenerator, AmazingCalculator]

const nextTab = () => {
  if (currentTab.value < menu.value.length - 1) {
    currentTab.value++
  }
}
const prevTab = () => {
  if (currentTab.value > 0) {
    currentTab.value--
  }
}
</script>

<!-- * Template {Html} part of code -->
<template>
  <div id="container" :class="{'dark-theme-app':isDark}">
    <div class="header">
      <ConfigComponent />
      <div class="menu">
        <div
          v-for="(item, i) in menu"
          @click="currentTab = i"
          :key="i"
          :class="{ 'step-active': i === currentTab, 'dark-theme': isDark }"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <component :is="tabs[currentTab]" class="project" />
    <ArrowsComponent @prev="prevTab" @next="nextTab" />
  </div>

</template>

<!-- * {CSS} part of code -->
<style scoped>
#container {
  margin: none;
  padding: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.menu {
  display: flex;
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;

  font-family: 'Dank Mono';
  font-style: italic;
}

.menu div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  position: relative;
  z-index: 1;
  transition: all 700ms linear;
}

.menu div:not(:last-child) {
  border-right: 4px solid #fff;
}

.project {
  transition: all 1s ease-in;
  animation: animate 700ms linear;
}
@keyframes animate {
  from {
    transform: translateY(100vh);
  }
}
.menu > div:hover {
  cursor: pointer;
}
/* Dark Theme */
.dark-theme {
  background-color: var(--dark-bg-color);
  color: #f9f9f9;
}
.step-active {
  background-color: #2980b9;
  font-weight: bold;
  color: #fff;
  transition: all 700ms linear;
}
.dark-theme-app {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

<style>
:root {
  --dark-text-color: #fff;
  --dark-bg-color: rgba(0, 0, 0, 0.9);
  --custom-transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  --custom-transition-duration: 600ms;
}
</style>
