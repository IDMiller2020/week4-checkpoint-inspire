import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";

class ImageService {
  async getImage() {
    let res = await sandBoxApi.get('images')
    ProxyState.image = res.data
  }
}

export const imageService = new ImageService();

