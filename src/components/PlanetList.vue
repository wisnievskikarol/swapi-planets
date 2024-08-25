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
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
}

@media (min-width: 375px) {
  .planet-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
  }
}
</style>
