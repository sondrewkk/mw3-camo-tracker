import { defineStore } from 'pinia'
import { useWeapons } from '@/composeables/weapon'
import type { WeaponProgress } from '@/composeables/weaponProgress'
import { useStorage } from '@vueuse/core'

const STORE_NAME: string = 'weaponProgress'

function loadDefaultProgress(): WeaponProgress[] {
  const { weapons } = useWeapons()
  return weapons.value.map((weapon) => ({
    weaponName: weapon.name,
    weaponCategory: weapon.category,
    camofluages: weapon.camofluages.map((camo) => ({
      camofluageName: camo.name,
      achived: false
    })),
    progress: 0
  })) as WeaponProgress[]
}

export const useWeaponProgressStore = defineStore(STORE_NAME, () => {
  const weaponProgress = useStorage('progress', loadDefaultProgress(), localStorage, {
    mergeDefaults: true
  })

  function toggleCamofluageComplete(weaponName: string, camoName: string) {
    const weapon = weaponProgress.value.find((weapon) => weapon.weaponName === weaponName)
    if (weapon) {
      const camo = weapon.camofluages.find((camo) => camo.camofluageName === camoName)
      if (camo) {
        camo.achived = !camo.achived
      }
    }
  }

  function resetToDefault() {
    weaponProgress.value = loadDefaultProgress()
  }

  return { weaponProgress, toggleCamofluageComplete, resetToDefault }
})
