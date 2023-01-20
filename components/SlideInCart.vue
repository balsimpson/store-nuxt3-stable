<template>
  <aside
    @keypress.escape="emit('close')"
    class="fixed inset-y-0 top-0 right-0 z-30 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white"
    :class="isShowing ? 'translate-x-0' : 'translate-x-full'">
    <div class="w-screen h-full max-w-md pointer-events-auto">
      <div class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
        <div class="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
          <div class="flex items-start justify-between">
            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
            <div class="flex items-center ml-3 h-7">
              <button @click.prevent="emit('close')" type="button"
                class="p-2 -m-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Close panel</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div class="mt-8">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                <li class="flex py-6">
                  <div class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      class="object-cover object-center w-full h-full">
                  </div>

                  <div class="flex flex-col flex-1 ml-4">
                    <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">Throwback Hip Bag</a>
                        </h3>
                        <p class="ml-4">$90.00</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                    <div class="flex items-end justify-between flex-1 text-sm">
                      <p class="text-gray-500">Qty 1</p>

                      <div class="flex">
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="flex py-6">
                  <div class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                      alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                      class="object-cover object-center w-full h-full">
                  </div>

                  <div class="flex flex-col flex-1 ml-4">
                    <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">Medium Stuff Satchel</a>
                        </h3>
                        <p class="ml-4">$32.00</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">Blue</p>
                    </div>
                    <div class="flex items-end justify-between flex-1 text-sm">
                      <p class="text-gray-500">Qty 1</p>

                      <div class="flex">
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                      </div>
                    </div>
                  </div>
                </li>

                <!-- More products... -->
              </ul>
            </div>
          </div>
        </div>

        <div class="px-4 py-6 border-t border-gray-200 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div class="mt-6">
            <a href="#"
              class="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Checkout</a>
          </div>
          <div class="flex justify-center mt-6 text-sm text-center text-gray-500">
            <p>
              or
              <button @click.prevent="emit('close')" type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps(["isShowing"])
const emit = defineEmits(["close"])
</script>