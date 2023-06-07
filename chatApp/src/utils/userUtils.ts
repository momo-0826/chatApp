import axios from "axios";
import type UserInterface from "../repository/userInterface";

export default class UserUtils {
  // ログイン認証処理
  public static async getUser(name: string, password: string) {
    const queryParameter = "name=" + name + "&password=" + password;
    const res = axios.get(
      `http://localhost:8081/api/chatApp/UserInfo/get-user-info?${queryParameter}`
    );
    return (await res).data;
  }

  // ユーザー追加処理
  public static async createUser(userInfo: UserInterface) {
    const param = "userName=" + userInfo.userName + "&password=" + userInfo.password + "&email=" + userInfo.email;
    console.log(param)
    const res = axios.post(
      "http://localhost:8081/api/chatApp/UserInfo/user",
      param
    );
    console.log((await res).data);
  }
}
