<script setup lang="ts">
import type { WeaponProgress } from '@/composeables/weaponProgress'
import CamoImg from './CamoImg.vue'
import { useCamo } from '@/composeables/camofluage'
import { HeartIcon } from '@heroicons/vue/24/solid'
import { computed } from 'vue';

const { getCamofluageChallenge } = useCamo()

const props = defineProps<{
  weaponProgress: WeaponProgress
  displayList: boolean
}>()

const bestAchivement = computed(() => {
  const camos = props.weaponProgress.camofluages
  const best = camos.reduce((prev, curr) => {
    if (curr.achived) {
      return curr
    }
    return prev
  }, camos[0])
  return best
})

const emit = defineEmits<{
  (e: 'toggle-favorite'): void
  (e: 'toggle-camofluage-complete', camoName: string): void
}>()
</script>

<template>
  <div class="card card-compact border-2 bg-base-100 border-neutral/75 shadow-xl animate-gold" >
    <div class="card-body">
      <HeartIcon
        class="h-8 w-8 absolute top-2 left-2"
        :class="weaponProgress.isFavorite ? 'fill-secondary' : 'fill-base-300 stroke-base-100'"
        @click="$emit('toggle-favorite')"
      />
      <div class="card-title">
        <h2 class="text-2xl md:text-lg grow text-center">
          {{ weaponProgress.weaponName }}
        </h2>
      </div>
      <div class="flex mt-4 justify-between" :class="{ 'flex-col gap-y-2': displayList }">
        <div v-for="camo in weaponProgress.camofluages" :key="camo.camofluageName">
          <div class="flex gap-4 items-center">
            <CamoImg
              class=""
              :class="{
                'flex-none w-11 md:w-10 lg:w-9 xl:w-11': displayList,
                'h-11 md:h-10 lg:h-9 2xl:h-10': !displayList
              }"
              :progress="camo"
              @clicked="emit('toggle-camofluage-complete', camo.camofluageName)"
            />
            <p v-if="displayList">
              {{ getCamofluageChallenge(camo.camofluageName) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes gold-color {
  0%, 100% { border-color: rgba(202, 173, 6, 0.50); } /* Gold with 25% Transparency */
  25% { border-color: rgba(255, 223, 0, 0.50); } /* Lighter Gold with 25% Transparency */
  50% { border-color: rgba(212, 175, 55, 0.50); } /* Metallic Gold with 25% Transparency */
  75% { border-color: rgba(255, 165, 0, 0.50); } /* Orange-Gold with 25% Transparency */
}


.animate-gold {
  animation: gold-color 5s linear infinite;
}
</style>