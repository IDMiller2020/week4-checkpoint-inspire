import { ProxyState } from "../AppState.js"
import { clockService } from "../Services/ClockService.js"

// Private
function _draw() {
  let template = ''
  template = ProxyState.clock.Template
  document.getElementById('clock').innerHTML = template
}

// Public
export default class ClockController {
  constructor() {
    ProxyState.on('clock', _draw)
    this.getClock()
  }
  getClock() {
    clockService.getClock()
  }
}