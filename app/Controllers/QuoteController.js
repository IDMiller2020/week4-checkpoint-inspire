import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"

// Private
function _draw() {
  let template = ''
  template = ProxyState.quote.Template
  document.getElementById('quote').innerHTML = template
}

// Public
export default class QuoteController {
  constructor() {
    ProxyState.on('quote', _draw)
    this.getQuote()
  }
  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }
}