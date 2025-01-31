import { Client, Account, ID } from "appwrite";
import Conf from "../Conf/Conf";

class AppWriteAuth {
  client = new Client();
  Account;
  constructor() {
    this.client
      .setEndpoint(Conf.Appwrite_Url)
      .setProject(Conf.Appwrite_Project_Id);
    this.Account = new Account(this.client);
  }

  async SignUp({ Email, Password, Name }) {
    try {
      return await this.Account.create(ID.unique(), Email, Password, Name);
    } catch (error) {
      console.log(error);
    }
  }

  async Login({ Email, Password }) {
    try {
      return await this.Account.createEmailPasswordSession(Email, Password);
    } catch (error) {
      console.log(error);
    }
  }

  async Logout() {
    try {
      return await this.Account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  }

  async GetCurrentUser() {
    try {
      return await this.Account.get();
    } catch (error) {
      console.log(error);
    }
  }
}

const Auth = new AppWriteAuth();

export default Auth;
