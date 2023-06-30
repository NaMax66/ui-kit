<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { Option, UniqueKey } from './Option'

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    validator(value: unknown): boolean {
      return value?.every(el => typeof el?.value === 'string' && el?.value !== '')
    },
    default: () => ([])
  },
  initialOptionKey: {
    type: Number as PropType<UniqueKey>
  },
  emptyOption: {
    type:  Object as PropType<Option>,
    validator(value: unknown): boolean {
      if(value?.value !== '') {
        throw new Error(`emptyOption.value is '${value?.value}' but must be an empty string!`)
      }
      return true
    },
    default: () => ({ uniqueKey: -1, isDisabled: false, title: '', value: '' })
  },

  modelValue: {
    type: Object as PropType<Option>
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Option): void
}>()

const computedOptions = computed(() => {
  return [props.emptyOption, ...props.options]
})
const initialSelection = computed<Option>(() => {
  return computedOptions.value.find(el => el.uniqueKey === props.modelValue?.uniqueKey) ||
  computedOptions.value.find(el => el.uniqueKey === props.initialOptionKey) || props.emptyOption
})

function onChange(e: Event) {
  const val = (e.target as HTMLSelectElement).value
  emit('update:modelValue', computedOptions.value.find(el => el.value === val))
}
</script>

<template>
  <select class="select-native" @change="onChange">
    <option
      v-for="option in computedOptions"
      :value="option.value"
      :key="option.uniqueKey"
      :selected="option.uniqueKey === initialSelection.uniqueKey"
      :disabled="option.isDisabled"
    >
      {{ option.title }}
    </option>
  </select>
</template>

<style scoped>
.select-native {
  border: none;
  background: var(--color-background);
  padding: 8px 12px;
  border-radius: var(--default-b-radius);
  font-size: var(--fs-main);
  outline: 1px solid var(--color-border);
  transition: outline-width .1s;
}

.select-native:focus-visible {
  outline: 2px solid var(--color-border-hover);
  outline-offset: 1px;
}
</style>
