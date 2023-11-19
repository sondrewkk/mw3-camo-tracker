<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import NavigationBarLink from './NavigationBarLink.vue'

const showMenu = ref(false)
const toggleShowMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <nav class="max-w-6xl mx-auto md:flex md:justify-between md:items-center">
    <div class="flex items-center justify-between p-4">
      <div class="p-2">
        <router-link to="/" class="text-xl font-bold">Cod MWIII Camo Tracker </router-link>
      </div>
      <!-- Mobile menu button -->
      <div @click="toggleShowMenu" class="flex md:hidden">
        <button type="button">
          <Bars3Icon class="w-8" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex flex-col pt-2 pb-6 space-y-6 items-center md:flex md:flex-row md:p-2 md:space-y-0 md:space-x-10"
    >
      <NavigationBarLink to="/" @click="toggleShowMenu">Home</NavigationBarLink>
      <NavigationBarLink to="/tracker" @click="toggleShowMenu">Tracker</NavigationBarLink>
      <NavigationBarLink to="/settings" @click="toggleShowMenu">Settings</NavigationBarLink>
      <NavigationBarLink to="/about" @click="toggleShowMenu">About</NavigationBarLink>
    </div>
  </nav>
</template>
