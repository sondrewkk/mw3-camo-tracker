<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="card bg-base-100 border border-neutral">
    <div class="card-body">
      <slot name="icon"></slot>
      <h2 class="card-title">{{ props.title }}</h2>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>
