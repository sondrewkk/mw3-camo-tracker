import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTrackerFilterStore = defineStore('trackerFilter', () => {
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

  return {
    displayList,
    toggleDisplayList,
    showFilterMenu,
    toggleShowFilterMenu,
    showFavorites,
    toggleShowFavorites
  }
})
