export default class Clock {
  constructor() {
    this.time = new Date().toLocaleTimeString("en-Us", { hour: '2-digit', minute: '2-digit' })
  }
  get Template() {
    return `
    <h1 id="time" class="text-light">${this.time}</h1>
    `
  }
}