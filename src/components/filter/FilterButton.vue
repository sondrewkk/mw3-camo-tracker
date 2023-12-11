<script setup lang="ts">
const emit = defineEmits<{
  (e: 'clicked'): void
}>()
</script>

<template>
  <button class="btn btn-active bg-base-100 border border-neutral/75" @click="emit('clicked')">
    <slot></slot>
  </button>
</template>
