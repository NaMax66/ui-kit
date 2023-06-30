<script lang="ts" setup>
import { ref, toValue } from 'vue'
import FormNative from '@/components/Forms/FormNative/FormNative.vue'
import SelectNative from '@/components/Forms/Inputs/SelectNative.vue'
import InputNative from '@/components/Forms/Inputs/InputNative.vue'
import type { Option } from '@/components/Forms/Inputs/Option'
import { InputNativeType } from '@/components/Forms/Inputs/InputNativeType'
import RadioSelect from "@/components/Forms/Inputs/RadioSelect.vue";

const seasons: Option[] = [
    {
      value: 'summer_val',
      title: 'Summer',
      uniqueKey: 1
    },
    {
      value: 'autumn_val',
      title: 'Autumn',
      uniqueKey: 2
    },
    {
      value: 'winter_val',
      title: 'Winter',
      uniqueKey: 3
    },
    {
      value: 'spring_val',
      title: 'Spring',
      uniqueKey: 4
    }
  ]

const season = ref(seasons[1])

const inputs = ref([
  {
    type: InputNativeType.SEARCH,
    isRequired: false,
    placeholder: 'Search',
    value: ''
  },
  {
    type: InputNativeType.EMAIL,
    isRequired: false,
    placeholder: 'fox@forest.net',
    value: ''
  },
  {
    type: InputNativeType.TIME,
    isRequired: false,
    value: ''
  },
  {
    type: InputNativeType.MONTH,
    isRequired: false,
    value: ''
  },
  {
    type: InputNativeType.DATE_TIME,
    isRequired: false,
    value: ''
  },
  {
    type: InputNativeType.URL,
    isRequired: false,
    pattern: 'https://.*|http://.*',
    placeholder: 'https://example.com',
    value: ''
  },
])

const radioGroup: Option[] = [
  { title: 'Bread', uniqueKey: 1, value: 'bread' },
  { title: 'Cheese', uniqueKey: 2, value: 'cheese' },
  { title: 'Butter', uniqueKey: 3, value: 'butter', isDisabled: true },
  { title: 'Lemon', uniqueKey: 4, value: 'lemon' }
]
const radioGroupSelected = ref<Option>()

function onSubmit() {
  console.log(toValue(season))

  for(let input of inputs.value) {
    if(input.value) {
      console.log(input.value)
    }
  }

  console.log(toValue(radioGroupSelected))
}
</script>

<template>
  <form-native class="d-flex flex-column align-start" @submitForm="onSubmit">
    <h3 class="heading-3">VModel form</h3>
    <small>Great for the easy to understand dataflow. Native validation still works</small>
    <p class="mb-3">Data flows from inputs</p>
    <select-native class="mb-1" required v-model="season" :options="seasons" />
    <!--  todo inputs for: radio(radio-group), file, range, tel with mask support  -->
    <input-native
      v-for="(input, index) in inputs"
      v-model="input.value"
      :key="index"
      :required="input.isRequired"
      :type="input.type"
      :pattern="input.pattern"
      :placeholder="input.placeholder"
      class="mb-1"
    />

    <radio-select class="mb-1" :options="radioGroup" v-model="radioGroupSelected" />

    <div class="d-flex g-1 align-center mt-auto pt-2">
      <button class="fs-2 p-1" type="submit">Submit</button>
      <p>Open the console to see the result</p>
    </div>
  </form-native>
</template>
