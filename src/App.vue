<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/navigation/NavigationBar.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: "MW3 Camo Tracker - Interstellar",
  meta: [
    {
      name: "description",
      content: "Manually track your cammofluage progress in Call of Duty: Modern Warfare 3.",
    },
    {
      name: "keywords",
      content: "MW3, Cammo Tracker, Call of Duty, Modern Warfare 3, Cammofluage Progress",
    },
    {
      name: "author",
      content: "Sondre William Kaldhussæter-Knutsen",
    },
  ]
})

</script>

<template>
  <div class="w-full bg-base-300 text-base-content min-h-screen">
    <div class="container mx-auto max-w-8xl">
      <NavigationBar />
      <div class="px-4">
        <main>
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
