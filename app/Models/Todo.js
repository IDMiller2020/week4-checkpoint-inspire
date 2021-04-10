import { generateId } from "../Utils/GenerateId.js"
export default class Todo {
  constructor(data) {
      this.completed = data.completed
      this.description = data.description
      this.id = data.id
  }

  get Template() {

      return /*html*/`
      <div class="m-4 d-flex align-items-center">
          <input class="mr-2" type="checkbox" aria-label="Checkbox" ${this.completed}>
          <p class="m-0">${this.description}</p>
          <i class="fas fa-times ml-2 text-danger" onclick="app.todoListController.deleteTodo('${this.id}')"></i>
      </div>
      `
  }
}
