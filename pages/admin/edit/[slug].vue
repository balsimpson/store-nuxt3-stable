<template>
  <div v-if="post" class="flex flex-col h-screen max-w-2xl p-2 mx-auto sm:p-4">
    <!-- <textarea class="w-full p-2 py-4 text-2xl font-bold bg-transparent sm:px-4 sm:text-4xl focus:outline-none"
      v-model="postTitle"></textarea> -->
    <input class="w-full h-auto py-4 text-2xl font-bold bg-transparent sm:text-4xl focus:outline-none"
      placeholder="Your post title..." autofocus type="text" v-model="postTitle" />
    <TagInput @updated="addTags" :suggestions="[]" />
    <div v-if="post && post.content" class="flex-grow w-full pb-24 mt-2">
      <Tiptap @update="docUpdated" :content="post?.content" />
    </div>
    <div class="fixed left-0 w-full p-4 bottom-2">
      <div class="flex items-center justify-between max-w-2xl p-4 mx-auto bg-white border rounded-lg shadow-lg">
        <NuxtLink to="/admin" class="px-4 py-1 border rounded">Cancel</NuxtLink>
        <div class="flex space-x-6">
          <button @click.prevent="saveDoc('draft')">Save draft</button>
          <button @click.prevent="saveDoc('published')"
            class="inline-flex px-4 py-1 font-bold tracking-wide text-teal-800 transition bg-teal-500 border-2 border-teal-500 rounded cursor-pointer hover:bg-white hover:text-teal-500 ">
            <span class="ml-3" :class="[
              publishBtnText == 'Publishing...' ? 'pointer-events-none' : '',
            ]">{{ publishBtnText }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToast } from "vue-toastification";
definePageMeta({
  middleware: ["auth"],
  layout: "admin"
  // or middleware: 'auth'
})
const route = useRoute()
const toast = useToast();
// interface Post {
//   title: string;
//   content: string;
//   author: string;
//   tags: string[];
// }

const { data: post, pending, error } = await useAsyncData(
  'post',
  () => $fetch('/api/post?slug=' + route.params.slug)
)
// @ts-ignore
const ogPost = computed(() => post.value);
// const ogPost = computed(() => JSON.parse(post.value));
const postTags = ref([]);
const editorPost = ref({});
const publishBtnText = ref("Publish");
const draftBtnText = ref("Save Draft");

const userCookie = useCookie("userCookie");

// @ts-ignore
const postTitle = ref(post.title)

const docUpdated = (doc: {}) => {
  editorPost.value = doc;
};

const saveDoc = async (status: string) => {
  // @ts-ignore
  const { description, image } = getPostDetails(editorPost.value);

  if (status == "draft") {
    draftBtnText.value = "saving...";
  } else {
    publishBtnText.value = "Publishing...";
  }

  if (postTitle.value) {
    const slug = createSlug(postTitle.value);
    const data = {
      title: postTitle.value,
      author: {
        // @ts-ignore
        name: userCookie.value.providerData[0].displayName,
        // @ts-ignore
        email: userCookie.value.providerData[0].email,
        // @ts-ignore
        photo: userCookie.value.providerData[0].photoURL,
        // @ts-ignore
        uid: userCookie.value.uid,
      },
      description,
      image,
      slug,
      status,
      content: editorPost.value,
      tags: postTags.value || [],
      // published_at: Date.now(),
      last_updated: Date.now(),
    };

    console.log(data);
    console.log("id", ogPost.value);
    // let res = await addDocToFirestore("posts", data);
    // @ts-ignore
    let res = await updateDocInFirestore("posts", ogPost.value.id, data);
    console.log(res);

    // @ts-ignore
    if (!res) {
      toast.success(data.title + " was updated!");
    } else {
      toast.error("Post failed to save! - " + res);
    }
    publishBtnText.value = "Publish";
    draftBtnText.value = "Save draft";
  } else {
    console.log("else")
  }
};

const addTags = (tags: never[]) => {
  postTags.value = tags || [];
  // console.log("tags", tags);
};

onMounted(() => {
  // console.log(route.params, ogPost.value);
  // @ts-ignore
  editorPost.value = post.value.content;
  // @ts-ignore
  postTitle.value = post.value.title;
  // @ts-ignore
  postTags.value = post.value.tags || [];
});
</script>

<style>
#myTextarea {
  overflow: hidden;
}
</style>