<template>
  <div class="flex flex-col h-screen max-w-4xl px-4 mx-auto">
    <div class="flex items-center justify-between my-2">
      <NuxtLink to="/admin" class="flex items-center">
        <img src="/favicon.png" alt="" class="w-10">
        <span class="ml-3 text-2xl font-bold font-roboto">Nuxt 3 Tips</span>
      </NuxtLink>
      <button @click="signOut" class="flex items-center text-sm font-bold text-stone-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          class="w-5 h-5">
          <path fill-rule="evenodd"
            d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
            clip-rule="evenodd" />
          <path fill-rule="evenodd"
            d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
            clip-rule="evenodd" />
        </svg>
        <span class="ml-2 uppercase">sign out</span>
      </button>
    </div>
    <slot class="flex-grow" />
  </div>
</template>

<script setup>
import { signOutUser } from "~/composables/useFirebase";

const signOut = async () => {
  console.log("sign out")
  await signOutUser()
  navigateTo("/admin/signin")
}
</script>