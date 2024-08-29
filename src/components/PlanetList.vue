<script lang="ts" setup>
import PlanetCard from './PlanetCard.vue'
import type { Planet } from '@/types'

defineProps<{
  planets: Planet[]
}>()
</script>

<template>
  <div class="list">
    <PlanetCard v-for="planet in planets" :key="planet.url" :planet="planet" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  gap: 20px;
  padding: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: $breakpoint-desktop) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
