<template>
  <div class="flex flex-col h-screen max-w-2xl p-2 mx-auto sm:p-4">
    <textarea class="w-full h-auto p-2 text-2xl font-bold bg-transparent sm:px-4 sm:text-4xl focus:outline-none "
      placeholder="Your post title..." autofocus></textarea>
    <div class="flex-grow overflow-y-scroll">
      <Tiptap class="" />
    </div>
    <div class="flex justify-between pt-2 border-t">
      <NuxtLink to="/admin">Cancel</NuxtLink>
      <div class="flex space-x-6">
        <button>Save draft</button>
        <button class="px-4 py-1 text-white rounded bg-cyan-600 ">Publish</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
</script>