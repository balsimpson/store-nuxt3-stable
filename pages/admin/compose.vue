<template>
  <div class="flex flex-col h-screen max-w-2xl p-2 mx-auto sm:p-4">
    <input class="w-full h-auto p-2 py-4 text-2xl font-bold bg-transparent sm:px-4 sm:text-4xl focus:outline-none"
      placeholder="Your post title..." autofocus type="text" v-model="postTitle" />
    <!-- <textarea class="w-full h-auto p-2 text-2xl font-bold bg-transparent sm:px-4 sm:text-4xl focus:outline-none "
      placeholder="Your post title..." autofocus v-model="postTitle"></textarea> -->
      <TagInput :suggestions="[]" />
    <div class="flex-grow mt-2 overflow-y-scroll">
      <Tiptap @update="docUpdated" />
    </div>
    <div class="flex justify-between pt-2 border-t">
      <NuxtLink to="/admin">Cancel</NuxtLink>
      <div class="flex space-x-6">
        <button>Save draft</button>
        <button
          @click.prevent="saveDoc('published')"
          class="inline-flex px-4 py-1 font-bold tracking-wide text-teal-800 transition bg-teal-500 border-2 border-teal-500 rounded cursor-pointer hover:bg-white hover:text-teal-500 ">
          <span
            class="ml-3"
            :class="[
              publishBtnText == 'Publishing...' ? 'pointer-events-none' : '',
            ]"
            >{{ publishBtnText }}</span
          >
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

const postTitle = ref()
const editorPost = ref({});
const publishBtnText = ref("Publish");
const draftBtnText = ref("Save Draft");

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
      description,
      image,
      slug,
      status,
      content: editorPost.value,
      tags: [],
      published_at: Date.now(),
    };

    // console.log(data);
    // let res = await addDocToFirestore("posts", data);
    console.log(data);

    // if (res.type == "document") {
    //   toast.success(data.title + " was saved!");
    // } else {
    //   toast.error("Post failed to save! - " + res);
    // }
    publishBtnText.value = "Publish";
    draftBtnText.value = "Save draft";
  }
};
</script>