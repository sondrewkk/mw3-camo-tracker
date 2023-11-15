<script setup lang="ts">
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import ProgressCard from '@/components/ProgressCard.vue'
import type { WeaponCategory } from '@/types/Weapon'

const weaponsProgresStore = useWeaponProgressStore()
const { weaponProgress } = storeToRefs(weaponsProgresStore)
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
  <div class="flex flex-col px-6">
    <ul v-for="(weapons, category) in groupedProgress" :key="category">
      <h2 class="text-2xl pt-8 pb-5">{{ category }}s</h2>
      <div class="flex flex-col space-y-8">
        <ul v-for="weapon in weapons" :key="weapon.weaponName">
          <ProgressCard :weapon-progress="weapon" />
        </ul>
      </div>
    </ul>
  </div>
</template>
