<script lang="ts" setup>
import type { Planet } from '@/types'

const props = defineProps<{
  planet: Planet
}>()

const creationDate = () => {
  const date = new Date(props.planet.created)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
</script>

<template>
  <div class="planet-card">
    <p class="planet-card__title">{{ planet.name }}</p>
    <ul class="planet-card__details">
      <li class="planet-card__detail--item">Population: {{ planet.population }}</li>
      <li class="planet-card__detail--item">Rotation Period: {{ planet.rotation_period }}</li>
      <li class="planet-card__detail--item">Climate: {{ planet.climate }}</li>
      <li class="planet-card__detail--item">Gravity: {{ planet.gravity }}</li>
      <li class="planet-card__detail--item">Created: {{ creationDate() }}</li>
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
  background-color: $color-background-primary;

  &__title {
    font-family: 'Orbitron';
    font-size: $font-size-title;
    font-weight: 600;
    color: $color-primary;
    margin-bottom: 10px;
    text-align: center;
  }

  &__details {
    list-style-type: none;
    padding: 0;
    margin: 0;
    line-height: 30px;

    &__detail--item {
      font-size: $font-size-detail;
      color: $color-secondary;
      margin: 5px 0;
      padding: 5px;
      background-color: #ffffff;
      border-left: 4px solid $color-primary;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  &__link {
    color: $color-accent;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $color-accent-hover;
    }
  }
}
</style>
