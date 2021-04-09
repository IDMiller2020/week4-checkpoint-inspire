import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";

class ImageService {
  async getImage() {
    // FIXME How do I grab the image from the API?
    let res = await sandBoxApi.get('images')
    console.log(res)
    ProxyState.image = res.data
  }
}

export const imageService = new ImageService();

