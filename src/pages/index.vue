<script lang="ts" setup>
const keyWords = ref('')
const zone = ref('')

const submit = function () {
  window.alert(keyWords.value)
}

const options1 = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  }]
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <Navbar />
    <HomePageAnime />
    <div class="flex flex-col items-center justify-center pb-6 mx-auto">
      <div class="w-full">
        <input
          class="p-3 text-gray-700 placeholder-gray-400 transition-all duration-300 ease-in-out border-2 border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-green-500 focus:shadow-outline"
          type="text" v-model="keyWords" placeholder="Your Text Here" />
      </div>
      <div class="flex justify-center w-full"> <!-- 添加 flex 和 justify-center 类 -->
        <button @click="submit" class="px-6 py-2 rounded-full shadow-md focus:outline-none">
          搜索
        </button>
      </div>
    </div>
    <div class="mx-auto w-[70%] flex items-start">
      <textarea
        class=" w-[60%] p-3 text-gray-700 placeholder-gray-400 transition-all duration-300 ease-in-out border-2 border-gray-300 rounded-md resize-none bg-gray-50 focus:outline-none focus:border-green-500 min-h-[300px]"></textarea>
      <div class="w-[40%] grid grid-cols-1 mx-6 p-6 space-y-2 border-2 border-blue-200 rounded-lg">
        <div class="flex items-center">
          <span class="min-w-[36px]">领域</span>
          <NSelect v-model="zone" :options="options1"></NSelect>
        </div>
        <div class="flex items-center">
          <span class="min-w-[36px]">领域</span>
          <NSelect v-model="zone" :options="options1"></NSelect>
        </div>
        <div class="flex items-center">
          <span class="min-w-[36px]">领域</span>
          <NSelect v-model="zone" :options="options1"></NSelect>
        </div>
        <div class="flex items-center">
          <span class="min-w-[36px]">领域</span>
          <NSelect v-model="zone" :options="options1"></NSelect>
        </div>
      </div>
    </div>

    <div class="grid w-full max-w-screen-lg grid-cols-3 gap-12 mx-auto mt-18">
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-2 text-xl font-bold">
          阅读
        </h2>
        <p class="text-gray-700">
          阅读你感兴趣的论文。
        </p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-2 text-xl font-bold">
          总结
        </h2>
        <p class="text-gray-700">
          总结一切你想要的知识。
        </p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-2 text-xl font-bold">
          周报
        </h2>
        <p class="text-gray-700">
          AI 自动生成每周周报。
        </p>
      </div>

    </div>
    <Footer />
  </div>
</template>
