<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'

const showMenu = ref(false)
</script>

<template>
  <div>
    <div class="bg-base-100">
      <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-xl font-bold">Cod MWIII Camo Tracker </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button">
              <Bars3Icon class="w-8" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-6 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 items-center"
        >
          <router-link to="/" class="font-bold text-2xl hover:underline decoration-2 underline-offset-2" active-class="text-gray-200"> Home</router-link>
          <router-link to="/tracker" class="font-bold text-2xl hover:underline decoration-2 underline-offset-2" active-class="text-gray-200">Tracker</router-link>
          <router-link to="/settings" class="font-bold text-2xl hover:underline decoration-2 underline-offset-2" active-class="text-gray-200">Settings</router-link>
          <router-link to="/about" class="font-bold text-2xl hover:underline decoration-2 underline-offset-2" active-class="text-gray-200">About</router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
