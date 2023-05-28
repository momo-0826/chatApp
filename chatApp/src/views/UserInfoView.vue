<script setup lang="ts">
import Button from "primevue/button";
import router from "@/router";
import { defineProps } from "vue";
import route from "@/router";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  userIcon: String,
  userName: String,
  userGender: String,
  userAge: String,
  userCountry: String,
});

const toChat = () => {
  router.push("/chat");
};

// const userIconSrc = $route.params.userIcon;
const routeValue = useRoute();
const routerTest = useRouter();
console.log(routeValue);
console.log(routerTest);
</script>
<template>
  <div class="user-info">
    <div class="user-info-img">
      <img :src="routeValue.params.userIcon" />
    </div>
    <div class="user-info-list">
      <div class="user-info-list-item">
        <div class="user-info-list-item-title">
          <p>Name</p>
        </div>
        <div class="user-info-list-item-content">
          <p>{{ routeValue.params.userName }}</p>
        </div>
      </div>
      <div class="user-info-list-item">
        <div class="user-info-list-item-title">
          <p>gender</p>
        </div>
        <div class="user-info-list-item-content">
          <p>{{ routeValue.params.userGender }}</p>
        </div>
      </div>
      <div class="user-info-list-item">
        <div class="user-info-list-item-title">
          <p>age</p>
        </div>
        <div class="user-info-list-item-content">
          <p>{{ routeValue.params.userAge }}</p>
        </div>
      </div>
      <div class="user-info-list-item">
        <div class="user-info-list-item-title">
          <p>Country</p>
        </div>
        <div class="user-info-list-item-content">
          <p>{{ routeValue.params.userCountry }}</p>
        </div>
      </div>
    </div>
    <Button label="メッセージ" @click="toChat"></Button>
  </div>
</template>

<style lang="scss" scoped>
.user-info {
  width: 95%;
  margin: auto;
  .user-info-img {
    width: 200px;
    margin: 1rem auto;
    text-align: center;
  }
  .user-info-list {
    margin-bottom: 1rem;
    .user-info-list-item {
      display: flex;
      border-bottom: 1px solid #e6e8ea;
      .user-info-list-item-title {
        margin-left: 1rem;
      }
      .user-info-list-item-content {
        margin-left: 1rem;
      }
    }
  }
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
