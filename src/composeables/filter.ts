import { computed, type Ref } from 'vue'
import type { WeaponCategory } from './weapon'
import type { WeaponProgress } from './weaponProgress'

function group(progress: WeaponProgress[]) {
  return progress.reduce(
    (grouped, weapon) => {
      const key = weapon.weaponCategory

      if (!grouped[key]) {
        grouped[key] = []
      }

      ;(grouped[key] as WeaponProgress[]).push(weapon)
      return grouped
    },
    {} as Partial<Record<WeaponCategory, typeof progress>>
  )
}

function filterByCategory(progress: WeaponProgress[], category: WeaponCategory) {
  return progress.filter((weapon) => weapon.weaponCategory === category)
}

function filterFavorites(progress: WeaponProgress[]) {
  return progress.filter((weapon) => weapon.isFavorite)
}

function filterCamo(progress: WeaponProgress[], camoName: string) {
  return progress.filter((weapon) => {
    const camo = weapon.camouflages.find((camo) => camo.camouflageName === camoName)
    return !(camo && camo.achieved)
  })
}

export function useFilter(
  weaponProgress: Ref<WeaponProgress[]>,
  selectedCategory: Ref<WeaponCategory>,
  showFavorites: Ref<boolean>,
  hideGilded: Ref<boolean>,
  hideForged: Ref<boolean>,
  hidePriceless: Ref<boolean>
) {
  const filteredProgress = computed(() => {
    const initialProgress = weaponProgress.value
    const isCategorySelected = selectedCategory.value !== 'All'
    const isFavoriteSelected = showFavorites.value
    const isHidingGilded = hideGilded.value
    const isHidingForged = hideForged.value
    const isHidingPriceless = hidePriceless.value

    const categoryFilteredProgress = isCategorySelected
      ? filterByCategory(initialProgress, selectedCategory.value)
      : initialProgress

    const favoriteFilteredProgress = isFavoriteSelected
      ? filterFavorites(categoryFilteredProgress)
      : categoryFilteredProgress

    const gildedFilteredProgress = isHidingGilded
      ? filterCamo(favoriteFilteredProgress, 'Gilded')
      : favoriteFilteredProgress

    const forgedFilteredProgress = isHidingForged
      ? filterCamo(gildedFilteredProgress, 'Forged')
      : gildedFilteredProgress

    const pricelessFilteredProgress = isHidingPriceless
      ? filterCamo(forgedFilteredProgress, 'Priceless')
      : forgedFilteredProgress

    return group(pricelessFilteredProgress)
  })

  return {
    filteredProgress
  }
}
