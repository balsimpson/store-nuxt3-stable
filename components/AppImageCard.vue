<template>
  <a class="relative block group" :href="'/post/'+item.slug">
    <pre>{{ item.slug }}</pre>
					<div
						class="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
						<img class="absolute top-0 left-0 object-cover w-full h-full"
							:src="item.image"
							:alt="item.title">
					</div>

					<div class="absolute inset-x-0 top-0 z-10">
						<div class="flex flex-col h-full p-4 sm:p-6">
							<!-- Avatar -->
							<div class="flex items-center">
								<div class="flex-shrink-0">
									<img class="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
										src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
										alt="Image Description">
								</div>
								<div class="ml-2.5 sm:ml-4">
									<h4 class="font-semibold text-white">
										Gloria
									</h4>
									<p class="text-xs text-white/[.8]">
										Jan 09, 2021
									</p>
								</div>
							</div>
							<!-- End Avatar -->
						</div>
					</div>

					<div class="absolute inset-x-0 bottom-0 z-10">
						<div class="flex flex-col h-full p-4 sm:p-6">
							<h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
								{{item.title}}
							</h3>
							<p class="mt-2 text-white/[.8]">
								{{item.description}}
							</p>
						</div>
					</div>
				</a>
</template>

<script setup>
const props = defineProps(["item"])
</script>