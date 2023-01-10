<template>
  <div class="flex flex-col h-screen max-w-4xl px-4 mx-auto">
    <nav class="py-6">
      <NuxtLink to="/" class="flex items-center">
        <img src="/favicon.png" alt="" class="w-10">
        <span class="ml-3 text-2xl font-bold font-roboto">Nuxt 3 Tips</span>
      </NuxtLink>
    </nav>
    <slot class="flex-grow"/>
  </div>
</template>
