import { defineStore } from 'pinia'
import { useWeapons } from '@/composeables/weapon'
import type { WeaponProgress } from '@/composeables/weaponProgress'
import { useStorage } from '@vueuse/core'

const STORE_NAME: string = 'weaponProgress'

function loadDefaultProgress(): WeaponProgress[] {
  const { weapons } = useWeapons()
  console.log(weapons.value)
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

function mergeProgress(defaultProgress: WeaponProgress[], progress: WeaponProgress[]) {
  return defaultProgress.map((defaultWeapon) => {
    const weapon = progress.find((weapon) => weapon.weaponName === defaultWeapon.weaponName)
    if (weapon) {
      return {
        ...defaultWeapon,
        camofluages: defaultWeapon.camofluages.map((defaultCamo) => {
          const camo = weapon.camofluages.find((camo) => camo.camofluageName === defaultCamo.camofluageName)
          if (camo) {
            return {
              ...defaultCamo,
              achived: camo.achived
            }
          }
          return defaultCamo
        })
      }
    }
    return defaultWeapon
  })
}

export const useWeaponProgressStore = defineStore(STORE_NAME, () => {
  const weaponProgress = useStorage('progress', loadDefaultProgress(), localStorage, {
    mergeDefaults: (storeageValue, defaults) => mergeProgress(defaults, storeageValue)
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
