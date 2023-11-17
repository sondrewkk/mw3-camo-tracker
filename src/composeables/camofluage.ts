import { useWeapons } from '@/composeables/weapon'

type CamofluageSet = 'DIGITAL' | 'OTHER'
type CamofluageType = 'BASE' | 'COMPLETIONIST'
type GameMode = 'MULTIPLAYER' | 'ZOMBIES'

export interface Camofluage {
  name: string
  set: CamofluageSet
  type: CamofluageType
  gameMode: GameMode
  challenge: string
  requirement: string
}

export function useCamo() {
  const { weapons } = useWeapons()
  const camofluages: Camofluage[] = weapons.value.map((weapon) => weapon.camofluages).flat()

  const getCamofluageChallenge = (camoName: string) => {
    return camofluages.find((camofluage) => camofluage.name === camoName)?.challenge
  }

  return { getCamofluageChallenge }
}
