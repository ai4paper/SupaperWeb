<script lang="ts" setup>
const keyWords = ref('')

const submit = function () {
  window.alert(keyWords.value)
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Navbar />
    <HomePageAnime />
    <div class="mx-auto pb-6">
      <input v-model="keyWords">
      <button @click="submit">
        搜索
      </button>
    </div>

    <div class="grid grid-cols-3 mx-auto gap-12 w-full max-w-screen-lg">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-2">
          阅读
        </h2>
        <p class="text-gray-700">
          阅读你感兴趣的论文。
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-2">
          总结
        </h2>
        <p class="text-gray-700">
          这是第二个功能的简短描述。
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-2">
          周报
        </h2>
        <p class="text-gray-700">
          这是第三个功能的简短描述。
        </p>
      </div>

    </div>
    <Footer />
  </div>
</template>
