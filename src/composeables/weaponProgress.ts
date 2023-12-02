import type { WeaponCategory } from '@/composeables/weapon'

export interface CamouflageProgress {
  camouflageName: string
  achieved: boolean
}

export interface WeaponProgress {
  weaponName: string
  weaponCategory: WeaponCategory
  isFavorite: boolean
  camouflages: CamouflageProgress[]
  progress: number
}
