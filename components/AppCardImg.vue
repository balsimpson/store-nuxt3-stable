<template>
  <a class="relative overflow-hidden group rounded-xl" :href="'/post/'+item.slug">
    <div v-if="item.image" class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <img 
        class="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl"
        :src="item.image" alt="Image Description">
      
        <span
        class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
        Sponsored
      </span>
    </div>
    <img v-else src="https://source.unsplash.com/random" alt=""   class="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl"/>

    <div class="mt-7">
      <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
        {{ item.title }}
      </h3>
      <p class="mt-3 text-gray-800 ">
        {{ item.description }}
      </p>
      <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
        Read more
        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </p>
    </div>
  </a>
</template>

<script setup>
const props = defineProps(["item"])
</script>