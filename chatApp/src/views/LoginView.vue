<template>
  <div class="content">
    <h2>ログイン画面</h2>
    <div>
      <Card style="width: 25rem">
        <template #title>
          <p>
            認証情報の期限が切れました。<br />
            再度ログインしてください。
          </p>
        </template>
        <template #content>
          <form @submit.prevent="">
            <div class="center">
              <div class="form-group">
                <label for="username">ユーザー名</label>
                <span class="p-input-icon-left">
                  <i class="pi pi-user" />
                  <InputText
                    id="username"
                    type="text"
                    placeholder="user"
                    v-model="userName"
                  />
                </span>
                <div v-if="isNameEmpty === true">
                  <Message severity="error">Username is required</Message>
                </div>
              </div>
              <div class="form-group">
                <label for="password">パスワード</label>
                <span class="p-input-icon-left">
                  <i class="pi pi-lock" />
                  <InputText id="password" type="text" v-model="password" />
                </span>
                <div v-if="isPassEmpty === true">
                  <Message severity="error">Password is required</Message>
                </div>
              </div>
              <div v-if="isError === true">
                <Message severity="error"
                  >Username or Password is incorrect</Message
                >
              </div>
              <Button label="ログイン" @click="submit"></Button>
            </div>
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { Ref } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import UserUtils from "@/utils/userUtils";

const userName: Ref<string> = ref("");
const password: Ref<string> = ref("");
const isNameEmpty = ref(false);
const isPassEmpty = ref(false);
const isError = ref(false);
const router = useRouter();

const submit = async () => {
  // 入力チェック
  isNameEmpty.value = false;
  isPassEmpty.value = false;
  isError.value = false;
  if (userName.value === "") isNameEmpty.value = true;
  if (password.value === "") isPassEmpty.value = true;
  if (isNameEmpty.value === true || isPassEmpty.value === true) return;

  // apiでユーザー認証
  const res = await UserUtils.getUser(userName.value, password.value);
  console.log(res);
  if (res === undefined || res === null) isError.value = true;
  else router.push({ path: "/chat" });
};
</script>

<style lang="scss" scoped>
$errorColor: #ff5757;
.content {
  margin: 0 auto;
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

::v-deep(.p-card) {
  margin: auto;
  background-color: #fff;
  .p-card-title {
    color: #000;
    font-size: 1.1rem;
    font-weight: 400;
  }
  .p-card-content {
    padding: 0;
  }
}

::v-deep(.p-button) {
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

::v-deep(.p-inputtext) {
  background-color: #fff;
  color: #000;
}

::v-deep(.p-message.p-message-error) {
  background: #ffe7e6;
  border: solid $errorColor;
  border-width: 0 0 0 6px;
  color: $errorColor;
  .p-message-icon {
    color: $errorColor;
  }
  .p-message-close {
    color: $errorColor;
  }
}
</style>
