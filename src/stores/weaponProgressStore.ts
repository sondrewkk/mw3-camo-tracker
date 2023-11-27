import { defineStore } from 'pinia'
import { useWeapons } from '@/composeables/weapon'
import type { WeaponProgress } from '@/composeables/weaponProgress'
import { useStorage } from '@vueuse/core'
import { useCamo } from '@/composeables/camofluage'

const STORE_NAME: string = 'weaponProgress'

function loadDefaultProgress(): WeaponProgress[] {
  const { weapons } = useWeapons()
  return weapons.value.map((weapon) => ({
    weaponName: weapon.name,
    weaponCategory: weapon.category,
    isFavorite: false,
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
        isFavorite: weapon.isFavorite === undefined ? defaultWeapon.isFavorite : weapon.isFavorite,
        camofluages: defaultWeapon.camofluages.map((defaultCamo) => {
          const camo = weapon.camofluages.find(
            (camo) => camo.camofluageName === defaultCamo.camofluageName
          )
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

        // If a camo of type COMPLETIONIST is achived, achive all camos before the camo clicked
        const { getCamofluageType } = useCamo()
        const camoType = getCamofluageType(camo.camofluageName)

        if (camoType === 'COMPLETIONIST') {
          let i = 0
          while (weapon.camofluages[i].camofluageName !== camo.camofluageName) {
            weapon.camofluages[i].achived = true
            i++
          }
        }
      }
    }
  }

  function toggleFavorite(weaponName: string) {
    const weapon = weaponProgress.value.find((weapon) => weapon.weaponName === weaponName)
    if (weapon) {
      weapon.isFavorite = !weapon.isFavorite
    }
  }

  function resetToDefault() {
    weaponProgress.value = loadDefaultProgress()
  }

  const getSumOfAllAchivedCamofluages = () => {
    return weaponProgress.value.reduce((sum, weapon) => {
      return (
        sum +
        weapon.camofluages.reduce((sum, camo) => {
          return sum + (camo.achived ? 1 : 0)
        }, 0)
      )
    }, 0)
  }

  return {
    weaponProgress,
    toggleCamofluageComplete,
    toggleFavorite,
    resetToDefault,
    getSumOfAllAchivedCamofluages
  }
})
