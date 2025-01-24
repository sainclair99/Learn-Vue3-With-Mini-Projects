import { ref, computed } from 'vue'

export const isDarkTheme = ref(false)

export const locale = ref('en')

export const lang = computed(() => (locale.value == 'en' ? en : fr))

// **  Translations {en : English, fr : French}**
const en = {
  // * for todoList
  todo_list: 'Todo List',
  light: 'Light',
  dark: 'Dark',
  add_a_task: 'Add a task',
  add: 'Add',
  delete: 'Delete',
  // * Random Quote Generator
  random_quote_generator: 'Random quote generator',
  generate: 'Generate',
  // * Calculator
  calculator: 'Calculator',
}
const fr = {
  // * for todoList
  todo_list: 'Tâches à faire',
  light: 'Clair',
  dark: 'Sombre',
  add_a_task: 'Ajouter une tâche',
  add: 'Ajouter',
  delete: 'Supprimer',
  // * Random Quote Generator
  random_quote_generator: 'Générateur aléatoire de citation',
  generate: 'Générer',
  // * Calculator
  calculator: 'Calculatrice',
}

//
export const menuTabs = computed(() => [
  lang.value.todo_list,
  lang.value.random_quote_generator,
  lang.value.calculator,
])
