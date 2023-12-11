<script setup lang="ts">
import UsageList from '@/components/about/UsageList.vue'
</script>

<template>
  <UsageList />
  <div class="flex flex-wrap lg:flex-nowrap lg:gap-x-20">
    <div class="mt-16 lg:basis-1/2">
      <h1 class="text-3xl font-bold">Technology</h1>
      <p class="mt-2">
        This tracker is created with
        <a href="https://vuejs.org/" class="link link-accent">Vue 3</a>,
        <a href="https://vitejs.dev/" class="link link-accent">Vite</a>,
        <a href="https://tailwindcss.com/" class="link link-accent">Tailwind CSS</a> and
        <a href="https://daisyui.com/" class="link link-accent">Daisy UI</a>. The application is
        hosted on
        <a href="https://pages.cloudflare.com/" class="link link-accent">Cloudflare Pages</a>.
        Interested in the source code? Check out the repository on
        <a href="https://github.com/sondrewkk/mw3-camo-tracker" class="link link-accent">Github</a>.
      </p>
    </div>
    <div class="mt-16 lg:basis-1/2">
      <h1 class="text-3xl font-bold">Inspired</h1>
      <p class="mt-2">
        The tracker is heavily inspired by Emil Carlsson´s Orion tracker. I want to give a thank you
        for the inspiration to learn something new and create this tracker.
      </p>
    </div>
  </div>
</template>
