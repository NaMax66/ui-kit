<script lang="ts" setup>
import FormNative from '@/components/Forms/FormNative/FormNative.vue'
import SelectNative from '@/components/Forms/Inputs/SelectNative.vue'
import type { Option } from '@/components/Forms/Inputs/Option'
import InputNative from '@/components/Forms/Inputs/InputNative.vue'
import BaseLabel from '@/components/Forms/_shared/BaseLabel.vue'
import RadioGroup from '@/components/Forms/Inputs/RadioSelect.vue'
import RadioSelect from "@/components/Forms/Inputs/RadioSelect.vue";

const firstSelectOptions: Option[] = [
  { title: 'First', uniqueKey: 1, value: 'first' },
  { title: 'Second', uniqueKey: 2, value: 'second' },
  { title: 'Third', uniqueKey: 3, value: 'third' },
  { title: 'Fourth', uniqueKey: 4, value: 'fourth' },
  { title: 'Fifth', uniqueKey: 5, value: 'fifth', isDisabled: true },
]
const EMPTY_OPTION_FIRST =
  { uniqueKey: -1, isDisabled: true, title: 'not selected', value: '' }

const radioGroup: Option[] = [
  { title: 'Cat', uniqueKey: 1, value: 'cat' },
  { title: 'Fox', uniqueKey: 2, value: 'fox' },
  { title: 'Dog', uniqueKey: 3, value: 'dog' },
  { title: 'Caterpillar', uniqueKey: 4, value: 'ctrpllr' }
]

function onSubmit(data: object) {
  console.log(data)
}

const names = {
  selectSingle: 'select_single',
  selectMultiple: 'select_multiple',
  inputString: 'input_string',
  inputNumber: 'input_number',
  inputFile: 'input_file'
}
</script>

<template>
  <form-native class="d-flex flex-column align-start" @submitForm="onSubmit">
    <h3 class="heading-3">Native form</h3>
    <p class="mb-3">Get all data from <strong>FormData object</strong></p>
    <base-label class="d-block mb-1" :for="names.selectSingle">{{ names.selectSingle }}</base-label>
    <select-native
      :id="names.selectSingle"
      :name="names.selectSingle"
      :options="firstSelectOptions"
      :initialOptionKey="EMPTY_OPTION_FIRST.uniqueKey"
      :empty-option="EMPTY_OPTION_FIRST"
      required
    />

    <base-label class="d-block mb-1 mt-3" :for="names.selectMultiple">{{ names.selectMultiple }}</base-label>
    <select-native
      :id="names.selectMultiple"
      :name="names.selectMultiple"
      :options="firstSelectOptions"
      :initialOptionKey="EMPTY_OPTION_FIRST.uniqueKey"
      :empty-option="EMPTY_OPTION_FIRST"
      multiple
    />

    <base-label class="d-block mb-1 mt-3" :for="names.inputString">{{ names.inputString }}</base-label>
    <input-native required :id="names.inputString" :name="names.inputString" value="Test" />

    <base-label class="d-block mb-1 mt-3" :for="names.inputNumber">{{ names.inputNumber }}</base-label>
    <!-- in FormData number converts to string -->
    <input-native step=".01" type="number" :id="names.inputNumber" :name="names.inputNumber" :value="2" />

    <base-label class="d-block mb-1 mt-3" for="radio-zoo">Zoo</base-label>
    <radio-select required name="radio-zoo" :options="radioGroup" />

    <!-- todo make separate element for a file input -->
    <!-- <base-label class="d-block mb-1 mt-3" :for="names.inputFile">{{ names.inputFile }}</base-label>
    <input-native multiple type="file" :id="names.inputFile" :name="names.inputFile" /> -->

    <div class="d-flex g-1 align-center mt-3">
      <button class="fs-2 p-1 mt-auto" type="submit">Submit</button>
      <p>Open the console to see the result</p>
    </div>
  </form-native>
</template>
