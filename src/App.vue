<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <div class="w-full bg-base-300 text-base-content min-h-screen">
    <div class="container mx-auto max-w-8xl">
      <NavigationBar />
      <div class="px-4 py-4">
        <main>
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
