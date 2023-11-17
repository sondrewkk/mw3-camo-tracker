<script setup lang="ts">
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import ProgressCard from '@/components/ProgressCard.vue'
import type { WeaponCategory } from '@/composeables/weapon'

const weaponsProgresStore = useWeaponProgressStore()
const { weaponProgress } = storeToRefs(weaponsProgresStore)

const showList = ref(false)

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
  <button class="btn" @click="showList = !showList">List: {{ showList }}</button>
  <div class="flex flex-col px-2">
    <ul v-for="(weapons, category) in groupedProgress" :key="category">
      <h2 class="text-3xl font-bold py-8">{{ category }}s</h2>
      <div class="flex flex-col space-y-8">
        <ul v-for="weapon in weapons" :key="weapon.weaponName">
          <ProgressCard :weapon-progress="weapon" :display-list="showList" />
        </ul>
      </div>
    </ul>
  </div>
</template>
