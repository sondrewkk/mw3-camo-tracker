<script setup lang="ts">
import { useTrackerFilterStore } from '@/stores/trackerFilterStore'
import { storeToRefs } from 'pinia'
import ProgressCard from '@/components/progress_card/ProgressCard.vue'
import TrackerFilter from '@/components/filter/TrackerFilter.vue'
import ProgressBar from '@/components/progress_bar/ProgressBar.vue'
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'

const trackerFilterStore = useTrackerFilterStore()
const { displayList, filteredProgress } = storeToRefs(trackerFilterStore)
const { toggleCamouflageComplete, toggleFavorite } = useWeaponProgressStore()
</script>

<template>
  <TrackerFilter />

  <div class="flex flex-col space-y-24 mt-16 pb-20">
    <div class="" v-for="(weapons, category) in filteredProgress" :key="category">
      <h2 class="text-3xl md:text-2xl font-bold">{{ category }}s</h2>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8">
        <div v-for="weapon in weapons" :key="weapon.weaponName" class="">
          <ProgressCard
            class=""
            :weapon-progress="weapon"
            :display-list="displayList"
            @toggle-favorite="toggleFavorite(weapon.weaponName)"
            @toggle-camouflage-complete="
              (camoName) => toggleCamouflageComplete(weapon.weaponName, camoName)
            "
          />
        </div>
      </div>
    </div>
  </div>

  <ProgressBar />
</template>
