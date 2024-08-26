<script lang="ts" setup>
const modelValue = defineModel<string>()
</script>

<template>
  <div class="search">
    <input class="search__input" type="text" v-model="modelValue" placeholder="Search planets..." />
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin: 10px 0;

  &__input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>
