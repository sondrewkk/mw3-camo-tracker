<script setup lang="ts">
defineProps<{
  to: string
}>()

defineEmits(['click'])
</script>

<template>
  <router-link
    :to="to"
    class="font-bold text-xl hover:underline decoration-2 underline-offset-2"
    active-class="text-gray-200"
    @click="$emit('click')"
  >
    <slot></slot>
  </router-link>
</template>
