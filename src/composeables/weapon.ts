import { allWeapons } from '@/assets/weapons'
import { computed, ref } from 'vue'
import type { Camofluage } from '@/composeables/camofluage'

export type WeaponCategory = 'All' | 'Assault rifle' | 'Submachine gun'

export interface Weapon {
  name: string
  category: WeaponCategory
  camofluages: Camofluage[]
}

export function useWeapons() {
  const weapons = ref(allWeapons)
  const categories = computed(() => {
    const categoriesFromWeapons = [...new Set(weapons.value.map((weapon) => weapon.category))]
    return ['All', ...categoriesFromWeapons]
  })

  return {
    weapons,
    categories
  }
}
