<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="w-full lg:max-w-lg md:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg mx-auto">
            <div
              class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob "
            ></div>

            <div
              class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 "
            ></div>
            <div class="relative">
              <img
                class="hidden object-cover object-center md:block"
                alt="hero"
                src="/hero.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 "
      >
        <span
          class="mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase"
        >
          The best art, handcrafted just for you.
        </span>
        <h1
          class="mb-8 text-4xl font-bold leading-none tracking-tighter capitalize text-neutral-600 md:text-7xl lg:text-5xl "
        >
          Find Unique handcrafted art
        </h1>
        <p class="mb-4 text-base leading-relaxed text-left text-gray-500">
          If you're looking for one-of-a-kind, handcrafted art, you've come to
          the right place. Find a selection of art that has been carefully
          curated - From paintings to stoneware.
        </p>
      </div>
    </div>
  </div>
</template>