<!-- * {Script} part of code -->
<script setup>
import { isDarkTheme } from '@/shared/stores/common'
import { ref, computed } from 'vue'

const isDark = isDarkTheme

const display = ref('0')

const operator = ['+', '-', '*', '/', '+', '.']

const appendToDisplay = (value) => {
  if ((display.value === '0' || display.value === 'Error') && (value !== '.' || value === '-')) {
    display.value = value
  } else if (
    operator.includes(display.value.substring(display.value.length - 1)) &&
    operator.includes(value)
  ) {
    display.value = display.value.substring(0, display.value.length - 1) + value
  } else {
    display.value += value
  }
}

const calculate = () => {
  try {
    if (operator.includes(display.value.substring(display.value.length - 1))) {
      display.value = display.value.substring(0, display.value.length - 1)
    }
    display.value = eval(display.value).toString()
  } catch (e) {
    console.error(e)
    display.value = 'Error'
  }
}

// Computed property for dynamic class binding
const displayClass = computed(() => {
  return display.value.length > 12 ? 'small-text' : ''
})

const clearDisplay = () => {
  display.value = '0'
}
</script>

<!-- * Template {Html} part of code -->
<template>
  <div>
    <div class="calculator" :class="{ 'dark-theme': isDark }">
      <input v-model="display" :class="displayClass" readonly />

      <div class="buttons">
        <button @click="appendToDisplay('7')">7</button>
        <button @click="appendToDisplay('8')">8</button>
        <button @click="appendToDisplay('9')">9</button>
        <button @click="appendToDisplay('/')">/</button>

        <button @click="appendToDisplay('4')">4</button>
        <button @click="appendToDisplay('5')">5</button>
        <button @click="appendToDisplay('6')">6</button>
        <button @click="appendToDisplay('*')">*</button>

        <button @click="appendToDisplay('1')">1</button>
        <button @click="appendToDisplay('2')">2</button>
        <button @click="appendToDisplay('3')">3</button>
        <button @click="appendToDisplay('-')">-</button>

        <button @click="appendToDisplay('0')">0</button>
        <button @click="appendToDisplay('.')">.</button>
        <button @click="clearDisplay">C</button>
        <button @click="appendToDisplay('+')">+</button>
      </div>
      <button @click="calculate" class="equal-button">=</button>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 88%;
  padding: 20px 20px;
  margin-bottom: 20px;
  text-align: end;
  font-size: 1.2rem;
  border: none;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.05);
}

input:focus {
  border: none;
}

.calculator {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  transition: var(--custom-transition);
  transition-duration: var(--custom-transition-duration);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 10px;
}

button {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
}

.buttons > button {
  width: 66px;
  height: 66px;
  border-radius: 50%;
}

.equal-button {
  width: 100%;
  border-radius: 25px;
  margin-top: 10px;
}

.small-text {
  font-size: 16px;
}
/* Dark Theme */
.dark-theme {
  background-color: var(--dark-bg-color);
  transition: var(--custom-transition);
  transition-duration: var(--custom-transition-duration);
}

.dark-theme > input {
  background-color: #000;
  color: #fff;
}

.dark-theme > input:focus {
  border: none;
  outline: none;
}

.dark-theme > .buttons > button {
  background-color: #777;
  color: #fff;
}
</style>
