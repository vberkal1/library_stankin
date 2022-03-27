import { action, makeObservable, observable, runInAction } from "mobx";
import storageUtil from "../../utils/storageUtil";
import { FormDataAuth, FormDataEmail, FormDataPassword } from "./authStore.models";
import service from "./authStore.service";

const initialStoreValues = {
  isRegister: !!storageUtil.getToken(),
  login: "",
  role: 123,
};

class AuthStore {
  isRegister: boolean = initialStoreValues.isRegister;

  login: string = initialStoreValues.login;

  role: number = initialStoreValues.role;

  constructor() {
    makeObservable(this, {
      isRegister: observable,
      login: observable,
      role: observable,
      updateIsAuth: action.bound,
      auth: action.bound,
    });
  }

  async updateIsAuth(): Promise<void> {
    try {
      this.isRegister = !!storageUtil.getToken();
      const token = storageUtil.getToken();
      if (token) {
        // const res: CurrentUser = await service.getUser();
        // runInAction(() => {
        //   this.isAdmin = res.isAdmin;
        //   this.login = res.login;
        //   if (this.isAdmin) {
        //     this.users = (res as CurrentUser).users;
        //   }
        // });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async auth(formData: FormDataAuth): Promise<void> {
    try {
      const user = await service.auth(formData);
      console.log(user);
      runInAction(() => {
        this.login = user.login;
        this.role = user.role;
      });
      console.log(this.login, this.role);
    } catch (error) {
      console.log(error);
    }
  }
  async changePassword(formData: FormDataPassword): Promise<void> {
    try {
      await service.changePassword(formData);
    } catch (error) {
      console.log(error);
    }
  }

  async sendEmail(formData: FormDataEmail): Promise<void> {
    try {
      await service.sendEmail(formData);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthStore();
