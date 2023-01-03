<template>
  <div class="flex flex-col h-screen max-w-2xl px-2 mx-auto">
    <nav class="py-6">
      <NuxtLink to="/" class="flex items-center">
        <svg class="w-12" viewBox="0 0 339 249" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M40.9746 46.6343C31.248 39.1651 14.1095 20.6084 19.6114 2.92081C19.9479 1.83904 20.1925 0.884426 20.3533 0.0488388C23.8829 -0.0660445 27.5322 0.768144 30.961 2.74778L211.772 107.139C225.105 114.837 225.105 134.082 211.772 141.78L30.961 246.171C17.6277 253.869 0.961013 244.247 0.961014 228.851L0.961021 62.396C8.22917 73.745 25.9963 81.6679 33.961 84.77L33.961 206.334L175.772 124.459L40.9746 46.6343Z"
            fill="#00DC82" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M150.84 42.585L292.651 124.459L150.84 206.334L150.84 151.751L117.84 170.804L117.84 228.851C117.84 244.247 134.507 253.869 147.84 246.171L328.651 141.78C341.984 134.082 341.984 114.837 328.651 107.139L147.84 2.74778C134.507 -4.95022 117.84 4.67228 117.84 20.0683L117.84 78.1154L150.84 97.1679L150.84 42.585Z"
            fill="#00DC82" />
        </svg>
        <span class="ml-3 text-2xl font-bold font-roboto">Nuxt 3 Tips</span>
      </NuxtLink>
    </nav>
    <slot class="flex-grow"/>
  </div>
</template>
