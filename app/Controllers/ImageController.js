import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


//Private
function _draw() {
  document.getElementById('main').style.backgroundImage = 'url('+ProxyState.image.url+')'
}

//Public
export default class ImageController {
  constructor() {
    ProxyState.on('image', _draw)

    this.getImage()
  }

  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {
      console.error(error)
    } 
  }

}
