<script setup lang="ts">
import { computed } from 'vue'
import type { CamofluageProgress } from '@/composeables/weaponProgress'
import { CheckIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  progress: CamofluageProgress
}>()

const imgUrl = computed( () => getCamoImgUrl(props.progress.camofluageName))

const getCamoImgUrl = (name: string) => {
  const formattedName = name.replace(/\s+/g, '_').toLowerCase()
  const url = new URL(`../assets/camo/${formattedName}.png`, import.meta.url)
  return url.href
}

const emit = defineEmits<{
  (e: 'clicked'): void
}>()
</script>

<template>
  <div class="relative rounded bg-black" @click="emit('clicked')">
    <img
      class="rounded transition-all duration-250 ease-in-out object-cover w-full h-full"
      :class="{ 'opacity-50': progress.achived }"
      :src="imgUrl"
      :alt="progress.camofluageName"
    />
    <div v-if="progress.achived" class="absolute inset-0 flex justify-center items-center">
      <CheckIcon
        class="w-4/5 stroke-green-500 stroke-2 transition duration-200 delay-100 ease-in opacity-0"
        :class="{ 'opacity-100': progress.achived }"
      />
    </div>
  </div>
</template>
