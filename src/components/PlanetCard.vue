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
  <div class="card">
    <p class="card__title">{{ planet.name }}</p>
    <ul class="card__list">
      <li class="card__item">Population: {{ planet.population }}</li>
      <li class="card__item">Rotation Period: {{ planet.rotation_period }}</li>
      <li class="card__item">Climate: {{ planet.climate }}</li>
      <li class="card__item">Gravity: {{ planet.gravity }}</li>
      <li class="card__item">Created: {{ creationDate() }}</li>
      <li class="card__item">
        URL:
        <a :href="planet.url" target="_blank" class="card__link">{{ planet.url }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.card {
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

  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    line-height: 30px;
  }

  &__item {
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
