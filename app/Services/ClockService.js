import { ProxyState } from "../AppState.js"
import Clock from "../Models/Clock.js"
class ClockService {
  getClock() {
    setInterval(() => {
      ProxyState.clock = new Clock()
    }, 1000)
  }

}
export const clockService = new ClockService()