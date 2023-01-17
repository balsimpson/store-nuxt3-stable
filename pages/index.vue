<template>
	<div>
		<PageHead :page="post" />
		<AppImageCard :item="posts[0]" />
		<!-- Grid -->
		<div v-if="posts" class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Card -->
			<AppCardImg v-for="post in posts" :item="post" />
			<!-- End Card -->
		</div>
		<!-- Card Blog -->
		<div class="max-w-[85rem] py-10 lg:py-14 mx-auto">

			<div v-if="posts && posts.length" class="h-full my-3 space-y-3 overflow-y-scroll scroller snap-mandatory snap-y">

				<div v-for="post in posts" class="border rounded snap-start">

					<div class="p-4">
						<NuxtLink :to="`/post/${post.slug}`" class="">
							<h3 class="text-base font-semibold text-gray-800 sm:text-lg">
								{{ post.title }}
							</h3>
						</NuxtLink>

						<p class="mt-2 text-sm text-gray-600">
							{{ post.description }}
						</p>
					</div>

					<div class="flex items-center justify-between px-4 py-2 border-t">
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
							{{ getRelativeTime(post.published_at) }}
						</p>

					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script setup>
import { useToast } from 'vue-toastification/dist/index.mjs'
const toast = useToast();

const { data: posts, pending, error } = await useAsyncData(
	'posts',
	() => $fetch('/api/post')
)

const showToast = (msg) => {
	toast(msg, {
		timeout: 50000,
		toastClassName: "bg-purple-600",
		bodyClassName: ["font-semibold"]
	});
}
</script>