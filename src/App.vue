<script setup lang="ts">
import StarWars from '@/assets/img/star-wars.webp'
</script>

<template>
  <header class="header">
    <img class="header__img" :src="StarWars" />
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;

  &__img {
    margin: 50px 0;
    width: 100%;
    max-width: 400px;
  }
}
</style>
