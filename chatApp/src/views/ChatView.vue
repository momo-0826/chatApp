<script setup lang="ts">
import { ref, onMounted } from "vue";
import HeaderTemplate from "../components/organisms/HeaderTemplate.vue";
import UserList from "../components/organisms/UserList.vue";
import ChatMain from "../components/organisms/ChatMain.vue";
import UserForm from "../components/organisms/UserForm.vue";
import { randomUserSearch } from "@/utils/randomUsersAPI";
import type { Ref } from "vue";
import type { Result } from "@/types/randomUsersTypes";
interface Props {
  userIcon: string;
  message: string;
  userType: string;
}
const items = {
  resultCount: 3,
  result: [
    {
      userIcon:
        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",
      message: "test1",
      userType: "me",
    },
    {
      userIcon:
        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",
      message: "test2",
      userType: "other",
    },
    {
      userIcon:
        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",
      message: "test3",
      userType: "me",
    },
  ] as Props[],
};

// UserListにて選択されたユーザー
const selectedUser: Ref<Result | undefined> = ref();

// ChatMain、UserFormに渡すユーザー
const targetUser: Ref<Result | undefined> = ref();

let index: number;

// 取得したユーザ情報の保存用変数
const users = ref<Result[]>([]);

// ユーザー(チャット相手)の取得
const searchUser = async (): Promise<void> => {
  const value = await randomUserSearch();
  users.value = value.results;
  selectedUser.value = value.results[0];
  // usersBakup = value;
};

onMounted(() => {
  searchUser();
});

// ユーザー選択時のイベント
const selectUser = (object: Result, key: number) => {
  selectedUser.value = object;
  targetUser.value = object;
  index = key;
};
</script>

<template>
  <HeaderTemplate />
  <div class="content">
    <UserList :model="users" @select-user="selectUser" />
    <ChatMain
      :result-count="items.resultCount"
      :result="items.result"
    />
    <div class="content-user-info">
      <UserForm v-if="selectedUser != null" :model="selectedUser" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: block;
}
li {
  list-style: none;
}
.content {
  display: flex;
  background-color: #f8f9fa;
  padding-top: 1rem;
  width: 95%;
  height: 650px;
  margin: auto;
  .content-user-info{
    width: 250px;
    margin: 0 1rem;
  }
}
</style>
