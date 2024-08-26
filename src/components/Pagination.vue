<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps<{
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  currentPage: number
}>()

const { totalPages, hasPreviousPage, hasNextPage, currentPage } = toRefs(props)

const emit = defineEmits<{
  changePage: [page: number]
  nextPage: []
  previousPage: []
}>()
</script>

<template>
  <div class="pagination">
    <button
      class="button"
      :class="hasPreviousPage ? 'button--navigation' : 'button--disabled'"
      :disabled="!hasPreviousPage"
      @click="emit('previousPage')"
    >
      Previous
    </button>
    <button
      class="button"
      v-for="page in totalPages"
      :key="page"
      :class="{ 'button--active': page === currentPage }"
      @click="emit('changePage', page)"
    >
      {{ page }}
    </button>
    <button
      class="button"
      :class="hasNextPage ? 'button--navigation' : 'button--disabled'"
      :disabled="!hasNextPage"
      @click="emit('nextPage')"
    >
      Next
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  margin: 30px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}

@media (min-width: $br-mobile) {
  .pagination {
    gap: 10px;
    flex-direction: row;
  }
}
</style>
