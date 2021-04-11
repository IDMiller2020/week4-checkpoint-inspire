import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _draw() {
  let template = ''
  template = ProxyState.weather.Template
  document.getElementById('weather').innerHTML = template
}

//Public
export default class WeatherController {
  constructor() {
    ProxyState.on('weather', _draw)
    this.getWeather()
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
      await weatherService.getIcon(ProxyState.weather.weatherIcon)
    } catch (error) {
      console.error(error)
    }
  }
  changeUnits() {
    if (ProxyState.weather.displayUnits === 'F') {
      ProxyState.weather.displayUnits = 'C'
    } else {
      ProxyState.weather.displayUnits = 'F'
    }
    _draw()
  }
}