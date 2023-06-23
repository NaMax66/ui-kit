<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { Option } from './Option'

const props = defineProps({
  options: Array as PropType<Option<any>[]>,
  current: {
    type: Object as PropType<Option<any>>
  },
  allowEmpty: {
    type: Boolean,
    default: false
  },
  emptyTitle: {
    type: String,
    default: ''
  }
})

const DEFAULT_OPTION: Option<null> = { title: props.emptyTitle, value: null, id: -1, isDisabled: !props.allowEmpty }

const computedOptions = computed(() => {
  return [DEFAULT_OPTION, ...props.options]
})

const computedCurrent = computed(() => {
  return props.current ? props.current : DEFAULT_OPTION
})
</script>

<template>
  <select class="base-select">
    <option
      v-for="option in computedOptions"
      :value="option.value"
      :key="option.id"
      :selected="option.id === computedCurrent.id"
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
