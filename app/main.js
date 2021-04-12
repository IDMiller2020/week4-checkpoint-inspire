import ImageController from "./Controllers/ImageController.js";
import TodoListController from "./Controllers/TodoListController.js";
import WeatherController from "./Controllers/WeatherController.js";
import QuoteController from "./Controllers/QuoteController.js"
import ClockController from "./Controllers/ClockController.js";

class App {
  imageController = new ImageController();
  todoListController = new TodoListController()
  weatherController = new WeatherController()
  quoteController = new QuoteController()
  clockController = new ClockController()
}

window["app"] = new App();
