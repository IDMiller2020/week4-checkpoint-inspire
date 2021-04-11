import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandBoxApi } from "./AxiosService.js";

class TodoListService {
  async checked(id) {
    let changedTodo = {}
    ProxyState.todoList.forEach(t => {
      if (t.id === id) {
        if (t.completed) {
          t.completed = false
        } else {
          t.completed = true
        }
        changedTodo = t
      }
    })
    await sandBoxApi.put('scott/todos/' + id, {completed: changedTodo.completed})
    ProxyState.todoList = ProxyState.todoList
  }
  async deleteTodo(id) {
    await sandBoxApi.delete('scott/todos/' + id)
    ProxyState.todoList = ProxyState.todoList.filter(t => t.id !== id)
  }
  async getTodoList() {
    let res = await sandBoxApi.get('scott/todos')

    ProxyState.todoList = res.data.map(t => new Todo(t))
  }
  async addTodo(newTodo) {
    let res = await sandBoxApi.post('scott/todos', newTodo)
    ProxyState.todoList = [...ProxyState.todoList, new Todo(res.data)]
  }
}

export const todoListService = new TodoListService();

