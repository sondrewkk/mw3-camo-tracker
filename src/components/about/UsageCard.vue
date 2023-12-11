<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="card bg-base-100 border border-neutral">
    <div class="card-body items-center text-center">
      <slot name="icon"></slot>
      <h2 class="card-title text-2xl">{{ props.title }}</h2>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>
