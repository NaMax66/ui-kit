<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { Option, UniqueKey } from './Option'

const props = defineProps({
  options: Array as PropType<Option[]>,
  initialOptionKey: {
    type: Object as PropType<UniqueKey>
  },
  emptyOption: {
    type:  Object as PropType<Option>
  }
})

const computedOptions = computed(() => {
  // keep same attitude - return new array in any case
  return props.emptyOption ? [props.emptyOption, ...props.options] : [...props.options]
})
</script>

<template>
  <select class="base-select">
    <option
      v-for="option in computedOptions"
      :value="option.value"
      :key="option.uniqueKey"
      :selected="option.uniqueKey === initialOptionKey"
      :disabled="option.isDisabled"
    >
      {{ option.title }}
    </option>
  </select>
</template>

<style scoped>
.base-select {
  border: none;
  background: var(--color-background);
  padding: 8px 12px;
  border-radius: var(--default-b-radius);
  font-size: var(--fs-main);
  outline: 1px solid var(--color-border);
  transition: outline-width .1s;
}

.base-select:focus-visible {
  outline: 2px solid var(--color-border-hover);
  outline-offset: 1px;
}
</style>
