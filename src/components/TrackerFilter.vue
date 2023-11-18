<script setup lang="ts">
import { useTrackerFilterStore } from '@/stores/trackerFilterStore'
import { storeToRefs } from 'pinia'

const trackerFilterStore = useTrackerFilterStore()
const { displayList, showFilterMenu } = storeToRefs(trackerFilterStore)
const { toggleDisplayList, toggleShowFilterMenu } = trackerFilterStore
</script>

<template>
  <div class="px-2 pt-6">
    <div class="flex flex-col space-y-4">
      <button class="btn btn-xl w-full border-2 border-base-100" @click="toggleShowFilterMenu">
        {{ showFilterMenu ? 'Hide' : 'Show' }} Filters
      </button>

      <!-- Filter menu -->
      <div
        :class="showFilterMenu ? 'flex h-screen' : 'hidden'"
        class="flex flex-col space-y-6 items-center"
      >
        <div class="form-control w-full px-2">
          <label class="label">
            <span class="lavel-text">Category</span>
          </label>
          <select class="select w-full">
            <option disabled selected>All</option>
            <option>Assult rifle</option>
            <option>Submachine gun</option>
            <option>Marksman rifle</option>
            <option>Sniper rifle</option>
            <option>Pistol</option>
          </select>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text pr-4">Hide guilded</span>
            <input type="checkbox" class="toggle" checked />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text pr-4">Hide forged</span>
            <input type="checkbox" class="toggle" checked />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text pr-4">Hide priceless</span>
            <input type="checkbox" class="toggle" checked />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text pr-4">Hide interstellar</span>
            <input type="checkbox" class="toggle" checked />
          </label>
        </div>
      </div>

      <!-- Favorites and list/grid -->
      <div class="flex justify-between space-x-4">
        <button class="btn btn-xl border-2 border-base-100 w-1/2">Favorites</button>
        <button class="btn btn-xl border-2 border-base-100 grow" @click="toggleDisplayList">
          {{ displayList ? 'List' : 'Grid' }}
        </button>
      </div>
    </div>
  </div>
</template>
