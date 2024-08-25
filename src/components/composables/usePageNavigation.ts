import { computed, type Ref } from 'vue'

export function usePageNavigation(
  totalPages: Ref<number>,
  currentPage: Ref<number>,
  changePage: (page: number) => void
) {
  const hasNextPage = computed(() => currentPage.value < totalPages.value)
  const hasPreviousPage = computed(() => currentPage.value > 1)

  function nextPage() {
    if (hasNextPage.value) {
      changePage(currentPage.value + 1)
    }
  }

  function previousPage() {
    if (hasPreviousPage.value) {
      changePage(currentPage.value - 1)
    }
  }

  return {
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage
  }
}
