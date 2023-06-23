
<script lang="ts" setup>
import FormNative from '@/components/Forms/FormNative/FormNative.vue'
import BaseSelect from '@/components/Forms/FormNative/inputs/SelectNative.vue'
import { Option } from '@/components/Forms/FormNative/inputs/Option'

const firstSelectOptions: Option<string>[] = [
  { title: 'First', id: 1, value: 'first' },
  { title: 'Second', id: 2, value: 'Fourth' },
  { title: 'Third', id: 3, value: 'third', isDisabled: true },
  { title: 'Fourth', id: 4, value: 'fourth' },
]

const selectId = 'test'

function onSubmit(e: Event) {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  // getAll for select multiple attr
  console.log(formData.getAll(selectId))
}
</script>

<template>
  <div class="mt-3">
    <form-native @submit="onSubmit">
      <h3 class="heading-3 mb-3">Native form</h3>
      <base-select
        :name="selectId"
        required
        allow-empty
        multiple
        :options="firstSelectOptions"
        :current="firstSelectOptions[0]"
      />
      <button type="submit">Submit</button>
    </form-native>
  </div>
</template>

<style scoped>

</style>
