<!-- * {Script} part of code -->
<script setup>
import { ref } from 'vue'
import { Todo, todos } from '../../../shared/stores/todos.js'
import { isDarkTheme, lang } from '@/shared/stores/common.js'

const newTask = ref('')
const isDark = isDarkTheme
const tasks = todos

const addTask = () => {
  if (newTask.value.trim() !== '') {
    let str = `${newTask.value[0].toLocaleUpperCase()}${newTask.value.slice(1)}`
    tasks.value.push(new Todo(str, false))
    newTask.value = ''
  }
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}

defineExpose({ nameT: lang.value.todo_list })
</script>

<!-- * Template {Html} part of code -->
<template>
  <div class="todo-app" :class="isDark ? 'dark-theme' : ''">
    <div class="task-input">
      <input v-model="newTask" @keyup.enter="addTask" :placeholder="lang.add_a_task" />
      <button @click="addTask">{{ lang.add }}</button>
    </div>
    <!-- * Rendering all the tasks -->
    <ul class="task-list">
      <li
        class="task-item"
        v-for="(task, index) in tasks"
        :key="index"
        :title="task.title"
        :class="task.done ? 'already-done' : ''"
      >
        <!-- <input type="checkbox" v-model="task.done"> -->
        <div class="todo">{{ index + 1 }} - {{ task.title }}</div>
        <input type="checkbox" class="done-check" v-model="task.done" />
        <button @click="removeTask(index)" class="remove-btn">{{ lang.delete }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-app {
  transition: var(--custom-transition);
  transition-duration: var(--custom-transition-duration);
  min-width: 600px;
  max-width: 800px;
  margin: 40px auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}
.task-input {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.task-input input {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 10px;
  width: 80%;
  font-family: 'Dank Mono';
  font-style: italic;
  font-size: 1rem;
}
.task-input input:focus {
  border: 2px solid #2980b9;
  outline: none;
}
.task-input button {
  border: none;
  border-radius: 10px;
  background-color: #2980b9;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  width: 15%;
}
.task-input button:hover {
  cursor: pointer;
  font-size: medium;
}

.task-list {
  margin-left: -40px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  background-color: #eee;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 10px;
  font-family: 'Dank Mono';
  font-style: italic;
}

.task-item > div {
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.already-done > div {
  text-decoration: line-through;
  color: #ccc;
}

.remove-btn {
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  background-color: red;
  font-size: medium;
  text-align: center;
  color: white;
  font-weight: bold;
}
.remove-btn:hover {
  cursor: pointer;
  background-color: #d00;
}

/* Dark Theme */

.dark-theme {
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 600ms;
  border: 1px solid rgba(0, 0, 0, 0.9);
  background-color: rgba(0, 0, 0, 0.9);
}

.dark-theme > .task-input input {
  background-color: rgba(200, 200, 200, 0.5);
  border: none;
  color: #fff;
}

.dark-theme > .task-list > .task-item {
  border: none;
  color: #fff;
  background-color: #000;
}
</style>
