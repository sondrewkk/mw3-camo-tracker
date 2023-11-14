<script setup lang="ts">
import type { CamofluageProgress } from '@/types/WeaponProgress';
import { CheckIcon } from '@heroicons/vue/24/outline'

defineProps<{
    progress: CamofluageProgress
}>()

const getCamoImgUrl = (name: string) => {
    const formattedName = name.replace(/\s+/g, '_').toLowerCase();  
    return new URL(`../assets/camo/${formattedName}.png`, import.meta.url).href
}

defineEmits(['toggleCamo'])

</script>

<template>
    <button @click="$emit('toggleCamo')" class="relative">
        <img 
            class="rounded" 
            :src="getCamoImgUrl(progress.camofluageName)" :alt="progress.camofluageName" >
        <CheckIcon class="absolute bottom-0 stroke-green-500 bg-black/75 stroke-2" v-show="progress.achived"></CheckIcon>
    </button>
</template>
