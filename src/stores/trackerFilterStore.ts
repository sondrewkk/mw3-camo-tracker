import { type WeaponCategory, useWeapons } from '@/composeables/weapon'
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'
import { useFilter } from '@/composeables/filter'

export const useTrackerFilterStore = defineStore('trackerFilter', () => {
  const weaponProgressStore = useWeaponProgressStore()
  const { groupedProgress } = storeToRefs(weaponProgressStore)

  const displayList = ref(false)
  function toggleDisplayList() {
    displayList.value = !displayList.value
  }

  const showFilterMenu = ref(false)
  function toggleShowFilterMenu() {
    showFilterMenu.value = !showFilterMenu.value
  }

  const showFavorites = ref(false)
  function toggleShowFavorites() {
    showFavorites.value = !showFavorites.value
  }

  const { categories } = useWeapons()
  const selectedCategory = ref<WeaponCategory>('All')
  const hideGilded = ref(false)
  const hideForged = ref(false)
  const hidePriceless = ref(false)

  const { filteredProgress } = useFilter(
    groupedProgress,
    selectedCategory,
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
