<script setup lang="ts">
import type { WeaponProgress } from '@/composeables/weaponProgress'
import CamoImg from './CamoImg.vue'
import { useCamo } from '@/composeables/camofluage'
import { HeartIcon } from '@heroicons/vue/24/solid'
import { computed } from 'vue'

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

const achivementColor = computed(() => {
  let color = ''
  const name = bestAchivement.value.camofluageName.toLowerCase()

  if (name === 'gilded') color = 'bg-gilded'
  else if (name === 'forged') color = 'bg-forged'
  else if (name === 'priceless') color = 'bg-priceless'

  return color
})

const emit = defineEmits<{
  (e: 'toggle-favorite'): void
  (e: 'toggle-camofluage-complete', camoName: string): void
}>()
</script>

<template>
  <div class="card card-compact border bg-base-100 border-neutral/75 shadow-xl overflow-hidden">
    <div class="card-body">
      <HeartIcon
        class="h-8 w-8 absolute top-2 left-2"
        :class="weaponProgress.isFavorite ? 'fill-secondary' : 'fill-base-300 stroke-base-100'"
        @click="$emit('toggle-favorite')"
      />
      <div
        class="absolute w-16 h-16 top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-45"
        :class="achivementColor"
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
