export default class Clock {
  constructor() {
    this.time = new Date().toLocaleTimeString("en-Us")
  }
  get Template() {
    return `
    <h1 class="text-light my-5">${this.time}</h1>
    `
  }
}