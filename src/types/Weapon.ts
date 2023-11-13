import type { Camofluage } from "@/types/Camofluage";

export type WeaponCategory = "Assault rifle" | "Submachine gun"

export interface Weapon {
    name: string,
    category: WeaponCategory,
    camofluages: Camofluage[],
}

