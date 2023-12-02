import { useWeapons } from '@/composeables/weapon'

type CamouflageSet = 'DIGITAL' | 'SOLID' | ''
type CamouflageType = 'BASE' | 'COMPLETIONIST'
type GameMode = 'MULTIPLAYER' | 'ZOMBIES'

export interface Camouflage {
  name: string
  set: CamouflageSet
  type: CamouflageType
  gameMode: GameMode
  challenge: string
  requirement: string
}

export function useCamo() {
  const { weapons } = useWeapons()
  const camouflages: Camouflage[] = weapons.value.map((weapon) => weapon.camouflages).flat()

  const getCamouflageChallenge = (camoName: string) => {
    return camouflages.find((camouflage) => camouflage.name === camoName)?.challenge
  }

  const getCamouflageType = (camoName: string) => {
    return camouflages.find((camouflage) => camouflage.name === camoName)?.type
  }

  return { getCamouflageChallenge, getCamouflageType }
}
