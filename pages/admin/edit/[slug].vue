<template>
  <div>{{ route }}</div>
</template>

<script setup>
const route = useRoute()
const firebaseItems = useFirebaseItems();

</script>