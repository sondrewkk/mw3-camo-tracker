<script setup lang="ts">
import UsageCard from '@/components/about/UsageCard.vue'
import {
  BookmarkSquareIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'


const cardLayout = 'basis-80 flex-initial'


</script>

<template>
    <h1 class="text-3xl font-bold">Effortless Tracking</h1>
    <p class="mt-2 mb-8">
      Designed for seamless integration into your gaming routine, our tracker simplifies your camouflage progression. Forget the hassle of remembering your next challenge; we've got you covered.
    </p>
    <div class="flex flex-row gap-10 flex-wrap mx-auto justify-evenly">
      
      <UsageCard
        title="Automated Local Storage"
        description="Your progression is automatically saved and seamlessly stored locally, ensuring your data is always at your fingertips."
        :class="cardLayout"
      >
        <template v-slot:icon>
          <BookmarkSquareIcon class="w-10 h-10 text-primary" />
        </template>
      </UsageCard>
  
      <UsageCard
        title="Cross-Platform Accessibility"
        description="Enjoy a consistent experience across all devices. Our responsive design adapts to any screen for optimal viewing and interaction."
        :class="cardLayout"
      >
        <template v-slot:icon>
          <DevicePhoneMobileIcon class="w-10 h-10 text-primary" />
        </template>
      </UsageCard>
  
      <UsageCard
        title="Advanced Custom Filters"
        description="Easily sift through your arsenal with robust filtering options. Sort by name, category, completion status, and more for streamlined tracking."
        :class="cardLayout"
      >
        <template v-slot:icon>
          <AdjustmentsHorizontalIcon class="w-10 h-10 text-primary" />
        </template>
      </UsageCard>
  
      <UsageCard
          title="Gamer-Centric Design"
          description="Crafted by gamers, for gamers. Experience a tool that understands your needs and simplifies your gaming achievements."
          :class="cardLayout"
      >
          <template v-slot:icon>
              <GlobeAltIcon class="w-10 h-10 text-primary" />
          </template>
      </UsageCard>
  
    </div>
  </template>