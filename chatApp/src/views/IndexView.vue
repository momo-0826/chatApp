<template>
  <div class="field">
    <Button label="Login">
      <router-link to="/login">ログイン</router-link>
    </Button>
  </div>
  <div class="field">
    <Button label="SignUp">
      <router-link to="/signup">新規登録</router-link>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
</script>

<style lang="scss" scoped>
.field {
  margin: 1rem auto;
  margin-bottom: 1rem;
  text-align: center;
}

::v-deep(.p-button) {
  color: #fff;
  background: #3b82f6;
  border: #3b82f6;
  transition: none;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:enabled:hover {
    color: #fff;
    background: #2563eb;
    border: #2563eb;
  }
}
</style>
