import { allWeapons } from '@/assets/weapons'
import { computed, ref } from 'vue'
import type { Camofluage } from '@/types/Camofluage'

export type WeaponCategory = 'Assault rifle'

export interface Weapon {
  name: string
  category: WeaponCategory
  camofluages: Camofluage[]
}

export function useWeapons() {
  const weapons = ref(allWeapons)
  const assultRifles = computed(() =>
    weapons.value.filter((weapon) => weapon.category === 'Assault rifle')
  )

  return {
    weapons,
    assultRifles
  }
}
