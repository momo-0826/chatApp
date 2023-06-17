export default interface MessageInterface {
  // id
  id: number;
  // 送信者Id
  senderId: string;
  // 受信者Id
  recipientId: string;
  // メッセージ内容
  content: string;
  // 送信日時
  timestamp: Date;
  // 既読区分
  status: string;
}
