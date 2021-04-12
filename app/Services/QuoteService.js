import { ProxyState } from "../AppState.js"
import { sandBoxApi } from "../Services/AxiosService.js"
import Quote from "../Models/Quote.js"
class QuoteService {
  async getQuote() {
    let res = await sandBoxApi.get('quotes')
    ProxyState.quote = new Quote(res.data)
  }

}
export const quoteService = new QuoteService()