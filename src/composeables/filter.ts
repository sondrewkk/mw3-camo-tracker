import { ref } from 'vue'

export function useFilter() {
  const displayList = ref(false)

  return {
    displayList
  }
}
