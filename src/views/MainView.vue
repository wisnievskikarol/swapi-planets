<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import PlanetList from '@/components/PlanetList.vue'
import Pagination from '@/components/Pagination.vue'
import ActionStateHandler from '@/components/ActionStateHandler.vue'

import { usePlanetStore } from '@/stores/planets'
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

const handleFetch = () => {
  if (filterText.value) {
    searchPlanets(filterText.value)
  } else {
    fetchPlanets()
  }
}

onMounted(() => {
  fetchPlanets()
})

watch([filterText, currentPage], ([newFilterText, newPage], [oldFilterText, oldPage]) => {
  if (newFilterText !== oldFilterText || newPage !== oldPage) {
    handleFetch()
  }
})
</script>

<template>
  <div class="main-view">
    <SearchBar v-model="filterText" />
    <ActionStateHandler :state="fetchState" @retry="handleFetch">
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
.main-view {
  width: 100%;
  max-width: $br-desktop;
  margin: auto;
}
</style>
