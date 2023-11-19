<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <div class="px-2 bg-base-300 text-base-content">
    <NavigationBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
