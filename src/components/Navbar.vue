<script setup lang="ts">
import SocialModalLogin from './SocialModalLogin.vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleLogin = () => {
  // handle social login logic here
  console.log('Logging in with Github');
};
</script>

<template>
  <nav class="p-4 text-white bg-blue-600">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <a href="#" class="text-2xl font-bold">SuPaper</a>
        <div class="flex space-x-4">
          <div class="duration-150 ease-in-out transform hover:op80 hover:scale-90">
            <a href="#" class="px-4 py-1 border-2 border-blue-200 rounded-xl">主页</a>
          </div>
          <div class="duration-150 ease-in-out transform hover:op80 hover:scale-90">
            <a href="#" class="px-4 py-1 border-2 border-blue-200 rounded-xl">关于</a>
          </div>
          <div class="duration-150 ease-in-out transform hover:op80 hover:scale-90">
            <a href="#" @click="openModal" class="px-4 py-1 border-2 border-blue-200 rounded-xl">登录
            </a>
          </div>
        </div>

        <SocialModalLogin :is-open="isModalOpen" :on-login="handleLogin" :on-close="closeModal" />
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
