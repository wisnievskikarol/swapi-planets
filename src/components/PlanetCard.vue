<script lang="ts" setup>
import type { Planet } from '@/types'

defineProps<{
  planet: Planet
}>()
</script>

<template>
  <div class="planet-card">
    <p class="planet-card__title">{{ planet.name }}</p>
    <ul class="planet-card__details">
      <li class="planet-card__detail--item">Population: {{ planet.population }}</li>
      <li class="planet-card__detail--item">Rotation Period: {{ planet.rotation_period }}</li>
      <li class="planet-card__detail--item">Climate: {{ planet.climate }}</li>
      <li class="planet-card__detail--item">Gravity: {{ planet.gravity }}</li>
      <li class="planet-card__detail--item">
        Created: {{ new Date(planet.created).getDay() }}/{{
          new Date(planet.created).getMonth()
        }}/{{ new Date(planet.created).getFullYear() }}
      </li>
      <li class="planet-card__detail--item">
        URL:
        <a :href="planet.url" target="_blank" class="planet-card__link">{{ planet.url }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.planet-card {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background-color: #f9f9f9;

  &__title {
    font-family: 'Orbitron';
    font-size: $font-title;
    font-weight: 600;
    color: $primary-color;
    margin-bottom: 10px;
    text-align: center;
  }

  &__details {
    list-style-type: none;
    padding: 0;
    margin: 0;
    line-height: 30px;

    &__detail--item {
      font-size: $font-detail;
      color: $secondary-color;
      margin: 5px 0;
      padding: 5px;
      background-color: #ffffff;
      border-left: 4px solid $primary-color;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  &__link {
    color: $link-color;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $link-hover-color;
    }
  }
}

@media (min-width: 375px) {
  .planet-card {
    width: 350px;
  }
}
</style>
