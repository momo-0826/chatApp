<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
</script>

<template>
  <div class="chat-form">
    <InputText></InputText>
    <Button>送信</Button>
  </div>
</template>

<style lang="scss" scoped>
.chat-form {
  width: 98%;
  height: 40px;
  position: relative;
  margin: 1rem auto;
  .p-inputtext {
    background: #fff;
    color: #000;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 88%;
  }
  .p-button {
    background: #0076ff;
    border: #0076ff;
    color: #fff;
    position: absolute;
    right: 0;
    bottom: 0;
    &:hover {
      background: #0076ff;
      border: #0076ff;
      color: #fff;
    }
  }
}
</style>
