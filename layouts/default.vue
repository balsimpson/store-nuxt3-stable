<template>
  <div class="flex flex-col h-screen max-w-4xl px-4 mx-auto">
    <nav class="flex items-center justify-between py-6">
      <NuxtLink to="/" class="flex items-center">
        <img src="/favicon.png" alt="" class="w-10">
        <span class="ml-3 text-2xl font-bold font-roboto">FadArt</span>
      </NuxtLink>

      <button @click.prevent="isShowing = !isShowing">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
          <path fill-rule="evenodd"
            d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </nav>
    <!-- class="fixed inset-y-0 right-0 z-20 flex max-w-full pl-10 transform" -->
    <SlideInCart @close="isShowing = !isShowing" :isShowing="isShowing"/>
    <slot class="flex-grow" />
    <AppFooter />
  </div>
</template>

<script setup>
const isShowing = ref(false)
</script>
