import { allWeapons } from '@/assets/Weapons'


export interface CamofluageProgress {
    camofluageName: string,
    achived: boolean,
}

export interface WeaponProgress {
    weaponName: string,
    camofluages: CamofluageProgress[]
    progress: number,
}

export function loadProgress(): WeaponProgress[] {
    let progress: WeaponProgress[] = []
    const storedProgress = localStorage.getItem('weaponsProgress')
    if (storedProgress) {
        progress = JSON.parse(storedProgress)
    }
    else {
        progress = loadDefaultProgress()
        localStorage.setItem('weaponsProgress', JSON.stringify(progress))    
    }

    return progress
}

export function saveProgress(weaponProgress: WeaponProgress[]) {
    localStorage.setItem('weaponsProgress', JSON.stringify(weaponProgress))
}

function loadDefaultProgress(): WeaponProgress[] {
    return allWeapons.map((weapon) => ({
        weaponName: weapon.name,
        camofluages: weapon.camofluages.map((camo) => ({
            camofluageName: camo.name,
            achived: false,
        })),
        progress: 0
    })) as WeaponProgress[]
}