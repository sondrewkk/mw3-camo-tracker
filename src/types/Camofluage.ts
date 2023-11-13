type CamofluageSet = "DIGITAL" | "OTHER"
type CamofluageType = "BASE" | "COMPLETIONIST"
type GameMode = "MULTIPLAYER" | "ZOMBIES"

export interface Camofluage {
    name: string,
    set: CamofluageSet,
    type: CamofluageType,
    gameMode: GameMode,
    challenge: string,
    requirement: string,
}

