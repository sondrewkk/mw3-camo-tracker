import { type WeaponCategory, useWeapons } from '@/composeables/weapon'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useWeaponProgressStore } from './weaponProgressStore'

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

  const selectedCategory = ref<WeaponCategory>('All')
  const { categories } = useWeapons()

  const filteredProgress = computed(() => {
    let filteredProgress = groupedProgress.value

    if (selectedCategory.value !== 'All') {
      filteredProgress = { [selectedCategory.value]: groupedProgress.value[selectedCategory.value] }
    }

    return filteredProgress
  })

  return {
    displayList,
    toggleDisplayList,
    showFilterMenu,
    toggleShowFilterMenu,
    showFavorites,
    toggleShowFavorites,
    selectedCategory,
    categories,
    filteredProgress
  }
})
