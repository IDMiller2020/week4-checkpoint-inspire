import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import Value from "../Models/Value.js";
import { sandBoxApi } from "./AxiosService.js";

class TodoListService {
  async getTodoList() {
    console.log('TodoListService getTodoList function');
    console.log(`ProxyState.todoList: ${ProxyState.todoList}`)
    let res = await sandBoxApi.get('scott/todos')
    ProxyState.todoList = res.data.map(t=> new Todo(t))
    console.log(`res: ${res.data}`);
    console.log(`ProxyState.todoList: ${ProxyState.todoList}`)
  }
  async addTodo(newTodo) {
    let res = await sandBoxApi.post('scott/todos', newTodo)
    ProxyState.todoList = [...ProxyState.todoList, new Todo(res.data)]
  }
}

export const todoListService = new TodoListService();

