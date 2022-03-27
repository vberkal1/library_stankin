import axios, { AxiosResponse } from "axios";
import { PublicRequestParams, PublicResponse } from "./publicStore.models";

class Service {
  baseUrl: string = "http://stankinlibrary.ru/api/publications";

  getPublicCards(requestParams: PublicRequestParams) {
    return axios({
      method: "post",
      url: `${this.baseUrl}/get?offset=${requestParams.offset}&limit=${requestParams.limit}`,
      //   data: bodyFormData,
      //   headers: { "Content-Type": "multipart/form-data" },
    }).then((response: AxiosResponse<PublicResponse>) => response.data.data);
  }
}

export default new Service();
