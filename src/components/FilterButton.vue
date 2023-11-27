<script setup lang="ts">
const emit = defineEmits<{
  (e: 'clicked'): void
}>()
</script>

<template>
  <button class="btn btn-lg bg-base-100 border-neutral" @click="emit('clicked')">
    <slot></slot>
  </button>
</template>

<!-- <div class="flex flex-col space-y-4">
    <button
      class="btn btn-lg bg-base-100 border-2 border-base-100 hover:border-gray-500 hover:bg-base-200"
      @click="toggleShowFilterMenu"
    >
      {{ showFilterMenu ? 'Hide' : 'Show' }} Filters
    </button> -->
