<script lang="ts" setup>
import PlanetCard from './PlanetCard.vue'
import type { Planet } from '@/types'

defineProps<{
  planets: Planet[]
}>()
</script>

<template>
  <div class="planet-list">
    <PlanetCard v-for="planet in planets" :key="planet.url" :planet="planet" />
  </div>
</template>

<style lang="scss" scoped>
.planet-list {
  gap: 20px;
  padding: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
}

@media (min-width: 800px) {
  .planet-list {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>
