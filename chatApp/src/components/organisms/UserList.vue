<script setup lang="ts">
import { computed, defineEmits, ref } from "vue";
import InputText from "primevue/inputtext";
import UserCard from "../molecules/UserCard.vue";
import type { Result } from "@/types/randomUsersTypes";

export interface Props {
  model: Result[];
};

let input = ref<string>("");

const props = defineProps<Props>();

const userList = computed(() => {
  return props.model;
});
// 氏名の結合
const getFullName = (first: string, last: string) => {
  return first + " " + last;
};

// テスト用
const getRecentMessge = "recentMessage";
const isNoRead = true;
const time = "21:30";

// フィルター(未完成)
// const filterUser = (input: string) => {
//   if (input !== "") {
//     let filtered = users.data.results?.filter(
//       (user) => user.name.first === input
//     );
//     users.data.results = filtered;
//   } else users.data.results = usersBakup.results;
//   // console.log(users.data.results);
//   console.log(usersBakup.results);
//   return users.data;
// };

// UserCardのclick時のemit
const selectUser = defineEmits<{
  (e: "selectUser", user: Result, key: number): void;
}>();
</script>

<template>
  <div class="user-list">
    <div class="user-list-header">
      <div class="user-list-header-search">
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            type="text"
            placeholder="Search"
            v-model="input"
            @change="filterUser(input)"
          />
        </span>
      </div>
    </div>
    <div class="user-list-body">
      <div class="user-card" v-for="(data, index) in userList" :key="index">
        <UserCard
          :picture="data.picture.thumbnail"
          :name="getFullName(data.name.first, data.name.last)"
          :recent-message="getRecentMessge"
          :is-no-read="isNoRead"
          :time="time"
          @click="selectUser('selectUser', data, index)"
        ></UserCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-list {
  color: #000;
  width: 250px;
  margin-left: 20px;
  overflow-y: scroll;
  .user-list-header {
    position: sticky;
    margin: 0 auto 1rem;
    top: 0;
    .user-list-header-search {
      .p-inputtext {
        background: #fff;
        color: #000;
        width: 100%;
      }
    }
  }
  .user-list-body {
    .p-card {
      background: #fff;
      color: #000;
      height: 80px;
      width: 100%;
    }
    .user-card {
      margin-bottom: 4px;
    }
  }
}
::v-deep(.p-card) {
  background: #fff;
  color: #000;
  .p-card-body {
    padding: 0.5rem 1rem 0;
    .p-card-content {
      padding: 0;
    }
  }
}
</style>
