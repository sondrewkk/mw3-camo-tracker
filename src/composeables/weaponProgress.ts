import type { WeaponCategory } from '@/composeables/weapon'


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
