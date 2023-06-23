
<script lang="ts" setup>
import FormNative from '@/components/Forms/FormNative/FormNative.vue'
import BaseSelect from '@/components/Forms/FormNative/inputs/SelectNative.vue'
import { Option } from '@/components/Forms/FormNative/inputs/Option'

const firstSelectOptions: Option[] = [
  { title: 'First', uniqueKey: 1, value: 'first' },
  { title: 'Second', uniqueKey: 2, value: 'second' },
  { title: 'Third', uniqueKey: 3, value: 'third' },
  { title: 'Fourth', uniqueKey: 4, value: 'fourth' },
  { title: 'Fifth', uniqueKey: 5, value: 'fifth', isDisabled: true },
]

const selectId = 'test'
const EMPTY_OPTION_FIRST: Option =
  { uniqueKey: -1, isDisabled: true, title: 'not selected', value: '' }

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
        :options="firstSelectOptions"
        :initialOptionKey="firstSelectOptions[1].uniqueKey"
        :empty-option="EMPTY_OPTION_FIRST"
      />
      <div class="d-block mt-3">
        <button type="submit">Submit</button>
      </div>
    </form-native>
  </div>
</template>

<style scoped>

</style>
