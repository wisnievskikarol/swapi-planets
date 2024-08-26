<script lang="ts" setup>
import type { ActionState } from '@/store/utils'
import { defineProps, defineEmits } from 'vue'

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
  border-radius: 8px;

  @media (max-width: $br-mobile) {
    padding: 8px;
  }

  @media (min-width: $br-desktop) {
    padding: 24px;
  }
}

.text {
  font-size: $font-detail;

  &--loading {
    color: $quite-black;
  }

  &--error {
    color: $link-color;
  }
}
</style>
