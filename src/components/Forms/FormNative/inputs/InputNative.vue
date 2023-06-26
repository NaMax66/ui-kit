<script setup lang="ts">

</script>

<template>
  <input class="input-native">
</template>

<style scoped>
.input-native {
  border: none;
  background: var(--color-background);
  padding: 8px 12px;
  border-radius: var(--default-b-radius);
  font-size: var(--fs-main);
  outline: 1px solid var(--color-border);
  transition: outline-width .1s;
}
.input-native:focus-visible {
  outline: 2px solid var(--color-border-hover);
  outline-offset: 1px;
}
</style>
