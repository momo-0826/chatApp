import type UserInterface from "./userInterface";

export default interface FriendInterface {
  // id
  id: number;
  // 登録ユーザ
  userId: number;
  // 友達であるユーザのID
  friendUserId: number;
  // 友達であるユーザ情報
  friendUser: UserInterface;
}
