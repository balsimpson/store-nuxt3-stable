<template>
  <div class="py-6">
    <PageHead :page="post" />
    
    <div v-if="post" class="flex flex-col h-full max-w-2xl mx-auto">
      
      <div class="text-4xl font-bold font-arvo">{{ post.title }}</div>
      <div class="flex py-6 text-xs font-bold text-gray-600">
        <div class="text-xs font-bold text-gray-600">
          <time datetime="2023-01-06T11:00:00.000Z" itemprop="datePublished" class="text-xs font-bold text-gray-600">06
            January 2023, 4:30pm</time>
        </div>
        <span class="flex items-center">
          <ul class="flex items-center">
            <li class="mr-2">
              <button aria-label="facebook"
                class="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                <svg id="facebook_share" class="" data-testid="social-icon-Facebook" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                  <!-- svg content removed for brevity -->
                </svg>
                <span class="ml-2">Share</span>
              </button>
            </li>
            <li>
              <button aria-label="twitter"
                class="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                <svg id="twitter_share" class="" data-testid="social-icon-Twitter" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="14" viewBox="0 0 18 14">
                  <!-- svg content removed for brevity -->
                </svg>
                <span class="ml-2">Tweet</span>
              </button>
            </li>
          </ul>
        </span>
      </div>
      <article v-html="postHtml" class="flex-grow w-full prose border-t font-lato">
      </article>

      <!-- <AppFooter /> -->
    </div>
  </div>
</template>

<script setup>

import { IconSave, IconPencil, IconBxPencil } from "@iconify-prerendered/vue-bx";
import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import { serverTimestamp } from "firebase/firestore";

definePageMeta({
  layout: "default",
  // middleware: ["auth"],
});

const route = useRoute();
// const post = ref(null);
const postHtml = ref();
const postTags = ref([]);

// const { data: post, pending, error, refresh } = await useAsyncData(
//   'post',
//   () => $fetch('/api/post?slug=' + route.params.slug)
// )

const { data: post } = await useFetch(`/api/post/?slug=${route.params.slug}`, { initialCache: false })


const isEditingPost = ref(false);
const { data: tagsuggestions } = await useAsyncData("tags", () =>
  queryContent("/tags").findOne()
);
useHead({
  title: () => post.value?.title,
  meta: [
    {
      name: "description",
      content: () => post.value?.description,
    },
    {
      property: "og:title",
      content: () => post.value?.title,
    },
    {
      property: "og:description",
      content: () => post.value?.description,
    },
    {
      property: "og:image",
      content: () => post.value?.image,
    },
    {
      property: "og:url",
      content: "https://pullonath.in/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: () => post.value?.title,
    },
    {
      name: "twitter:description",
      content: () => post.value?.description,
    },
    {
      name: "twitter:image",
      content: () => post.value?.image,
    },
  ],
});

const user = ref("");
const userCookie = useCookie("userCookie");

const editorPost = ref({});

const redirectToTag = (tag) => {
  navigateTo("/tag/" + tag)
}

const docUpdated = (doc) => {
  editorPost.value = doc;
};

const editPost = () => {
  isEditingPost.value = true;
}

const addTags = (tags) => {
  postTags.value = tags;
  // console.log("tags", tags);
};

const publishChanges = async () => {

  // console.log(post.value)

  const { title, description, image } = getPostDetails(editorPost.value);

  const slug = createSlug(title);

  const data = {
    author: {
      name: userCookie.value.providerData[0].displayName,
      email: userCookie.value.providerData[0].email,
      photo: userCookie.value.providerData[0].photoURL,
      uid: userCookie.value.uid,
    },
    title,
    description,
    image,
    slug,
    content: editorPost.value,
    tags: postTags.value,
    updated_at: serverTimestamp(),
  };

  // update record in posts with new content
  let res = await updateDocInFirestore("posts", post.value.id, data)

  let pubDate = post.value.published_at;
  post.value = data;
  post.value.published_at = pubDate;

  postHtml.value = generateHTML(post.value.content, [
    StarterKit,
    Image,
    Youtube,
    Link,
  ]);

  isEditingPost.value = !isEditingPost.value
}


// watchEffect(() => {
//   console.log(route.params.slug)
//   refresh()


// })

onMounted(async () => {
  // refresh()
  // user.value = userCookie.value;
  // console.log(userCookie.value)
  // post.value = await getDocFromFirestoreWithSlug("posts", route.params.slug);

  if (post.value) {
    editorPost.value = post.value.content;
    postTags.value = post.value.tags;

    postHtml.value = generateHTML(post.value.content, [
      StarterKit,
      Image,
      Youtube,
      Link,
    ]);
  } else {
    console.log("else")
  }
});
</script>

<style>
article img {
  border-radius: .25em;
}

article iframe {
  width: 100%;
}
</style>