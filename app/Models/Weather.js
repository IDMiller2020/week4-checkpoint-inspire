export default class Weather {
  constructor(data) {
      this.temperature = data.main.temp
      this.temperatureC = (data.main.temp - 273.15).toFixed(1)
      this.temperatureF = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
      this.displayUnits = 'F'
      this.weatherIcon = data.weather[0].icon
  }

  get Template() {
    if (this.displayUnits === 'F') {
      return /*html*/`
      <h3 class="mt-4 d-flex justify-content-center" onclick="app.weatherController.changeUnits()">
          ${this.temperatureF} F
      </h3>
      `
    } else {
      return /*html*/`
      <h3 class="mt-4 d-flex justify-content-center" onclick="app.weatherController.changeUnits()">
          ${this.temperatureC} C
      </h3>
      `
    }
  }

}
