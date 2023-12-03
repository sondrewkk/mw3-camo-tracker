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
  <h1 class="text-3xl font-bold">Easy to use</h1>
  <p class="mt-2 mb-8">
    This tracker is created to help keeping track of your camouflage grinding. If you dont remeber
    the next camouflage challenge for your weapon, this tool will be helpfull!
  </p>
  <div class="flex flex-row gap-10 flex-wrap mx-auto justify-evenly">
    <UsageCard
      title="Local progress"
      description="The tracker will save your progress automatically and store it in your browser."
      :class="cardLayout"
    >
      <template v-slot:icon>
        <BookmarkSquareIcon class="w-10 h-10 text-primary" />
      </template>
    </UsageCard>

    <UsageCard
      title="Mobile friendly"
      description="Use the tracker on any device. It will adapt to your screen size."
      :class="cardLayout"
    >
      <template v-slot:icon>
        <DevicePhoneMobileIcon class="w-10 h-10 text-primary" />
      </template>
    </UsageCard>

    <UsageCard
      title="Custom filters"
      description="Filter your weapons by name, category, completion and more."
      :class="cardLayout"
    >
      <template v-slot:icon>
        <AdjustmentsHorizontalIcon class="w-10 h-10 text-primary" />
      </template>
    </UsageCard>

    <UsageCard
        title="Gamers"
        description="By gamers for gamers. What you need, nothing more."
        :class="cardLayout"
    >
        <template v-slot:icon>
            <GlobeAltIcon class="w-10 h-10 text-primary" />
        </template>
    </UsageCard>

  </div>
</template>
