<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

</script>

<template>
  <div id="app">
    <NavigationBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
