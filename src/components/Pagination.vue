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
      :class="!hasPreviousPage ? 'button--disabled' : 'button--green'"
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
      :class="!hasNextPage ? 'button--disabled' : 'button--green'"
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 30px;
}

@media (min-width: $breakpoint-mobile) {
  .pagination {
    flex-direction: row;
  }
}
</style>
