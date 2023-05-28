<script setup lang="ts">
import router from "@/router";
import { defineProps } from "vue";
import type { Result } from "@/types/randomUsersTypes";

export interface Props {
  model: Result;
}

// const props = defineProps({
//   userIcon: String,
//   userName: String,
//   userCountry: String,
//   userMail: String,
//   userTel: String,
//   userGender: String,
//   userAge: String,
// });

const props = defineProps<Props>();
console.log(props);
const toUserInfo = () => {
  router.push({
    name: "userInfo",
    // params: {
    //   userIcon: props.userIcon,
    //   userName: props.userName,
    //   userGender: props.userGender,
    //   userAge: props.userAge,
    //   userCountry: props.userCountry,
    // },
    params: {
      userIcon: props.model.picture.large,
      userName: props.model.name.first,
      userGender: props.model.gender,
      userAge: props.model.dob.age,
      userCountry: props.model.location.country,
    },
  });
};
</script>
<template>
  <div class="user-form">
    <div class="user-form-icon">
      <div class="user-form-icon-image">
        <img :src="props.model.picture.large" />
      </div>
      <p class="user-form-icon-name">{{ props.model.name.first }}</p>
      <p class="user-form-icon-country">{{ props.model.location.country }}</p>
    </div>
    <div class="user-form-info">
      <p class="user-form-info-title">Personal Info</p>
      <div class="user-form-info-item">
        <i class="pi pi-envelope"></i>
        <p>{{ props.model.email }}</p>
      </div>
      <div class="user-form-info-item">
        <i class="pi pi-phone"></i>
        <p>{{ props.model.phone }}</p>
      </div>
      <div class="user-form-info-item">
        <i class="pi pi-clock"></i>
        <p>Mon - Fri:09am - 06pm</p>
      </div>
    </div>
    <div class="user-form-item">
      <div class="user-form-item-content">
        <i class="pi pi-star"></i>
        <p>Chat Rating</p>
      </div>
    </div>
    <div class="user-form-item">
      <div class="user-form-item-content link-cursor" @click="toUserInfo">
        <i class="pi pi-link"></i>
        <p>View Pages</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-form {
  width: 100%;
  .user-form-icon {
    background: #fff;
    height: 200px;
    padding-top: 20px;
    text-align: center;
    .user-form-icon-image {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      margin: auto;
      img {
        height: 80px;
        width: 80px;
        border-radius: 100%;
      }
    }
    .user-form-icon-name {
      font-size: 1.2rem;
    }
    .user-form-icon-country {
      font-size: 0.8rem;
    }
    p {
      margin-top: 1rem;
    }
  }
  .user-form-info {
    background: #fff;
    height: 200px;
    margin-top: 1rem;
    text-align: center;
    .user-form-info-title {
      padding-top: 1rem;
    }
    .user-form-info-item {
      padding-top: 0.5rem;
      margin: 1rem 0;
      margin-left: 1rem;
      display: flex;
      p {
        margin: 0;
        margin-left: 1rem;
        display: inline;
      }
    }
  }
  .user-form-item {
    height: 80px;
    width: 100%;
    margin-top: 1rem;
    background: #fff;
    display: flex;
    align-items: center;
    .user-form-item-content {
      padding-top: 0.5rem;
      margin-left: 1rem;
      display: flex;
      p {
        margin: 0;
        margin-left: 1rem;
      }
    }
    .link-cursor {
      cursor: pointer;
    }
  }
}
:deep(.pi) {
  display: inline;
  line-height: 1.6;
}
</style>
