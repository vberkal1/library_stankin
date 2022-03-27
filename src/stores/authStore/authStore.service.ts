import axios, { AxiosResponse } from "axios";
import { AuthSuccess, FormDataAuth, FormDataEmail, FormDataPassword } from "./authStore.models";

class Service {
  baseUrl: string = "http://stankinlibrary.ru/api/auth/";

  auth(formData: FormDataAuth) {
    const bodyFormData = new FormData();
    const data = JSON.stringify(formData);
    bodyFormData.append("userData", data);
    return axios({
      method: "post",
      url: "http://stankinlibrary.ru/api/auth/login",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response: AxiosResponse<AuthSuccess>) => response.data.data);
  }

  sendEmail(formData: FormDataEmail) {
    const bodyFormData = new FormData();
    bodyFormData.append("email", formData.email);
    return axios({
      method: "post",
      url: `${this.baseUrl}send_reset_password`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response: AxiosResponse<AuthSuccess>) => response.data.data);
  }
  changePassword(formData: FormDataPassword) {
    const bodyFormData = new FormData();
    bodyFormData.append("password", formData.password);
    bodyFormData.append("token", formData.token);
    return axios({
      method: "post",
      url: `${this.baseUrl}reset_password`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response: AxiosResponse<AuthSuccess>) => response.data.data);
  }
}

export default new Service();
