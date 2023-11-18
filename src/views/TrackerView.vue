<script setup lang="ts">
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'
import { useTrackerFilterStore } from '@/stores/trackerFilterStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import ProgressCard from '@/components/ProgressCard.vue'
import TrackerFilter from '@/components/TrackerFilter.vue'
import type { WeaponCategory } from '@/composeables/weapon'

const weaponsProgresStore = useWeaponProgressStore()
const { weaponProgress } = storeToRefs(weaponsProgresStore)

const trackerFilterStore = useTrackerFilterStore()
const { displayList } = storeToRefs(trackerFilterStore)

const groupedProgress = computed(() => {
  return weaponProgress.value.reduce(
    (grouped, weapon) => {
      const key = weapon.weaponCategory
      if (!grouped[key]) {
        grouped[key] = []
      }
      grouped[key].push(weapon)
      return grouped
    },
    {} as Record<WeaponCategory, typeof weaponProgress.value>
  )
})
</script>

<template>
  <div>
    <TrackerFilter />

    <div class="flex flex-col px-2 pt-8">
      <ul v-for="(weapons, category) in groupedProgress" :key="category">
        <h2 class="text-3xl font-bold py-8">{{ category }}s</h2>
        <div class="flex flex-col space-y-8">
          <ul v-for="weapon in weapons" :key="weapon.weaponName">
            <ProgressCard :weapon-progress="weapon" :display-list="displayList" />
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>
