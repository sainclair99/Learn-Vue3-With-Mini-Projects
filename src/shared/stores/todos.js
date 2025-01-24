import { ref } from 'vue'

export const todos = ref([])

export class Todo {
  constructor(title = '', done = false) {
    this.title = title
    this.done = done
  }

  setTitle(title) {
    this.title = title
  }

  setDone(done) {
    this.done = done
  }
}
