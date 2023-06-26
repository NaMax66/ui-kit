
<script lang="ts" setup>
import FormNative from '@/components/Forms/FormNative/FormNative.vue'
import SelectNative from '@/components/Forms/FormNative/inputs/SelectNative.vue'
import { Option } from '@/components/Forms/FormNative/inputs/Option'
import InputNative from "@/components/Forms/FormNative/inputs/InputNative.vue";
import BaseLabel from "@/components/Forms/_shared/BaseLabel.vue";

const firstSelectOptions: Option[] = [
  { title: 'First', uniqueKey: 1, value: 'first' },
  { title: 'Second', uniqueKey: 2, value: 'second' },
  { title: 'Third', uniqueKey: 3, value: 'third' },
  { title: 'Fourth', uniqueKey: 4, value: 'fourth' },
  { title: 'Fifth', uniqueKey: 5, value: 'fifth', isDisabled: true },
]

const EMPTY_OPTION_FIRST =
  { uniqueKey: -1, isDisabled: true, title: 'not selected', value: '' }

function onSubmit(e: Event) {
  e.preventDefault()
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  console.log('----------------------')
  for(const key of formData.keys()) {
    console.log(`${key}: ${formData.get(key)}(type: ${typeof formData.get(key)})`)
  }
}

const names = {
  selectSingle: 'select_single',
  inputString: 'input_string',
  inputNumber: 'input_number'
}
</script>

<template>
  <div class="mt-3">
    <form-native @submit="onSubmit">
      <h3 class="heading-3 mb-3">Native form</h3>
      <base-label class="d-block mb-1" :for="names.selectSingle">{{ names.selectSingle }}</base-label>
      <select-native
        :id="names.selectSingle"
        :name="names.selectSingle"
        :options="firstSelectOptions"
        :initialOptionKey="EMPTY_OPTION_FIRST.uniqueKey"
        :empty-option="EMPTY_OPTION_FIRST"
      />
      <base-label class="d-block mb-1 mt-3" :for="names.inputString">{{ names.inputString }}</base-label>
      <input-native :id="names.inputString" :name="names.inputString" value="1" />

      <base-label class="d-block mb-1 mt-3" :for="names.inputNumber">{{ names.inputNumber }}</base-label>
      <input-native step=".01" type="number" :id="names.inputNumber" :name="names.inputNumber" :value="1" />

      <label class="d-block mt-3">
        <button type="submit">Submit</button>
      </label>
    </form-native>
  </div>
</template>

<style scoped>

</style>
