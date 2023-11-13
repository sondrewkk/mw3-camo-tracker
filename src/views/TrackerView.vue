<script setup lang="ts">
import { useWeaponProgressStore } from '@/stores/WeaponProgressStore'
import { storeToRefs } from 'pinia';

const weaponsProgresStore = useWeaponProgressStore()
const { weaponProgress } = storeToRefs(weaponsProgresStore)
</script>

<template>
    <button @click="weaponsProgresStore.setCamoAchived('SVA 545', 'Blue Tones', true)">Click me</button>
    <li v-for="weapon in weaponProgress" :key="weapon.weaponName">
        {{ weapon.weaponName }}
    </li>
</template>