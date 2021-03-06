export default class Quote {
  constructor(data) {
    this.quote = data.content
    this.author = data.author
  }
  get Template() {
    return `
    <p id="quote-text">${this.quote}</p>
    <div class="author">
      <p>${this.author}</p>
    </div>
    `
  }
}