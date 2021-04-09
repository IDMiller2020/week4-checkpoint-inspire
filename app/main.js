import ImageController from "./Controllers/ImageController.js";
import TodoListController from "./Controllers/TodoListController.js";

class App {
  imageController = new ImageController();
  todoListController = new TodoListController()
}

window["app"] = new App();
