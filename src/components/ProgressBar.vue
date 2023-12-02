<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'
import { useWeapons } from '@/composeables/weapon'

const route = useRoute()
const showBar = computed(() => route.path === '/tracker')
const weaponProgressStore = useWeaponProgressStore()
const { totalCamouflages } = useWeapons()

const totalAchivedCamos = computed(() => {
  return weaponProgressStore.getSumOfAllAchivedCamouflages()
})

const currentProgress = computed(() => {
  return (totalAchivedCamos.value / totalCamouflages.value) * 100
})
</script>

<template>
  <div
    v-if="showBar"
    class="fixed inset-x-0 bottom-0 text-base-content text-center h-12 bg-base-100 border-t border-neutral z-10"
  >
    <div
      :style="{ width: currentProgress + '%' }"
      class="h-12 relative overflow-hidden bg-gradient-to-r from-[color-mix(in_oklab,oklch(var(--s)),black_20%)] to-secondary transition-all duration-500 ease-in-out"
    >
      <div class="h-full wave-animation"></div>
    </div>

    <div class="absolute inset-0 flex items-center justify-center">
      <span class="text-sm font-medium">{{ totalAchivedCamos }} of {{ totalCamouflages }}</span>
    </div>
  </div>
</template>

<style>
.wave-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
  animation: wave 3s linear infinite;
}

@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
