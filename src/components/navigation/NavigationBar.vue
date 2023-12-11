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
  <nav>
    <div class="px-4 py-4 mb-8">
      <div class="flex justify-between z-20">
        <router-link to="/" class="text-2xl font-bold flex-none"
          >Cod MWIII Camo Tracker
        </router-link>

        <div class="hidden md:flex grow space-x-8 justify-end">
          <NavigationBarLink to="/">Home</NavigationBarLink>
          <NavigationBarLink to="/multiplayer">Multiplayer</NavigationBarLink>
          <NavigationBarLink to="/settings">Settings</NavigationBarLink>
          <NavigationBarLink to="/about">About</NavigationBarLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden z-20">
          <button type="button" class="outline-none" @click="toggleShowMenu">
            <Bars3Icon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu-->
    <div v-if="showMenu">
      <div class="flex flex-col items-center text-xl space-y-8 pb-24">
        <NavigationBarLink to="/" @click="toggleShowMenu">Home</NavigationBarLink>
        <NavigationBarLink to="/multiplayer" @click="toggleShowMenu">Multiplayer</NavigationBarLink>
        <NavigationBarLink to="/settings" @click="toggleShowMenu">Settings</NavigationBarLink>
        <NavigationBarLink to="/about" @click="toggleShowMenu">About</NavigationBarLink>
      </div>
    </div>
  </nav>
</template>
