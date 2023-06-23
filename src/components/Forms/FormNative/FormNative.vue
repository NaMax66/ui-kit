<template>
  <form class="form-native">
    <slot></slot>
  </form>
</template>
<style scoped>
.form-native {
  border: 1px solid var(--color-border);
  border-radius: 2px;
  padding: 1rem;
}
</style>
