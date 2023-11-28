<script setup lang="ts">
import type { WeaponProgress } from '@/composeables/weaponProgress'
import CamoImg from './CamoImg.vue'
import { useCamo } from '@/composeables/camofluage'
import { HeartIcon } from '@heroicons/vue/24/solid'

const { getCamofluageChallenge } = useCamo()

defineProps<{
  weaponProgress: WeaponProgress
  displayList: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-favorite'): void
  (e: 'toggle-camofluage-complete', camoName: string): void
}>()
</script>

<template>
  <div class="card card-compact border bg-base-100 border-neutral/75 shadow-xl">
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
      <div class="flex gap-1 mt-4" :class="{ 'flex-col gap-y-2': displayList }">
        <div v-for="camo in weaponProgress.camofluages" :key="camo.camofluageName">
          <div class="flex gap-4 items-center"
          >
            <CamoImg
              class=""
              :class="{ 'flex-none w-10': displayList}"
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
