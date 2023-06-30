<script setup lang="ts">
import type { PropType } from 'vue'
import { InputNativeType } from './InputNativeType'

const props = defineProps({
  modelValue: [String, Number],
  type: {
    type: String as PropType<InputNativeType>,
    default: InputNativeType.TEXT,
    validator(value: InputNativeType): boolean {
      return Object.values(InputNativeType).includes(value)
    }
  }
})

const emit = defineEmits<{
  (e:'update:modelValue', value: string | number): void
}>()

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value
  if ([InputNativeType.NUMBER].includes(props.type)) {
    emit('update:modelValue', Number(value))
  } else {
    emit('update:modelValue', value)
  }
}
</script>

<template>
  <input :type="type" @input="onInput" :value="modelValue" class="input-native">
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
