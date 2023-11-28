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
      <div class="flex gap-2 mt-4" :class="{ 'flex-col': displayList }">
        <div v-for="camo in weaponProgress.camofluages" :key="camo.camofluageName">
          <div class="flex items-center">
            <CamoImg
              class="display-inline h-10"
              :progress="camo"
              @clicked="emit('toggle-camofluage-complete', camo.camofluageName)"
            />
            <p class="pl-2" v-if="displayList">
              {{ getCamofluageChallenge(camo.camofluageName) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="indicator w-full">
    <div
      class="indicator-item indicator-start translate-x-2 translate-y-2"
      @click="$emit('toggle-favorite')"
    >
      <HeartIcon
        class="h-8 w-8"
        :class="weaponProgress.isFavorite ? 'fill-secondary' : 'fill-base-300 stroke-base-100'"
      />
    </div>
    <div class="card border border-neutral bg-base-100 shadow-xl">
      <div class="card-body items-center py-0 px-2 mb-6">
        <h2 class="card-title text-2xl md:text-lg text-center">
          {{ weaponProgress.weaponName }}
        </h2> -->

  <!-- <div class="flex" :class="displayList ? 'flex-col gap-4' : 'flex-row gap-2'">
          <ul v-for="camo in weaponProgress.camofluages" :key="camo.camofluageName">
            <li>
              <div class="flex flex-row items-center justify-center">
                <CamoImg
                  class="basis-10 flex-none"
                  :progress="camo"
                  @clicked="emit('toggle-camofluage-complete', camo.camofluageName)"
                />
                <p class="pl-2" v-if="displayList">
                  {{ getCamofluageChallenge(camo.camofluageName) }}
                </p>
              </div>
            </li>
          </ul>
        </div> 
      </div>
    </div>
  </div>-->
</template>
