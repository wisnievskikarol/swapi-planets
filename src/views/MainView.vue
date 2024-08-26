<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import PlanetList from '@/components/PlanetList.vue'
import Pagination from '@/components/Pagination.vue'
import ActionStateHandler from '@/components/ActionStateHandler.vue'

import { usePlanetStore } from '@/store/stores/planets'
import { storeToRefs } from 'pinia'
import { usePageNavigation } from '@/components/composables'

const planetStore = usePlanetStore()
const { planets, currentPage, totalPages, fetchState } = storeToRefs(planetStore)
const { fetchPlanets, searchPlanets, changePage } = planetStore

const { hasNextPage, hasPreviousPage, nextPage, previousPage } = usePageNavigation(
  totalPages,
  currentPage,
  changePage
)

const filterText = ref<string>()

const handleFetch = () => {}

onMounted(() => {
  fetchPlanets()
})

watch(filterText, (newFilterText, oldFilterText) => {
  if (newFilterText !== oldFilterText) {
    if (newFilterText) {
      searchPlanets(newFilterText)
    } else {
      fetchPlanets()
    }
  }
})

watch(currentPage, (newPage, oldPage) => {
  if (newPage !== oldPage) {
    changePage(newPage)
    if (filterText.value) {
      searchPlanets(filterText.value)
    } else {
      fetchPlanets()
    }
  }
})
</script>

<template>
  <div class="panel">
    <SearchBar v-model="filterText" />
    <ActionStateHandler :state="fetchState" @retry="fetchAndSearchPlanets">
      <PlanetList :planets="planets" />
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :hasPreviousPage="hasPreviousPage"
        :hasNextPage="hasNextPage"
        @changePage="changePage"
        @nextPage="nextPage"
        @previousPage="previousPage"
      />
    </ActionStateHandler>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  width: 100%;
  max-width: $br-desktop;
  margin: auto;
}
</style>
