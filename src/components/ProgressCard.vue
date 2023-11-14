<script setup lang="ts">
import type { WeaponProgress } from '@/types/WeaponProgress'

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
            <p class="text-xl">{{ weaponProgress.progress }}/{{ weaponProgress.camofluages.length }}</p>
        </div>
        <div class="card-actions flex-nowrap p-2">
            <li class="list-none" v-for="camo in weaponProgress.camofluages" :key="camo.camofluageName">
                <div>
                    <img class="rounded" src="@/assets/camo/orange_tones.png" alt="orange tones" />
                </div>
            </li>
        </div>
    </div>
</template>