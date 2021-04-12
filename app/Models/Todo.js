export default class Todo {
  constructor(data) {
      this.completed = data.completed
      this.description = data.description
      this.id = data.id
  }

  get Template() {
    if (this.completed) {
      return /*html*/`
      <div class="m-4 d-flex align-items-center">
          <input id="checkbox" class="mr-2" type="checkbox" aria-label="Checkbox" ${this.completed} onclick="app.todoListController.checked('${this.id}')" checked>
          <p class="m-0">${this.description}</p>
          <i id="x-delete" class="fas fa-times ml-2 text-danger" onclick="app.todoListController.deleteTodo('${this.id}')"></i>
      </div>
      `
    } else {
        return /*html*/`
        <div class="m-4 d-flex align-items-center">
            <input id="checkbox" class="mr-2" type="checkbox" aria-label="Checkbox" ${this.completed} onclick="app.todoListController.checked('${this.id}')">
            <p class="m-0">${this.description}</p>
            <i id="x-delete" class="fas fa-times ml-2 text-danger" onclick="app.todoListController.deleteTodo('${this.id}')"></i>
        </div>
        `
    }
  }
}
