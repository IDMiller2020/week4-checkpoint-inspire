import ImageController from "./Controllers/ImageController.js";
import TodoListController from "./Controllers/TodoListController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  imageController = new ImageController();
  todoListController = new TodoListController()
  weatherController = new WeatherController()
}

window["app"] = new App();
