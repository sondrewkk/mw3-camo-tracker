import { ref, computed, type ComputedRef, type Ref } from 'vue'
import type { WeaponCategory } from './weapon'
import type { WeaponProgress } from './weaponProgress'

export function useFilter(
  groupedProgress: ComputedRef<Partial<Record<WeaponCategory, WeaponProgress[]>>>,
  selectedCategory: Ref<WeaponCategory>,
  hideGilded: Ref<boolean>,
  hideForged: Ref<boolean>,
  hidePriceless: Ref<boolean>
) {
  const displayList = ref(false)

  function filterByCamo(
    filteredProgress: Partial<Record<WeaponCategory, WeaponProgress[]>>,
    camoName: string
  ) {
    return Object.fromEntries(
      Object.entries(filteredProgress).map(([key, value]) => {
        return [
          key,
          value.filter((weapon) => {
            const camo = weapon.camofluages.find((camo) => camo.camofluageName === camoName)
            return !(camo && camo.achived)
          })
        ]
      })
    )
  }

  const filteredProgress = computed(() => {
    let filteredProgress = groupedProgress.value

    if (selectedCategory.value !== 'All') {
      filteredProgress = { [selectedCategory.value]: groupedProgress.value[selectedCategory.value] }
    }

    if (hideGilded.value) {
      filteredProgress = filterByCamo(filteredProgress, 'Gilded')
    }

    if (hideForged.value) {
      filteredProgress = filterByCamo(filteredProgress, 'Forged')
    }

    if (hidePriceless.value) {
      filteredProgress = filterByCamo(filteredProgress, 'Priceless')
    }

    // Filter out categories with an empty progress array
    filteredProgress = Object.fromEntries(
      Object.entries(filteredProgress).filter(([, value]) => value.length > 0)
    )

    return filteredProgress
  })

  return {
    displayList,
    filteredProgress
  }
}
