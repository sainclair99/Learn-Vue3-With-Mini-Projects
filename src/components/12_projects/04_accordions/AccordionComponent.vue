<script setup>
import { ref } from 'vue'
const items = ref([
  {
    title: 'What is HTML?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magni?',
    open: false,
  },
  {
    title: 'What is CSS?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptatum dolores excepturi vitae maxime architecto illo perspiciatis quisquam ipsum praesentium.',
    open: false,
  },
  {
    title: 'What is JavaScript?',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aliquam maxime inventore sequi, dolores blanditiis.',
    open: false,
  },
])

const toggleAccordion = (index) => {
  items.value = items.value.map((item, i) => ({
    ...item,
    open: i === index ? !item.open : false,
  }))
}
</script>

<!-- * Template {Html} part of code -->
<template>
  <div class="accordion-container">
    <div v-for="(elt, index) in items" :key="index" class="accordion">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ elt.title }}
        <span class="arrow-icon">{{ elt.open ? '▽' : '▶' }}</span>
      </div>

      <div v-show="elt.open" class="accordion-content">{{ elt.content }}</div>
    </div>
  </div>
</template>

<!-- * {CSS} part of code -->
<style scoped>
.accordion-container {
  max-width: 600px;
  margin: 50px auto;
}
.accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}
.accordion-header {
  background-color: #3498db;
  color: #fff;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.arrow-icon {
  font-size: 20px;
}
.accordion-content {
  padding: 15px;
  display: none;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #333;
}
.accordion-content[style] {
  display: block;
}
</style>
