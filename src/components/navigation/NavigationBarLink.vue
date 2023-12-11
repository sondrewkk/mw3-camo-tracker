<script setup lang="ts">
defineProps<{
  to: string
}>()

defineEmits(['click'])
</script>

<template>
  <router-link
    :to="to"
    class="text-base-content"
    active-class="text-accent"
    @click="$emit('click')"
  >
    <slot></slot>
  </router-link>
</template>
