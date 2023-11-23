<script setup lang="ts">
// import { useWeaponProgressStore } from '@/stores/weaponProgressStore'
import { useTrackerFilterStore } from '@/stores/trackerFilterStore'
import { storeToRefs } from 'pinia'
import ProgressCard from '@/components/ProgressCard.vue'
import TrackerFilter from '@/components/TrackerFilter.vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'

const trackerFilterStore = useTrackerFilterStore()
const { displayList, filteredProgress } = storeToRefs(trackerFilterStore)
</script>

<template>
  <div class="min-h-screen pb-24">
    <TrackerFilter />

    <div role="alert" class="alert alert-warning mt-12">
      <ExclamationTriangleIcon class="h-12 w-12" />
      <span class="text-lg font-semibold"
        >This is not a final product. Changes may be made that require a complete reset of your
        progress.</span
      >
    </div>
    <div class="flex flex-col px-2 mt-12">
      <ul class="pb-20" v-for="(weapons, category) in filteredProgress" :key="category">
        <h2 class="text-3xl font-bold">{{ category }}s</h2>
        <div class="flex flex-col space-y-8 pt-8">
          <ul v-for="weapon in weapons" :key="weapon.weaponName">
            <ProgressCard :weapon-progress="weapon" :display-list="displayList" />
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>
