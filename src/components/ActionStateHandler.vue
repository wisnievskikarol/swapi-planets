<script lang="ts" setup>
import type { ActionState } from '@/store/types'

defineProps<{
  state: ActionState
}>()

const emit = defineEmits<{
  retry: []
}>()
</script>

<template>
  <div class="wrapper">
    <template v-if="state.status === 'active'">
      <p class="text text--loading">Loading...</p>
    </template>
    <template v-else-if="state.status === 'failed'">
      <p class="text text--error">Error: {{ state.error.message }}</p>
      <button class="button button--retry" @click="emit('retry')">Retry</button>
    </template>
    <template v-else-if="state.status === 'succeeded'">
      <slot></slot>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  border-radius: $button-radius;
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media (min-width: $breakpoint-desktop) {
    padding: 24px;
  }
}

.text {
  font-size: $font-size-detail;

  &--loading {
    color: $color-dark;
  }

  &--error {
    color: $color-accent;
  }
}

.button--retry {
  background-color: $color-accent;
  color: $color-button-text;
  padding: $button-padding;
  margin: $button-margin;
  border-radius: $button-radius;
}
</style>
