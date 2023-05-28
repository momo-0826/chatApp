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
      <div class="user-info-list-item grid">
        <div class="col-4">
          <p>Name</p>
        </div>
        <div class="col-8">
          <p>{{ routeValue.params.userName }}</p>
        </div>
      </div>
      <div class="user-info-list-item grid">
        <div class="col-4">
          <p>gender</p>
        </div>
        <div class="col-8">
          <p>{{ routeValue.params.userGender }}</p>
        </div>
      </div>
      <div class="user-info-list-item grid">
        <div class="col-4">
          <p>age</p>
        </div>
        <div class="col-8">
          <p>{{ routeValue.params.userAge }}</p>
        </div>
      </div>
      <div class="user-info-list-item grid">
        <div class="col-4">
          <p>Country</p>
        </div>
        <div class="col-8">
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
  text-align: center;
  .user-info-img {
    width: 200px;
    margin: 1rem auto;
    text-align: center;
  }
  .user-info-list {
    margin-bottom: 1rem;
    .user-info-list-item {
      text-align: left;
      border-bottom: 1px solid #e6e8ea;
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
