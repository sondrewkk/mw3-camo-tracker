<script setup lang="ts">
import { useTrackerFilterStore } from '@/stores/trackerFilterStore'
import { storeToRefs } from 'pinia'
import { HeartIcon, EllipsisHorizontalIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/solid'
import FilterButton from './FilterButton.vue'

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
  <FilterButton @clicked="toggleShowFilterMenu" class="md:hidden w-full">
    {{ showFilterMenu ? 'Hide' : 'Show' }} Filters
  </FilterButton>

  <div class="flex space-x-4 pt-4 md:hidden">
    <FilterButton
      @clicked="toggleShowFavorites"
      class="min-w-1/3 grow"
    >
      Favorites
      <HeartIcon class="w-6 h-6" :class="{ 'fill-secondary': showFavorites }" />
    </FilterButton>

    <FilterButton @clicked="toggleDisplayList" class="w-1/2 shrink">
      <template v-if="displayList">
        Grid
        <EllipsisHorizontalIcon class="w-6 h-6" />
      </template>
      <template v-else>
        List
        <EllipsisVerticalIcon class="w-6 h-6" />
      </template>
    </FilterButton>
  </div>

  <div
    class="space-y-8 pt-8 pb-4 px-4 md:flex md:place-items-end md:space-x-4"
    :class="{ hidden: !showFilterMenu, block: showFilterMenu }"
  >
    <div class="form-control">
      <label class="label">
        <span class="label-text text-2xl md:text-xs">Category</span>
      </label>
      <select class="select select-bordered select-lg md:select-xs" v-model="selectedCategory">
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text text-2xl md:text-xs md:pr-4">Hide gilded</span>
        <input
          type="checkbox"
          class="toggle toggle-lg md:toggle-sm toggle-success"
          v-model="hideGilded"
        />
      </label>
    </div>

    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text text-2xl md:text-xs md:pr-4">Hide forged</span>
        <input
          type="checkbox"
          class="toggle toggle-lg md:toggle-sm toggle-success"
          v-model="hideForged"
        />
      </label>
    </div>

    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text text-2xl md:text-xs md:pr-4">Hide priceless</span>
        <input
          type="checkbox"
          class="toggle toggle-lg md:toggle-sm toggle-success"
          v-model="hidePriceless"
        />
      </label>
    </div>

    <div class="grow"></div>

    <FilterButton
      class="btn btn-square btn-sm hidden md:inline-flex"
      @clicked="toggleShowFavorites"
    >
      <HeartIcon class="h-4 w-4" :class="{ 'fill-secondary': showFavorites }" />
    </FilterButton>

    <FilterButton class="btn btn-sm w-24 hidden md:inline-flex" @clicked="toggleDisplayList">
      <template v-if="displayList">
        Grid
        <EllipsisHorizontalIcon class="w-6 h-6" />
      </template>
      <template v-else>
        List
        <EllipsisVerticalIcon class="w-6 h-6" />
      </template>
    </FilterButton>
  </div>
</template>
