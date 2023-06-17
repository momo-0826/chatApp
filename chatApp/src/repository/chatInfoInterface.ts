import type UserInterface from "./userInterface";
import type FriendInterface from "./friendInterface";
import type MessageInterface from "./messageInterface";

export default interface ChatInfoInterface {
  // id
  id: number;
  // 登録ユーザ情報
  userInfo: UserInterface;
  // ユーザの友達情報
  friends: FriendInterface[];
  // ユーザの送信したメッセージ
  messages: MessageInterface[];
}
