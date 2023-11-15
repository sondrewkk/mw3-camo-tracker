import { defineStore } from 'pinia'
import { useWeaponProgress } from '@/composeables/weaponProgress'

export const useWeaponProgressStore = defineStore('weaponProgress', () => {
  const weaponProgress = useWeaponProgress().progress

  function toggleCamofluageComplete(weaponName: string, camoName: string) {
    const weapon = weaponProgress.value.find((weapon) => weapon.weaponName === weaponName)
    if (weapon) {
      const camo = weapon.camofluages.find((camo) => camo.camofluageName === camoName)
      if (camo) {
        camo.achived = !camo.achived
      }
    }
  }

  return { weaponProgress, toggleCamofluageComplete }
})
