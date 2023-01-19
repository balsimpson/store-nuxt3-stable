<template>
  <div class="flex flex-col h-full">
    <!-- <div class="flex flex-col h-screen max-w-2xl px-2 mx-auto"> -->

    <div class="flex flex-col items-center py-6 space-y-2 sm:space-y-0 sm:space-x-8 sm:justify-between sm:flex-row">
      <div class="relative w-full">
        <label class="sr-only">Search</label>
        <input
          @keyup="searchPosts" 
          type="text"
          class="w-full p-3 pl-10 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search for items" v-model="searchTerm">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg class="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
      <NuxtLink to="/admin/compose" class="w-full px-12 py-3 text-center text-white bg-indigo-600 rounded-lg sm:w-auto shrink-0">Add Post</NuxtLink>
    </div>

    <div v-if="posts && searchItems.length" class="h-full my-3 space-y-3 overflow-y-scroll scroller snap-mandatory snap-y">

      <div v-for="post in searchItems" class="border rounded snap-start">

        <div class="p-4">
          <h3 class="text-base font-semibold text-gray-800 sm:text-lg">
            {{ post.title }}
          </h3>

          <p class="mt-2 text-sm text-gray-600">
            {{ post.description }}
          </p>
        </div>

        <div class="flex items-center justify-between px-4 py-2 border-t">
          <p class="text-sm text-gray-600 ">
            {{ getRelativeTime(post.published_at) }}
          </p>
          <div class="flex items-center space-x-3 sm:space-x-12">
            <div v-if="post.status == 'draft'" class="text-xs uppercase">{{ post.status }}</div>

            <FeaturedButton v-if="post.status !== 'draft'" />

            <NuxtLink :to="`/admin/edit/${post.slug}`" class="opacity-40 hover:opacity-100">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M5 23.7q-.825 0-1.413-.588Q3 22.525 3 21.7v-14q0-.825.587-1.413Q4.175 5.7 5 5.7h8.925l-2 2H5v14h14v-6.95l2-2v8.95q0 .825-.587 1.412q-.588.588-1.413.588Zm7-9Zm4.175-8.425l1.425 1.4l-6.6 6.6V15.7h1.4l6.625-6.625l1.425 1.4l-7.2 7.225H9v-4.25Zm4.275 4.2l-4.275-4.2l2.5-2.5q.6-.6 1.438-.6q.837 0 1.412.6l1.4 1.425q.575.575.575 1.4T22.925 8Z" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts" setup>

definePageMeta({
  middleware: ["auth"],
  layout: 'admin'
})

const firebaseItems = useFirebaseItems();

const { data: posts, pending, error } = await useAsyncData<any[]>(
  'posts',
  () => $fetch('/api/post')
)

const searchTerm = ref("");
const searchItems = ref([]);

watchEffect(() => {
  // @ts-ignore
  firebaseItems.value = posts.value;
  
  // @ts-ignore
  searchItems.value = posts.value;
})

const searchPosts = () => {
  const searchByTitle = fuzzy(posts.value, 'title')
  const found = searchByTitle(searchTerm.value)
  if (searchTerm.value.length > 0) {
    searchItems.value = found;
  } else {
    // @ts-ignore
    searchItems.value = posts.value;
  }
  // console.log(found)
}

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