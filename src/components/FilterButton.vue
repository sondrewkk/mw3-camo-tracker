<script setup lang="ts">
const emit = defineEmits<{
  (e: 'clicked'): void
}>()
</script>

<template>
  <button class="btn bg-base-100 border-neutral" @click="emit('clicked')">
    <slot></slot>
  </button>
</template>
