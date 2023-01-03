<template>
  <div>
    <div>npm install --save vue-toastification@next</div>
    <button @click.prevent="showToast('some message')">show notification</button>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification/dist/index.mjs'
const toast = useToast();
const showToast = (msg) => {
	toast(msg, {
		timeout: 50000,
		toastClassName: "bg-purple-600",
		bodyClassName: ["font-semibold"]
	});
}
</script>