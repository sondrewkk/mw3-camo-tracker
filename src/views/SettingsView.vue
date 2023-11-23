<script setup lang="ts">
import { ref } from 'vue'
import { useWeaponProgressStore } from '@/stores/weaponProgressStore'

const { resetToDefault } = useWeaponProgressStore()

const isModalOpen = ref(false)
const confirmReset = () => {
  resetToDefault()
  isModalOpen.value = false
}
</script>

<template>
  <div class="min-h-screen">
    <h1 class="text-3xl text-center py-6">Settings</h1>

    <div class="flex flex-col items-center justify-center h-screen">
      <button class="btn btn-lg btn-secondary" @click="isModalOpen = true">Reset Progress</button>
    </div>

    <!-- DaisyUI Modal -->
    <div v-if="isModalOpen" class="modal modal-open">
      <div class="modal-box">
        <h3 class="font-bold text-2xl">Warning</h3>
        <p class="py-4 text-lg">
          Resetting progress cannot be undone. Are you sure you want to proceed?
        </p>
        <div class="modal-action">
          <button class="btn btn btn-error" @click="confirmReset">Confirm</button>
          <button class="btn" @click="isModalOpen = false">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
