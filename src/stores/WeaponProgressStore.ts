import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import type { WeaponProgress } from '@/types/WeaponProgress'
import { loadProgress } from '@/types/WeaponProgress'


export const useWeaponProgressStore = defineStore('weaponProgress', () => {
  const weaponProgress = ref([] as WeaponProgress[])
  
  onMounted(() => {
    weaponProgress.value = loadProgress()
  })

  function setCamoAchived(weaponName: string, camoName: string, achived: boolean) {
    const weapon = weaponProgress.value.find((weapon) => weapon.weaponName === weaponName)
    if (weapon) {
      const camo = weapon.camofluages.find((camo) => camo.camofluageName === camoName)
      if (camo) {
        camo.achived = achived
        
      }
    }
  }

  return { weaponProgress, setCamoAchived }
})
