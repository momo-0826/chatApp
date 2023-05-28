<script setup lang="ts">
import { defineProps } from "vue";
import Card from "primevue/card";

const props = defineProps<{
  picture: string;
  name: string;
  recentMessage: string;
  isNoRead: boolean;
  time: string;
}>();
</script>

<template>
  <Card>
    <template #content>
      <div class="card-content">
        <div class="card-content-img">
          <img alt="logo" :src="props.picture" class="mr-2" />
        </div>
        <div class="card-content-user">
          <p class="card-content-user-name">{{ props.name }}</p>
          <div class="card-content-user-message">
            <p class="p-medium">{{ props.recentMessage }}</p>
            <p class="p-small">{{ props.time }}</p>
          </div>
        </div>
        <!-- <div :class="{ 'card-content-read': isNoRead }"></div> -->
        <div class="card-content-read"></div>
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.card-content {
  display: flex;
  .card-content-img {
    margin: auto 0;
    img {
      border-radius: 50%;
      height: 30px;
      width: 30px;
    }
  }
  .card-content-user {
    text-align: left;
    margin-left: 10px;
    p {
      margin: 5px;
    }
    .card-content-user-name {
      margin-bottom: 0;
    }
    .card-content-user-message {
      display: flex;
      .p-medium {
        font-size: 0.8rem;
      }
      .p-small {
        color: #eaeaea;
        font-size: 0.5rem;
        margin-top: 0.55rem;
      }
    }
  }
  .card-content-read {
    content: "";
    height: 10px;
    width: 10px;
    background: #0076ff;
    border-radius: 100%;
    margin: auto;
  }
}
</style>
