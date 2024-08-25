<script lang="ts" setup>
const modelValue = defineModel<string>()
</script>

<template>
  <input type="text" v-model="modelValue" placeholder="Search planets..." />
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
