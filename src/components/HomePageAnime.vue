<script setup lang="ts">
import anime from 'animejs/lib/anime.es'
import { onMounted, ref } from 'vue'

const text = ref(null)
const subtitle = ref(null)

onMounted(() => {
  startAnimation(text, subtitle)
})

function startAnimation(textElement, subtitleElement) {
  const words = ['preme', 'paper', 'per']
  let index = 0
  setInterval(() => {
    anime({
      targets: textElement.value,
      opacity: 0,
      duration: 500,
      easing: 'easeInQuad',
      complete: () => {
        textElement.value.textContent = words[index]
        anime({
          targets: textElement.value,
          opacity: 1,
          duration: 500,
          easing: 'easeOutQuad',
        })
      },
    })

    // Animate subtitle
    anime({
      targets: subtitleElement.value,
      opacity: 0,
      duration: 500,
      easing: 'easeInQuad',
      complete: () => {
        subtitleElement.value.textContent = words[index]
        anime({
          targets: subtitleElement.value,
          opacity: 1,
          duration: 500,
          easing: 'easeOutQuad',
        })
      },
    })

    index = (index + 1) % words.length
  }, 2000) // Change every 2000 milliseconds
}
</script>

<template>
  <div class="flex-grow container mx-auto p-8 flex items-center justify-center flex-col">
    <div class="text-center mb-4">
      <span class="text-blue-600 text-6xl font-bold">Supa</span>
      <span ref="text" class="text-6xl font-bold">per</span>
    </div>
    <p ref="subtitle" class="text-gray-700 text-2xl">
      Super
    </p>
  </div>
</template>

<style scoped>

</style>
