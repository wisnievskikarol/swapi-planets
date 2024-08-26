<script setup lang="ts" />

<template>
  <div class="not-found">
    <h1 class="not-found__heading">This is a not found page</h1>
    <RouterLink to="/" class="not-found__link"> Home </RouterLink>
  </div>
</template>

<style lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;

  &__heading {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  &__link {
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
}
</style>
