<template>
  <div class="flex flex-col max-w-4xl p-2 sm:p-4">
    <textarea class="w-full p-2 py-4 text-2xl font-bold bg-transparent sm:px-4 sm:text-4xl focus:outline-none"
      rows="2" v-model="post.title"></textarea>
    <TagInput @updated="addTags" :suggestions="[]" />
    <div v-if="post && post.content" class="flex-grow w-full mt-2 overflow-y-scroll">
      <Tiptap @update="docUpdated" :content="post?.content" />
    </div>
    <div class="flex justify-between pt-2 bg-blue-600 border-t">
      <NuxtLink to="/admin">Cancel</NuxtLink>
      <div class="flex space-x-6">
        <button>Save draft</button>
        <button @click.prevent="saveDoc('published')"
          class="inline-flex px-4 py-1 font-bold tracking-wide text-teal-800 transition bg-teal-500 border-2 border-teal-500 rounded cursor-pointer hover:bg-white hover:text-teal-500 ">
          <span class="ml-3" :class="[
            publishBtnText == 'Publishing...' ? 'pointer-events-none' : '',
          ]">{{ publishBtnText }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
const route = useRoute()
const postTitle = ref()
const postTags = ref([]);
const editorPost = ref({});
const publishBtnText = ref("Publish");
const draftBtnText = ref("Save Draft");

const userCookie = useCookie("userCookie");

const myTextarea = ref()

const { data: post, pending, error } = await useAsyncData(
  'post',
  () => $fetch('/api/post?slug=' + route.params.slug)
)

const updateTextarea = () => {
  myTextarea.value.style.height = `${myTextarea.value.scrollHeight * 4}px`
  console.log(myTextarea.value.scrollHeight)
}

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
      published_at: Date.now(),
    };

    console.log(data);
    let res = await addDocToFirestore("posts", data);
    console.log(res);

    // if (res.type == "document") {
    //   toast.success(data.title + " was saved!");
    // } else {
    //   toast.error("Post failed to save! - " + res);
    // }
    publishBtnText.value = "Publish";
    draftBtnText.value = "Save draft";
  }
};

const addTags = (tags: never[]) => {
  postTags.value = tags || [];
  // console.log("tags", tags);
};
</script>

<style>
#myTextarea {
  overflow: hidden;
}
</style>