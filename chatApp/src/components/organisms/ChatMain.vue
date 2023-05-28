<script setup lang="ts">
import ChatMessage from "./ChatMessage.vue";
import ChatForm from "./ChatForm.vue";

export interface Props {
  userIcon: string;
  message: string;
  userType: string;
};

export interface ChatTypes {
  resultCount: number;
  result: Props[];
};

const props = defineProps<ChatTypes>();

// const testIcon =
//   "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png";
// const testMessage = "test";
// const testUser = "me";
// const testOther = "other";
</script>

<template>
  <div class="chat-content">
    <div class="chat-content-header">
      <div class="chat-content-header-user">
        <div class="chat-content-header-user-img">
          <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          />
        </div>
        <div class="chat-content-header-user-name">
          <p class="p-large">TestUser</p>
          <p class="p-small">online</p>
        </div>
      </div>
      <div class="chat-content-header-contact">
        <div class="chat-content-header-contact-video">
          <a><i class="pi pi-video"></i></a>
        </div>
        <div class="chat-content-header-contact-tel">
          <a href="tel:000-1234-5678"><i class="pi pi-phone"></i></a>
        </div>
      </div>
    </div>

    <div class="chat-content-body">
      <div class="chat-content-body-message">
        <div v-for="(item, key) in props.result" :key="key">
          <ChatMessage
            :user-icon="item.userIcon"
            :message="item.message"
            :user-type="item.userType"
          ></ChatMessage>
        </div>
      </div>
      <ChatForm></ChatForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-content {
  width: 700px;
  margin-left: 1rem;
  .chat-content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: #fff;
    .chat-content-header-user {
      display: flex;

      .chat-content-header-user-img {
        margin: auto 1rem;
        img {
          border-radius: 50%;
          height: 30px;
          width: 30px;
        }
      }
      .chat-content-header-user-name {
        margin: 0 1rem;
        .p-large {
          font-size: 1rem;
          font-weight: bold;
        }
        .p-small {
          font-size: 0.5rem;
        }
      }
    }
    .chat-content-header-contact {
      display: flex;
      .chat-content-header-contact-video {
        margin: 0 1rem;
      }
      .chat-content-header-contact-tel {
        margin: 0 1rem;
      }
    }
  }
  .chat-content-body {
    height: 200px;
    width: 100%;
    .chat-content-body-message {
      height: 450px;
      width: 98%;
      margin: auto;
      padding: 2%;
      border: 1px solid #e6e8ea;
      border-top: 0;
      border-bottom: 0;
    }
  }
}
</style>
