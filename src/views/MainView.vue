<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { usePlanetStore } from '@/store/stores/planets'
import { storeToRefs } from 'pinia'
import { usePageNavigation } from '@/components/composables'
import SearchBar from '@/components/SearchBar.vue'
import PlanetList from '@/components/PlanetList.vue'
import Pagination from '@/components/Pagination.vue'
import ActionStateHandler from '@/components/ActionStateHandler.vue'

const planetStore = usePlanetStore()
const { planets, currentPage, totalPages, fetchState } = storeToRefs(planetStore)
const { fetchPlanets, searchPlanets, changePage } = planetStore
const { hasNextPage, hasPreviousPage, nextPage, previousPage } = usePageNavigation(
  totalPages,
  currentPage,
  changePage
)

const filterText = ref<string>()

const fetchAndSearchPlanets = () => {
  if (filterText.value) {
    searchPlanets(filterText.value)
  } else {
    fetchPlanets()
  }
}

onMounted(fetchPlanets)

watch([filterText, currentPage], fetchAndSearchPlanets)
</script>

<template>
  <div class="panel">
    <SearchBar v-model="filterText" />
    <ActionStateHandler :state="fetchState" @retry="fetchAndSearchPlanets">
      <PlanetList :planets="planets" />
    </ActionStateHandler>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :hasPreviousPage="hasPreviousPage"
      :hasNextPage="hasNextPage"
      @changePage="changePage"
      @nextPage="nextPage"
      @previousPage="previousPage"
    />
  </div>
</template>

<style lang="scss" scoped>
.panel {
  max-width: $breakpoint-desktop;
  margin: auto;
}
</style>
