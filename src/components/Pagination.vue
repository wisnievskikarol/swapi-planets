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
      class="pagination__button"
      :class="hasPreviousPage ? 'pagination__button--navigation' : 'pagination__button--disabled'"
      :disabled="!hasPreviousPage"
      @click="emit('previousPage')"
    >
      Previous
    </button>
    <button
      class="pagination__button"
      v-for="page in totalPages"
      :key="page"
      :class="{ 'pagination__button--active': page === currentPage }"
      @click="emit('changePage', page)"
    >
      {{ page }}
    </button>
    <button
      class="pagination__button"
      :class="hasNextPage ? 'pagination__button--navigation' : 'pagination__button--disabled'"
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

  &__button {
    padding: 10px 20px;
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    transition: background-color 0.3s;

    &--active {
      background: #0056b3;
      color: white;
      cursor: default;
    }

    &--disabled {
      background-color: gray;
      cursor: not-allowed;
      color: white;
    }

    &--navigation {
      background: green;
      color: white;
      cursor: default;
    }

    &:hover:not(&--disabled) {
      background: #ffef41;
    }
  }
}

@media (min-width: $br-mobile) {
  .pagination {
    gap: 10px;
    flex-direction: row;
  }
}
</style>
