<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  userIcon: String,
  message: String,
  userType: String,
});
</script>
<template>
  <div class="message" :class="userType">
    <div class="message-user">
      <img :src="userIcon" />
    </div>
    <p class="message-content">{{ message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.message {
  display: flex;
  align-items: center;
  &.me {
    justify-content: end;
    flex-direction: row-reverse;
    .message-user {
      margin: 0 1rem;
      img {
        border-radius: 50%;
        height: 30px;
        width: 30px;
      }
    }
    .message-content {
      background: #0076ff;
      color: #fff;
      &::before {
        right: -20px;
        transform: rotate(-25deg);
        border-left: 18px solid #0076ff;
      }
    }
  }
  &.other {
    justify-content: start;
    .message-user {
      margin: 0 1rem;
      img {
        border-radius: 50%;
        height: 30px;
        width: 30px;
      }
    }
    .message-content {
      background: #fff;
      color: #000;
      &::before {
        left: -20px;
        transform: rotate(25deg);
        border-right: 18px solid #fff;
      }
    }
  }
  .message-content {
    display: inline-block;
    max-width: 280px;
    padding: 10px 30px;
    border-radius: 11%;
    min-height: 30px;
    font-size: 1.1rem;
    position: relative;
    &::brefore {
      content: "";
      display: block;
      position: absolute;
      top: 5px;
      border: 8px solid transparent;
    }
  }
}
</style>
