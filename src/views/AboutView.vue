<script setup lang="ts">
import UsageList from '@/components/about/UsageList.vue'

const headerStyle =
  'text-4xl p-6 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary'
</script>

<template>
  <div class="flex flex-wrap lg:gap-x-20 pb-20 text-center justify-center">
    <div class="mt-16 md:basis-3/4 lg:basis-full">
      <h1 :class="headerStyle">Effortless Tracking</h1>
      <p class="mt-8 md:mt-12 md:text-xl max-w-3xl mx-auto">
        Designed for seamless integration into your gaming routine, our tracker simplifies your
        camouflage progression. Forget the hassle of remembering your next challenge; we've got you
        covered.
      </p>
      <UsageList />
    </div>
    <div class="mt-16 lg:basis-1/2">
      <h1 :class="headerStyle">Technology</h1>
      <p class="mt-8 md:text-xl">
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
      <h1 :class="headerStyle">Inspired</h1>
      <p class="mt-8 md:text-xl">
        The tracker is heavily inspired by Emil Carlsson's Orion tracker. I want to give a thank you
        for the inspiration to learn something new when I created this camouflage tracker.
      </p>
    </div>
  </div>
</template>
