<template>
  <div>
  <!-- <div class="flex flex-col h-screen max-w-2xl px-2 mx-auto"> -->
    
    <div class="flex items-center justify-between pt-6 space-x-8">
      <div class="relative w-full">
        <label class="sr-only">Search</label>
        <input type="text"
          class="w-full p-3 pl-10 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search for items">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg class="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
      <NuxtLink to="/admin/compose" class="shrink-0">Add Post</NuxtLink>
    </div>

    <div class="h-full my-3 space-y-3 overflow-y-scroll scroller snap-mandatory snap-y">

      <div v-for="n in 26" class="border rounded snap-start">

        <div class="p-4">
          <h3 class="text-base font-semibold text-gray-800 sm:text-lg">
            Effortless updates
          </h3>

          <p class="mt-2 text-sm text-gray-600">
            Benefit from automatic updates to all boards any time you need to make a change to your website.
          </p>
        </div>

        <div class="flex items-center justify-between px-4 py-2 border-t">
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            September 12, 2022
          </p>
          <NuxtLink to="/admin/edit/this-is-a-slug" class="opacity-40 hover:opacity-100">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M5 23.7q-.825 0-1.413-.588Q3 22.525 3 21.7v-14q0-.825.587-1.413Q4.175 5.7 5 5.7h8.925l-2 2H5v14h14v-6.95l2-2v8.95q0 .825-.587 1.412q-.588.588-1.413.588Zm7-9Zm4.175-8.425l1.425 1.4l-6.6 6.6V15.7h1.4l6.625-6.625l1.425 1.4l-7.2 7.225H9v-4.25Zm4.275 4.2l-4.275-4.2l2.5-2.5q.6-.6 1.438-.6q.837 0 1.412.6l1.4 1.425q.575.575.575 1.4T22.925 8Z" />
            </svg>
          </NuxtLink>
        </div>
      </div>

    </div>

    <div>some footer</div>
  </div>

</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})

const firebaseItems = useFirebaseItems();

// const { data: posts, pending, error } = await useAsyncData(
//   'post',
//   () => $fetch('/api/post')
// )

const { data: posts, pending, error } = await useAsyncData(
  'post',
  () => $fetch('/api/post')
)

watchEffect(() => {
  // @ts-ignore
  firebaseItems.value = posts;
})

// const refresh = () => refreshNuxtData('posts')
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scroller::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scroller {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>