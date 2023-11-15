import { useStorage } from '@vueuse/core'
import type { WeaponCategory } from '@/composeables/weapon'
import { useWeapons } from '@/composeables/weapon'

export interface CamofluageProgress {
  camofluageName: string
  achived: boolean
}

export interface WeaponProgress {
  weaponName: string
  weaponCategory: WeaponCategory
  camofluages: CamofluageProgress[]
  progress: number
}

export function useWeaponProgress() {
  const defaultWeaponProgress = loadDefaultProgress()
  const progress = useStorage('progress', defaultWeaponProgress, localStorage, {
    mergeDefaults: true
  })

  return { progress }
}

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
