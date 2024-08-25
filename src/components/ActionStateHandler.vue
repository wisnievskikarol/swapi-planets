<script lang="ts" setup>
import type { ActionState } from '@/stores/utils'
import { defineProps, defineEmits } from 'vue'

defineProps<{
  state: ActionState
}>()

const emit = defineEmits<{
  retry: []
}>()
</script>

<template>
  <div>
    <template v-if="state.status === 'active'">
      <p>Loading...</p>
    </template>
    <template v-else-if="state.status === 'failed'">
      <p>Error: {{ state.error.message }}</p>
      <button @click="emit('retry')">Retry</button>
    </template>
    <template v-else-if="state.status === 'succeeded'">
      <slot></slot>
    </template>
  </div>
</template>
