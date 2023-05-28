import type { randomUsersTypes } from "../types/randomUsersTypes";

export const randomUserSearch = async (): Promise<randomUsersTypes> =>
  await fetch(`https://randomuser.me/api/?results=10&nat=gb`).then((val) =>
    val.json()
  );
