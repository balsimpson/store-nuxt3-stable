<template>
	<div>
		<PageHead :page="{title: 'some title', description: 'some description'} "/>
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

			<!-- Grid -->
			<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Card -->
				<a class="overflow-hidden group rounded-xl" href="#">
					<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
						<img
							class="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl"
							src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
							alt="Image Description">
						<span
							class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
							Sponsored
						</span>
					</div>

					<div class="mt-7">
						<h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
							Studio by Preline
						</h3>
						<p class="mt-3 text-gray-800 ">
							Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
						</p>
						<p
							class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
							Read more
							<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" />
							</svg>
						</p>
					</div>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="overflow-hidden group rounded-xl" href="#">
					<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
						<img
							class="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl"
							src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							alt="Image Description">
					</div>

					<div class="mt-7">
						<h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
							Onsite
						</h3>
						<p class="mt-3 text-gray-800 ">
							Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
						</p>
						<p
							class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
							Read more
							<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" />
							</svg>
						</p>
					</div>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')]"
					href="#">
					<div class="flex-auto p-4 md:p-6">
						<h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">Preline</span> Press
							publishes books about economic and technological advancement.</h3>
					</div>
					<div class="p-4 pt-0 md:p-6">
						<div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
							Visit the site
							<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" />
							</svg>
						</div>
					</div>
				</a>
				<!-- End Card -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End Card Blog -->


		<!-- Card Blog -->
		<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Grid -->
			<div class="grid lg:grid-cols-2 gap-y-12 gap-x-6">
				<!-- Card -->
				<a class="relative block group" href="#">
					<div
						class="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
						<img class="absolute top-0 left-0 object-cover w-full h-full"
							src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
							alt="Image Description">
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
								Facebook is creating a news section in Watch to feature breaking news
							</h3>
							<p class="mt-2 text-white/[.8]">
								Facebook launched the Watch platform in August
							</p>
						</div>
					</div>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="relative block group" href="#">
					<div
						class="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
						<img class="absolute top-0 left-0 object-cover w-full h-full"
							src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
							alt="Image Description">
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
										May 30, 2021
									</p>
								</div>
							</div>
							<!-- End Avatar -->
						</div>
					</div>

					<div class="absolute inset-x-0 bottom-0 z-10">
						<div class="flex flex-col h-full p-4 sm:p-6">
							<h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
								What CFR (Conversations, Feedback, Recognition) really is about
							</h3>
							<p class="mt-2 text-white/[.8]">
								For a lot of people these days, Measure What Matters.
							</p>
						</div>
					</div>
				</a>
				<!-- End Card -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End Card Blog -->


		<!-- Card Blog -->
		<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Title -->
			<div class="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
				<h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Customer stories</h2>
				<p class="mt-1 text-gray-600 ">See how game-changing companies are making the most of every
					engagement with Preline.</p>
			</div>
			<!-- End Title -->

			<!-- Grid -->
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Card -->
				<a class="p-5 transition-all group hover:bg-gray-100 rounded-xl " href="#">
					<div class="aspect-w-16 aspect-h-10">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
							alt="Image Description">
					</div>
					<h3 class="mt-5 text-xl text-gray-800 ">
						Unity’s inside sales team drives 80% of its revenue with Preline.
					</h3>
					<p class="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-2 ">
						Learn more
						<svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16"
							viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
								fill="currentColor" />
						</svg>
					</p>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="p-5 transition-all group hover:bg-gray-100 rounded-xl " href="#">
					<div class="aspect-w-16 aspect-h-10">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
							alt="Image Description">
					</div>
					<h3 class="mt-5 text-xl text-gray-800 ">
						Living Spaces creates a unified experience across the customer journey.
					</h3>
					<p class="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-2 ">
						Learn more
						<svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16"
							viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
								fill="currentColor" />
						</svg>
					</p>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="p-5 transition-all group hover:bg-gray-100 rounded-xl " href="#">
					<div class="aspect-w-16 aspect-h-10">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							alt="Image Description">
					</div>
					<h3 class="mt-5 text-xl text-gray-800 ">
						Atlassian powers sales and support at scale with Preline.
					</h3>
					<p class="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-2 ">
						Learn more
						<svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16"
							viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
								fill="currentColor" />
						</svg>
					</p>
				</a>
				<!-- End Card -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End Card Blog -->


		<!-- Card Blog -->
		<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Title -->
			<div class="max-w-2xl mb-10">
				<h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Customer stories</h2>
				<p class="mt-1 text-gray-600 ">See how game-changing companies are making the most of every
					engagement with Preline.</p>
			</div>
			<!-- End Title -->

			<!-- Grid -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<!-- Card -->
				<a class="block group" href="#">
					<div class="aspect-w-16 aspect-h-9">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
							alt="Image Description">
					</div>
					<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 ">
						Unity’s inside sales team drives 80% of its revenue with Preline.
					</h3>
					<p class="mt-2 text-sm text-gray-600 ">
						September 12, 2022
					</p>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="block group" href="#">
					<div class="aspect-w-16 aspect-h-9">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
							alt="Image Description">
					</div>
					<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 ">
						Living Spaces creates a unified experience across the customer journey.
					</h3>
					<p class="mt-2 text-sm text-gray-600 ">
						September 12, 2022
					</p>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="block group" href="#">
					<div class="aspect-w-16 aspect-h-9">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
							alt="Image Description">
					</div>
					<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 ">
						Atlassian powers sales and support at scale with Preline.
					</h3>
					<p class="mt-2 text-sm text-gray-600 ">
						September 12, 2022
					</p>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="block group" href="#">
					<div class="aspect-w-16 aspect-h-9">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
							alt="Image Description">
					</div>
					<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 ">
						Everything you need to know about Preline Pro.
					</h3>
					<p class="mt-2 text-sm text-gray-600 ">
						September 12, 2022
					</p>
				</a>
				<!-- End Card -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End Card Blog -->


		<!-- Card Blog -->
		<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Title -->
			<div class="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
				<h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">The Blog</h2>
				<p class="mt-1 text-gray-600 ">See how game-changing companies are making the most of every
					engagement with Preline.</p>
			</div>
			<!-- End Title -->

			<!-- Grid -->
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Card -->
				<a class="flex flex-col h-full p-5 transition-all duration-300 border border-gray-200 group hover:border-transparent hover:shadow-lg rounded-xl"
					href="#">
					<div class="aspect-w-16 aspect-h-11">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							alt="Image Description">
					</div>
					<div class="my-6">
						<h3 class="text-xl font-semibold text-gray-800 ">
							Announcing a free plan for small teams
						</h3>
						<p class="mt-5 text-gray-600 ">
							At Wake, our mission has always been focused on bringing openness.
						</p>
					</div>
					<div class="flex items-center mt-auto gap-x-3">
						<img class="w-8 h-8 rounded-full"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
							alt="Image Description">
						<div>
							<h5 class="text-sm text-gray-800 ">By Lauren Waller</h5>
						</div>
					</div>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="flex flex-col h-full p-5 transition-all duration-300 border border-gray-200 group hover:border-transparent hover:shadow-lg rounded-xl "
					href="#">
					<div class="aspect-w-16 aspect-h-11">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
							alt="Image Description">
					</div>
					<div class="my-6">
						<h3 class="text-xl font-semibold text-gray-800 ">
							How Google Assistant now helps you record stories for kids
						</h3>
						<p class="mt-5 text-gray-600 ">
							Google is constantly updating its consumer AI, Google Assistant, with new features.
						</p>
					</div>
					<div class="flex items-center mt-auto gap-x-3">
						<img class="w-8 h-8 rounded-full"
							src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
							alt="Image Description">
						<div>
							<h5 class="text-sm text-gray-800">By Aaron Larsson</h5>
						</div>
					</div>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="flex flex-col h-full p-5 transition-all duration-300 border border-gray-200 group hover:border-transparent hover:shadow-lg rounded-xl"
					href="#">
					<div class="aspect-w-16 aspect-h-11">
						<img class="object-cover w-full rounded-xl"
							src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
							alt="Image Description">
					</div>
					<div class="my-6">
						<h3 class="text-xl font-semibold text-gray-800 ">
							Front accounts - let's work together
						</h3>
						<p class="mt-5 text-gray-600 ">
							Are you an accountant? Are you a company formation advisor?
						</p>
					</div>
					<div class="flex items-center mt-auto gap-x-3">
						<img class="w-8 h-8 rounded-full"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
							alt="Image Description">
						<div>
							<h5 class="text-sm text-gray-800 ">By Lauren Waller</h5>
						</div>
					</div>
				</a>
				<!-- End Card -->
			</div>
			<!-- End Grid -->

			<!-- Card -->
			<div class="mt-12 text-center">
				<a class="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-blue-600 transition bg-white border rounded-full gap-x-2 hover:border-gray-300 hover:text-blue-700 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
					href="#">
					Read more
					<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</a>
			</div>
			<!-- End Card -->
		</div>
		<!-- End Card Blog -->
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