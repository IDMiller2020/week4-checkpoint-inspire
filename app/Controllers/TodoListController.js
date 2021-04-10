import { ProxyState } from "../AppState.js";
import { todoListService } from "../Services/todoListService.js";


//Private
function _draw() {
  let todoList = ProxyState.todoList;
  let template = ''
  todoList.forEach(item => template += item.Template)

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

}
