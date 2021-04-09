export default class Todo {
  constructor(data) {
      this.completed = data.completed
      this.description = data.description
  }

  get Template() {

      return /*html*/`
      <div class="card p-2 value">
          ${this.completed}
          ${this.description}

      </div>
      `
  }
}
