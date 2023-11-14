<script setup lang="ts">
import { useWeaponProgressStore } from '@/stores/WeaponProgressStore'
import { storeToRefs } from 'pinia';
import ProgressCard from '@/components/ProgressCard.vue';

const weaponsProgresStore = useWeaponProgressStore()
const { weaponProgress } = storeToRefs(weaponsProgresStore)
</script>

<template>
    <div class="flex flex-col items-center space-y-6 px-8 p-8">
        <li class="list-none w-full" v-for="weapon in weaponProgress" :key="weapon.weaponName">
            <ProgressCard :weapon-progress="weapon" />
        </li>
    </div>
</template>