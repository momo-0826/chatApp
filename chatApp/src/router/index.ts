import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChatView from "../views/ChatView.vue";
import IndexView from "../views/IndexView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import UserInfoView from "../views/UserInfoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      // 初期表示の画面
      path: "/index",
      name: "index",
      component: IndexView,
    },
    {
      // アカウント登録画面
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      // ログイン画面
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      // ユーザー一覧、チャット画面(メイン画面)
      path: "/chat",
      name: "chat",
      component: ChatView,
    },
    {
      // ユーザー情報画面
      path: "/userInfo:userIcon/:userName/:userGender/:userAge/:userCountry",
      name: "userInfo",
      component: UserInfoView,
    },
  ]
})

export default router
