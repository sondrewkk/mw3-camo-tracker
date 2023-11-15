import type { Weapon } from '@/composeables/weapon'

export const allWeapons: Weapon[] = [
  {
    name: 'SVA 545',
    category: 'Assault rifle',
    camofluages: [
      {
        name: 'Blue Tones',
        set: 'DIGITAL',
        type: 'BASE',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 50 kills',
        requirement: 'Weapon level 2'
      },
      {
        name: 'Topo Muddy',
        set: 'DIGITAL',
        type: 'BASE',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 50 kills while ADS',
        requirement: 'Weapon level 13'
      },
      {
        name: 'Cinders',
        set: 'DIGITAL',
        type: 'BASE',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 15 headshots kills',
        requirement: 'Weapon level 20'
      },
      {
        name: 'Monarch',
        set: 'DIGITAL',
        type: 'BASE',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 25 kills while in tactical stance',
        requirement: 'Weapon level 30'
      },
      {
        name: 'Gilded',
        set: 'DIGITAL',
        type: 'COMPLETIONIST',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 3 operator kills with 1 magazine 10 times',
        requirement: 'Complete all base camo challenges'
      },
      {
        name: 'Forged',
        set: 'DIGITAL',
        type: 'COMPLETIONIST',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 25 multikills',
        requirement: 'Complete 6 gilded camo challenges with assult rifles'
      },
      {
        name: 'Priceless',
        set: 'DIGITAL',
        type: 'COMPLETIONIST',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 15 headshots kills with a magnification scope',
        requirement: 'Complete 36 forged camo challenges'
      }
    ]
  },
  {
    name: 'MTZ-556',
    category: 'Assault rifle',
    camofluages: [
      {
        name: 'Orange Tones',
        set: 'DIGITAL',
        type: 'BASE',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 50 kills',
        requirement: 'Weapon level 2'
      },
      {
        name: 'Iris Glitch',
        set: 'DIGITAL',
        type: 'BASE',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 50 kills while ADS',
        requirement: 'Weapon level 13'
      },
      {
        name: 'Germ Factory',
        set: 'DIGITAL',
        type: 'BASE',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 15 headshots kills',
        requirement: 'Weapon level 20'
      },
      {
        name: 'Purple',
        set: 'DIGITAL',
        type: 'BASE',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 25 kills while in tactical stance',
        requirement: 'Weapon level 30'
      },
      {
        name: 'Gilded',
        set: 'DIGITAL',
        type: 'COMPLETIONIST',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 3 operator kills with 1 magazine 10 times',
        requirement: 'Complete all base camo challenges'
      },
      {
        name: 'Forged',
        set: 'DIGITAL',
        type: 'COMPLETIONIST',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 10 kills while moving in tac stance',
        requirement: 'Complete 6 gilded camo challenges with assult rifles'
      },
      {
        name: 'Priceless',
        set: 'DIGITAL',
        type: 'COMPLETIONIST',
        gameMode: 'MULTIPLAYER',
        challenge: 'Get 15 headshots kills with a magnification scope',
        requirement: 'Complete 36 forged camo challenges'
      }
    ]
  }
]
