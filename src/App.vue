<template>
  <div class="flex h-screen items-center justify-center">
    <div
      class="rounded-lg border bg-indigo-800 px-3 py-2 text-xl font-bold text-white shadow-lg"
    >
      {{ greeting }}
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const greeting = ref('Hello');
</script>
