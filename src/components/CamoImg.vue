<script setup lang="ts">
import { computed } from 'vue'
import type { CamouflageProgress } from '@/composeables/weaponProgress'
import { CheckIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  progress: CamouflageProgress
}>()

const imgUrl = computed(() => getCamoImgUrl(props.progress.camouflageName))

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
      :class="{ 'opacity-50': progress.achieved }"
      :src="imgUrl"
      :alt="progress.camouflageName"
    />
    <div v-if="progress.achieved" class="absolute inset-0 flex justify-center items-center">
      <CheckIcon
        class="w-4/5 stroke-green-500 stroke-2 transition duration-200 delay-100 ease-in opacity-0"
        :class="{ 'opacity-100': progress.achieved }"
      />
    </div>
  </div>
</template>
