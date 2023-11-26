import { type WeaponCategory, useWeapons } from '@/composeables/weapon'
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'
import { useFilter } from '@/composeables/filter'
import { useToggle } from '@/composeables/toggle'

export const useTrackerFilterStore = defineStore('trackerFilter', () => {
  const weaponProgressStore = useWeaponProgressStore()
  const { weaponProgress } = storeToRefs(weaponProgressStore)
  const { value: displayList, toggle: toggleDisplayList } = useToggle()
  const { value: showFilterMenu, toggle: toggleShowFilterMenu } = useToggle()
  const { value: showFavorites, toggle: toggleShowFavorites } = useToggle()
  const { categories } = useWeapons()
  const selectedCategory = ref<WeaponCategory>('All')
  const hideGilded = ref(false)
  const hideForged = ref(false)
  const hidePriceless = ref(false)

  const { filteredProgress } = useFilter(
    weaponProgress,
    selectedCategory,
    showFavorites,
    hideGilded,
    hideForged,
    hidePriceless
  )

  return {
    displayList,
    toggleDisplayList,
    showFilterMenu,
    toggleShowFilterMenu,
    showFavorites,
    toggleShowFavorites,
    selectedCategory,
    hideGilded,
    hideForged,
    hidePriceless,
    categories,
    filteredProgress
  }
})
