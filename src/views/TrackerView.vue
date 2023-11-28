<script setup lang="ts">
import { useTrackerFilterStore } from '@/stores/trackerFilterStore'
import { storeToRefs } from 'pinia'
import ProgressCard from '@/components/ProgressCard.vue'
import TrackerFilter from '@/components/TrackerFilter.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'

const trackerFilterStore = useTrackerFilterStore()
const { displayList, filteredProgress } = storeToRefs(trackerFilterStore)
const { toggleCamofluageComplete, toggleFavorite } = useWeaponProgressStore()
</script>

<template>
  <div class="min-h-screen pb-12">
    <TrackerFilter />

    <div class="flex flex-col px-2 mt-12">
      <ul class="pb-20" v-for="(weapons, category) in filteredProgress" :key="category">
        <h2 class="text-3xl font-bold">{{ category }}s</h2>
        <div class="flex flex-col space-y-8 pt-8">
          <ul v-for="weapon in weapons" :key="weapon.weaponName">
            <ProgressCard
              :weapon-progress="weapon"
              :display-list="displayList"
              @toggle-favorite="toggleFavorite(weapon.weaponName)"
              @toggle-camofluage-complete="
                (camoName) => toggleCamofluageComplete(weapon.weaponName, camoName)
              "
            />
          </ul>
        </div>
      </ul>
    </div>

    <ProgressBar />
  </div>
</template>
