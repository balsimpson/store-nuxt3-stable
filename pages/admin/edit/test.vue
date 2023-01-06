<template>
  <div class="bg-blue-500 flex-flex-col">
    <div>some title</div>
    <div class="font-bold">some tags</div>

    <div class="flex-grow bg-black">
      
      <Tiptap @update="docUpdated" :content="post?.content" />
    </div>
    
    <div>footer</div>
  </div>
</template>

<script setup>
const { data: post, pending, error } = await useAsyncData(
  'post',
  () => $fetch('/api/post?slug=' + route.params.slug)
)
</script>