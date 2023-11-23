import { defineStore } from 'pinia'
import { useWeapons, type WeaponCategory } from '@/composeables/weapon'
import type { WeaponProgress } from '@/composeables/weaponProgress'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

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

function mergeProgress(defaultProgress: WeaponProgress[], progress: WeaponProgress[]) {
  return defaultProgress.map((defaultWeapon) => {
    const weapon = progress.find((weapon) => weapon.weaponName === defaultWeapon.weaponName)
    if (weapon) {
      return {
        ...defaultWeapon,
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

function groupProgress(weaponProgress: WeaponProgress[]) {
  return weaponProgress.reduce(
    (grouped, weapon) => {
      const key = weapon.weaponCategory

      if (!grouped[key]) {
        grouped[key] = []
      }

      ;(grouped[key] as WeaponProgress[]).push(weapon)
      return grouped
    },
    {} as Partial<Record<WeaponCategory, typeof weaponProgress>>
  )
}

export const useWeaponProgressStore = defineStore(STORE_NAME, () => {
  const weaponProgress = useStorage('progress', loadDefaultProgress(), localStorage, {
    mergeDefaults: (storeageValue, defaults) => mergeProgress(defaults, storeageValue)
  })

  const groupedProgress = computed(() => groupProgress(weaponProgress.value))

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

  return { groupedProgress, toggleCamofluageComplete, resetToDefault }
})
