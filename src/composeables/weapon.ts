import { allWeapons } from '@/assets/weapons'
import { computed, ref } from 'vue'
import type { Camouflage } from '@/composeables/camouflage'

export type WeaponCategory =
  | 'All'
  | 'Assault rifle'
  | 'Battle rifle'
  | 'Submachine gun'
  | 'Shotgun'
  | 'Light machine gun'
  | 'Marksman rifle'
  | 'Sniper rifle'
  | 'Pistol'

export interface Weapon {
  name: string
  category: WeaponCategory
  camouflages: Camouflage[]
}

export function useWeapons() {
  const weapons = ref(allWeapons)

  const categories = computed(() => {
    const categoriesFromWeapons = [...new Set(weapons.value.map((weapon) => weapon.category))]
    return ['All', ...categoriesFromWeapons]
  })

  const totalCamouflages = computed(() => {
    return weapons.value.reduce((acc, weapon) => acc + weapon.camouflages.length, 0)
  })

  return {
    weapons,
    categories,
    totalCamouflages
  }
}
