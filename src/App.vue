<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="py-2 px-3 text-xl font-bold text-white bg-indigo-800 rounded-lg border shadow-lg"
    >
      {{ greeting }}
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const greeting = ref('Hello');
</script>
