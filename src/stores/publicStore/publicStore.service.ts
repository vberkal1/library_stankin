import axios, { AxiosResponse } from "axios";
import {
  AuthorsResponse,
  CoursesResponse,
  PublicRequestParams,
  PublicResponse,
} from "./publicStore.models";

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
  getCourses() {
    return axios({
      method: "get",
      url: `http://stankinlibrary.ru/api/courses/get`,
    }).then((response: AxiosResponse<CoursesResponse>) => response.data.data);
  }
  getSpecialities() {
    return axios({
      method: "get",
      url: `http://stankinlibrary.ru/api/specialities/get`,
    }).then((response: AxiosResponse<CoursesResponse>) => response.data.data);
  }
  getAuthors() {
    return axios({
      method: "get",
      url: `http://stankinlibrary.ru/api/users/getAuthors`,
    }).then((response: AxiosResponse<AuthorsResponse>) => response.data.data);
  }
  getDetailed() {
    return axios({
      method: "get",
      url: `${this.baseUrl}`,
    }).then((response: AxiosResponse<PublicResponse>) => response.data.data);
  }
}

export default new Service();
