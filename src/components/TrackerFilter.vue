<script setup lang="ts">
import { useTrackerFilterStore } from '@/stores/trackerFilterStore'
import { storeToRefs } from 'pinia'
import { HeartIcon, EllipsisHorizontalIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/solid';

const trackerFilterStore = useTrackerFilterStore()
const {
  displayList,
  showFilterMenu,
  showFavorites,
  selectedCategory,
  categories,
  hideGilded,
  hideForged,
  hidePriceless
} = storeToRefs(trackerFilterStore)

const { toggleDisplayList, toggleShowFilterMenu, toggleShowFavorites } = trackerFilterStore
</script>

<template>
  <div class="px-2 pt-6">
    <div class="flex flex-col space-y-4">
      <button
        class="btn btn-lg border-2 border-base-100 hover:border-gray-500 hover:bg-base-200"
        @click="toggleShowFilterMenu"
      >
        {{ showFilterMenu ? 'Hide' : 'Show' }} Filters
      </button>

      <!-- Filter menu -->
      <div
        :class="showFilterMenu ? 'flex h-screen' : 'hidden'"
        class="flex flex-col space-y-6 items-center"
      >
        <div class="form-control w-full px-2">
          <label class="label">
            <span class="lavel-text text-lg">Category</span>
          </label>
          <select class="select select-bordered select-lg w-full" v-model="selectedCategory">
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="flex flex-col">
          <div class="form-control w-64">
            <label class="cursor-pointer label">
              <span class="label-text text-2xl">Hide gilded</span>
              <input type="checkbox" class="toggle toggle-lg toggle-success" v-model="hideGilded" />
            </label>
          </div>
          <div class="form-control w-64">
            <label class="cursor-pointer label">
              <span class="label-tex text-2xl">Hide forged</span>
              <input type="checkbox" class="toggle toggle-lg toggle-success" v-model="hideForged" />
            </label>
          </div>
          <div class="form-control w-64">
            <label class="cursor-pointer label">
              <span class="label-text text-2xl">Hide priceless</span>
              <input
                type="checkbox"
                class="toggle toggle-lg toggle-success"
                v-model="hidePriceless"
              />
            </label>
          </div>
        </div>
      </div>

      <!-- Favorites and list/grid -->
      <div class="flex justify-between space-x-4">
        <button
          class="btn btn-lg w-1/2"
          :class="
            showFavorites
              ? 'btn-outline btn-secondary'
              : 'border-2 border-base-100 hover:border-gray-500 hover:bg-base-200'
          "
          @click="toggleShowFavorites"
        >
          Favorites
          <HeartIcon class="w-6 h-6" />
        </button>
        <button
          class="btn btn-lg border-2 border-base-100 grow hover:border-gray-500 hover:bg-base-200"
          @click="toggleDisplayList"
        >
          <template v-if="displayList">
            Grid
            <EllipsisHorizontalIcon class="w-6 h-6" />
          </template>
          <template v-else>
            List
            <EllipsisVerticalIcon class="w-6 h-6" />
          </template>
        </button>
      </div>
    </div>
  </div>
</template>
