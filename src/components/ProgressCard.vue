<script setup lang="ts">
import type { WeaponProgress } from '@/types/WeaponProgress'
import CamoImg from './CamoImg.vue';
import { useWeaponProgressStore } from '@/stores/WeaponProgressStore'
const { toggleCamofluageComplete } = useWeaponProgressStore()

defineProps<{
  weaponProgress: WeaponProgress
}>()

</script>

<template>
    <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title text-4xl text-center">
                {{ weaponProgress.weaponName}}
            </h2>
        </div>
        <div class="card-actions flex-nowrap p-2">
            <li 
                class="list-none" 
                v-for="camo in weaponProgress.camofluages" 
                :key="camo.camofluageName"
            >
                <CamoImg 
                    :progress="camo" 
                    @toggle-camo="toggleCamofluageComplete(weaponProgress.weaponName, camo.camofluageName)"
                />
            </li>
        </div>
    </div>
</template>