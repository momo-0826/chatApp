<template>
  <div class="content">
    <Card style="width: 25rem">
      <template #content>
        <form @submit.prevent="">
          <div class="center">
            <div class="form-group">
              <label for="username">ユーザー名</label>
              <span class="p-input-icon-left">
                <i class="pi pi-user" />
                <InputText
                  v-model="userInfo.userName"
                  id="username"
                  type="text"
                  placeholder="user"
                />
              </span>
              <div v-if="isNameEmpty === true">
                <Message severity="error">Username is required</Message>
              </div>
            </div>
            <div class="form-group">
              <label for="mailadress">Eメールアドレス</label>
              <span class="p-input-icon-left">
                <i class="pi pi-user" />
                <InputText
                  v-model="userInfo.email"
                  id="mailadress"
                  type="text"
                  placeholder="user@example.co.jp"
                />
              </span>
              <div v-if="isEmailEmpty === true">
                <Message severity="error">email is required</Message>
              </div>
            </div>
            <div class="form-group">
              <label for="password">パスワード</label>
              <span class="p-input-icon-left">
                <i class="pi pi-lock" />
                <InputText
                  v-model="userInfo.password"
                  id="password"
                  type="text"
                />
              </span>
              <div v-if="isPasswordEmpty === true">
                <Message severity="error">Password is required</Message>
              </div>
            </div>
            <div class="form-group">
              <label for="Password2">パスワード再入力</label>
              <span class="p-input-icon-left">
                <i class="pi pi-lock" />
                <InputText v-model="rePassword" id="password2" type="text" />
              </span>
              <div v-if="isPasswordEmpty === true">
                <Message severity="error">renter Password is required</Message>
              </div>
              <div v-if="isPasswordIncoorect === true">
                <Message severity="error"
                  >reenter Password is incorrect</Message
                >
              </div>
            </div>
            <Button label="新規登録" @click="handleSubmit"></Button>
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Message from 'primevue/message';
import InputText from "primevue/inputtext";
import UserUtils from "@/utils/userUtils";
import CommonUtils from "@/utils/commonUtils";
import type UserInterface from "../repository/userInterface";

// password再入力用
const rePassword = ref<string>("");

const userInfo = ref<UserInterface>({} as UserInterface);

const isNameEmpty = ref(false);
const isEmailEmpty = ref(false);
const isPasswordEmpty = ref(false);
const isPasswordIncoorect = ref(false);
// フォーム送信時の処理
const handleSubmit = async () => {
  if (!isCorrectInput()) return;

  await UserUtils.createUser(userInfo.value);
};

const isCorrectInput = (): boolean => {
  // エラーフラグ初期化
  let res = true;
  isNameEmpty.value = false;
  isEmailEmpty.value = false;
  isPasswordEmpty.value = false;
  isPasswordIncoorect.value = false;

  if (CommonUtils.isNullorUndefined(userInfo.value.userName)) {
    isNameEmpty.value = true;
    res = false;
  }

  if (CommonUtils.isNullorUndefined(userInfo.value.email)) {
    isEmailEmpty.value = true;
    res = false;
  }

  if (CommonUtils.isNullorUndefined(userInfo.value.password)) {
    isPasswordEmpty.value = true;
    res = false;
  }

  if (CommonUtils.isNullorUndefined(rePassword.value) || userInfo.value.password !== rePassword.value) {
    isPasswordIncoorect.value = true;
    res = false;
  }

  return res;
};
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}
.form-group {
  margin: 1rem 0;
  label {
    color: #000;
    display: block;
    margin-bottom: 0.5rem;
  }
}

:deep(.p-card) {
  margin: auto;
  background-color: #fff;
  .p-card-content {
    padding: 0;
  }
}

:deep(.p-button) {
  color: #fff;
  background: #3b82f6;
  border: #3b82f6;
  transition: none;
  &:enabled:hover {
    color: #fff;
    background: #2563eb;
    border: #2563eb;
  }
}

:deep(.p-inputtext) {
  background-color: #fff;
  color: #000;
}

:deep(.p-message .p-message-wrapper) {
  padding: 0.5rem 1rem;
}
</style>
