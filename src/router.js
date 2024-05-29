import { createRouter, createWebHistory } from 'vue-router';
import DefaultHome from './pages/Home.vue'
import LoginPage from './pages/Login.vue'
import SignUpPage from './pages/SignUp.vue'

const routes = [
  { 
    path: "/", 
    component: DefaultHome 
  },
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/signup",
    component: SignUpPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
