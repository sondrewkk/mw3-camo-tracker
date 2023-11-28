<script setup lang="ts">
import type { CamofluageProgress } from '@/composeables/weaponProgress'
import { CheckIcon } from '@heroicons/vue/24/outline'

defineProps<{
  progress: CamofluageProgress
}>()

const getCamoImgUrl = (name: string) => {
  const formattedName = name.replace(/\s+/g, '_').toLowerCase()
  return new URL(`../assets/camo/${formattedName}.png`, import.meta.url).href
}

const emit = defineEmits<{
  (e: 'clicked'): void
}>()
</script>

<template>
  <!-- <button @click="emit('clicked')" class="relative">
    <div class="bg-black rounded">
      <img
        class="rounded transition-opacity duration-2000 ease-in-out"
        :class="progress.achived ? 'opacity-25' : 'opacity-100'"
        :src="getCamoImgUrl(progress.camofluageName)"
        :alt="progress.camofluageName"
      />
       <CheckIcon
        class="absolute bottom-0 stroke-green-500 stroke-2 transition-opacity duration-2000 ease-in-out"
        :class="progress.achived ? 'opacity-100' : 'opacity-0'"
      />
    </div>
  </button> -->
  <img
    class="rounded"
    :src="getCamoImgUrl(progress.camofluageName)"
    :alt="progress.camofluageName"
    @click="emit('clicked')"
  />
</template>
