import { defineStore } from 'pinia'
import { useWeapons } from '@/composeables/weapon'
import type { WeaponProgress } from '@/composeables/weaponProgress'
import { useStorage } from '@vueuse/core'
import { useCamo } from '@/composeables/camouflage'

const STORE_NAME: string = 'weaponProgress'

function loadDefaultProgress(): WeaponProgress[] {
  const { weapons } = useWeapons()
  return weapons.value.map((weapon) => ({
    weaponName: weapon.name,
    weaponCategory: weapon.category,
    isFavorite: false,
    camouflages: weapon.camouflages.map((camo) => ({
      camouflageName: camo.name,
      achieved: false
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
        camouflages: defaultWeapon.camouflages.map((defaultCamo) => {
          const camo = weapon.camouflages.find(
            (camo) => camo.camouflageName === defaultCamo.camouflageName
          )
          if (camo) {
            return {
              ...defaultCamo,
              achieved: camo.achieved
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

  function toggleCamouflageComplete(weaponName: string, camoName: string) {
    const selectedWeapon = weaponProgress.value.find((weapon) => weapon.weaponName === weaponName)
    if (!selectedWeapon) return

    const selectedCamo = selectedWeapon.camouflages.find((camo) => camo.camouflageName === camoName)
    if (!selectedCamo) return

    const { getCamouflageType } = useCamo()
    const camoType = getCamouflageType(selectedCamo.camouflageName)

    if (camoType === 'COMPLETIONIST' && !selectedCamo.achieved) {
      for (const camo of selectedWeapon.camouflages) {
        if (camo.camouflageName === camoName) break
        camo.achieved = true
      }
      selectedCamo.achieved = true
    } else {
      selectedCamo.achieved = !selectedCamo.achieved
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

  const getSumOfAllAchivedCamouflages = () => {
    return weaponProgress.value.reduce((sum, weapon) => {
      return (
        sum +
        weapon.camouflages.reduce((sum, camo) => {
          return sum + (camo.achieved ? 1 : 0)
        }, 0)
      )
    }, 0)
  }

  return {
    weaponProgress,
    toggleCamouflageComplete,
    toggleFavorite,
    resetToDefault,
    getSumOfAllAchivedCamouflages
  }
})
