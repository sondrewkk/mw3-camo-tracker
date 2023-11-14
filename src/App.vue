<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

</script>

<template>
  <div>
    <NavigationBar />
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>
