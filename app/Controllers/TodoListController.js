import { ProxyState } from "../AppState.js";
import { todoListService } from "../Services/todoListService.js";


//Private
function _draw() {
  let total = 0
  let completed = 0
  let todoList = ProxyState.todoList;
  let template = ''
  todoList.forEach(item => {
    total++
    template += item.Template
    if (item.completed) {
      completed++
    }
  })
  document.getElementById('count').innerText = `${completed} out of ${total} completed`
  document.getElementById('todo-list').innerHTML = /*html*/`
  <div className="card-columns values">
      ${template}
  </div>
  `
}

//Public
export default class TodoListController {
  constructor() {
    ProxyState.on("todoList", _draw);
    this.getTodoList()
  }

  async addTodo() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newTodo = {
        // @ts-ignore
        description: form.description.value
      }
      await todoListService.addTodo(newTodo)
    } catch (error) {
      console.error(error)
    }
  }
  async getTodoList() {
    try {
      await todoListService.getTodoList()
    } catch (error) {
      console.error(error)
    }
  }
  async deleteTodo(id) {
    try {
      await todoListService.deleteTodo(id)
    } catch (error) {
      console.error(error)
    }
  }
  async checked(id) {
    try {
      await todoListService.checked(id)
    } catch (error) {
      console.error(error)
    }
  }

}
