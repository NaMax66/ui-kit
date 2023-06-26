<script setup lang="ts">
import type { TFormData } from '@/components/Forms/FormNative/TFormData'

const emit = defineEmits<{
  submitForm: [data: TFormData]
}>()

function onSubmit(e: Event) {
  e.preventDefault()

  const formData = new FormData(e.target as HTMLFormElement)

  const result: TFormData = {}
  for(const key of formData.keys()) {
    let value = formData.getAll(key)

    if(value.length === 1) {
      result[key] = value[0]
    } else {
      result[key] = value
    }
  }
  emit('submitForm', result)
}
</script>

<template>
  <form @submit="onSubmit" class="form-native">
    <slot></slot>
  </form>
</template>

<style scoped>
.form-native {
  border: 1px solid var(--color-border);
  border-radius: var(--default-b-radius);
  padding: 1rem;
}
</style>
