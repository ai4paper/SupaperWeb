
<template>
    <transition name="fade">
        <div v-if="isOpen" @click.self="closeModal"
            class="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-25">
            <div class="relative p-6 bg-white rounded-lg w-96">
                <span @click="closeModal" class="absolute cursor-pointer right-2 top-2">&times;</span>
                <h2 class="mb-4 text-2xl font-bold text-center text-blue-700">登录</h2>
                <div class="flex justify-between mb-6 space-x-2">
                    <button @click="loginWithGithub" class="w-24 py-2 text-white transition bg-gray-800 rounded-full hover:scale-105">Github</button>
                    <button @click="loginWithGoogle" class="w-24 py-2 text-white transition bg-red-500 rounded-full hover:scale-105">Google</button>
                    <button @click="loginWithFacebook"
                        class="w-24 py-2 text-white transition bg-blue-700 rounded-full hover:scale-105">Facebook</button>
                    <button @click="loginWithTwitter" class="w-24 py-2 text-white transition bg-blue-400 rounded-full hover:scale-105">Twitter</button>
                </div>

                <form @submit.prevent="submit">
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" v-model="email" required class="w-full p-2 mt-1 border rounded-md">
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" v-model="password" required
                            class="w-full p-2 mt-1 border rounded-md">
                    </div>

                    <div class="flex items-center justify-between">
                        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-full">Login</button>
                        <button @click="toggle" class="text-blue-500">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isOpen: Boolean,
    onLogin: Function,
    onClose: Function,
});

const email = ref('');
const password = ref('');

const emit = defineEmits();

const closeModal = () => {
    props.onClose?.();
};

const loginWithGithub = () => {
    // TODO: 处理 Github 登录
};

const loginWithGoogle = () => {
    // TODO: 处理 Google 登录
};

const loginWithFacebook = () => {
    // TODO: 处理 Facebook 登录
};

const loginWithTwitter = () => {
    // TODO: 处理 Twitter 登录
};

const submit = () => {
    // TODO: 处理表单提交
};

const toggle = () => {
    // TODO: 切换登录和注册表单
};
</script>

<style scoped>
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.close {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
}

button {
    cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>