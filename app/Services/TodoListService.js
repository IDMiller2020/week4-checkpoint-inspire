import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandBoxApi } from "./AxiosService.js";

class TodoListService {
  async checked(id) {
    let changedTodo = {}
    console.log(ProxyState.todoList);
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
    console.log(changedTodo)
    // console.log(ProxyState.todoList);
    // let changedTodo = {}
    // // Step 1: find the task and modify it
    // ProxyState.todoList.forEach(t => {
    //   if (t.id === id) {
    //     t.completed ? t.completed = false : t.completed = true
    //     changedTodo = t
    //   }
    // })
    // // Step 3: send update to server
    // console.log(changedTodo);
    // console.log(ProxyState.todoList);
    await sandBoxApi.put('scott/todos/' + id, {completed: changedTodo.completed})
    // // Step 4: trigger the proxystate that a change was made
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

