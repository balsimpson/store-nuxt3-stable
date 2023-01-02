<template>
  <div class="flex flex-col h-screen">
    <!-- table -->
    <div class="flex flex-col h-full max-w-2xl p-2 mx-auto mt-6">
      <div class="-m-1.5 overflow-x-auto h-full">
        <div class="p-1.5 min-w-full inline-block align-middle h-full">
          <div class="flex flex-col h-full border divide-y divide-gray-200 rounded-lg">
            <div class="flex items-center justify-between px-4 py-3">
              <div class="relative max-w-xs">
                <label for="hs-table-with-pagination-search" class="sr-only">Search</label>
                <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search"
                  class="block w-full p-3 pl-10 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Search for items">
                <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg class="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
              <NuxtLink to="/admin/compose">Add Post</NuxtLink>
            </div>

            <div class="flex-grow overflow-y-scroll">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-4 py-3 pr-0">
                      <div class="flex items-center h-5">
                        <input id="hs-table-pagination-checkbox-all" type="checkbox"
                          class="text-blue-600 border-gray-200 rounded focus:ring-blue-500">
                        <label for="hs-table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Name</th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Age</th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase">Address</th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium text-right text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="py-3 pl-4">
                      <div class="flex items-center h-5">
                        <input id="hs-table-pagination-checkbox-1" type="checkbox"
                          class="text-blue-600 border-gray-200 rounded focus:ring-blue-500 ">
                        <label for="hs-table-pagination-checkbox-1" class="sr-only">Checkbox</label>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">John
                      Brown</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">45</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">New York No. 1 Lake
                      Park</td>
                    <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                    </td>
                  </tr>

                  <tr>
                    <td class="py-3 pl-4">
                      <div class="flex items-center h-5">
                        <input id="hs-table-pagination-checkbox-2" type="checkbox"
                          class="text-blue-600 border-gray-200 rounded focus:ring-blue-500">
                        <label for="hs-table-pagination-checkbox-2" class="sr-only">Checkbox</label>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">Jim
                      Green</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">27</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">London No. 1 Lake
                      Park</td>
                    <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                    </td>
                  </tr>

                  <tr>
                    <td class="py-3 pl-4">
                      <div class="flex items-center h-5">
                        <input id="hs-table-pagination-checkbox-3" type="checkbox"
                          class="text-blue-600 border-gray-200 rounded focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                        <label for="hs-table-pagination-checkbox-3" class="sr-only">Checkbox</label>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">Joe
                      Black</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">31</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Sidney No. 1 Lake
                      Park</td>
                    <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                    </td>
                  </tr>

                  <tr>
                    <td class="py-3 pl-4">
                      <div class="flex items-center h-5">
                        <input id="hs-table-pagination-checkbox-4" type="checkbox"
                          class="text-blue-600 border-gray-200 rounded focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                        <label for="hs-table-pagination-checkbox-4" class="sr-only">Checkbox</label>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">Edward
                      King</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">16</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">LA No. 1 Lake Park
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                    </td>
                  </tr>

                  <tr>
                    <td class="py-3 pl-4">
                      <div class="flex items-center h-5">
                        <input id="hs-table-pagination-checkbox-5" type="checkbox"
                          class="text-blue-600 border-gray-200 rounded focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                        <label for="hs-table-pagination-checkbox-5" class="sr-only">Checkbox</label>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">Jim Red
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">45</td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Melbourne No. 1
                      Lake Park</td>
                    <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="px-4 py-1">
              <nav class="flex items-center space-x-2">
                <a class="inline-flex items-center gap-2 p-4 font-medium text-gray-400 rounded-md hover:text-blue-600"
                  href="#">
                  <span aria-hidden="true">«</span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="inline-flex items-center w-10 h-10 p-4 text-sm font-medium text-white bg-blue-500 rounded-full"
                  href="#" aria-current="page">1</a>
                <a class="inline-flex items-center w-10 h-10 p-4 text-sm font-medium text-gray-400 rounded-full hover:text-blue-600"
                  href="#">2</a>
                <a class="inline-flex items-center w-10 h-10 p-4 text-sm font-medium text-gray-400 rounded-full hover:text-blue-600"
                  href="#">3</a>
                <a class="inline-flex items-center gap-2 p-4 font-medium text-gray-400 rounded-md hover:text-blue-600"
                  href="#">
                  <span class="sr-only">Next</span>
                  <span aria-hidden="true">»</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>