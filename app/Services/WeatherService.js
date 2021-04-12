import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandBoxApi } from "./AxiosService.js";

class WeatherService {
  async getIcon(icon) {  // FIXME Don't know how to get the weather icon.
    console.log(icon)
    let res = await sandBoxApi.get('weather/' + icon)
    console.log(res)
  }
  async getWeather() {
    let res = await sandBoxApi.get('weather')
    ProxyState.weather = new Weather(res.data)

  }

}

export const weatherService = new WeatherService();

