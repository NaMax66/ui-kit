<script lang="ts" setup>
import { ref, toValue } from 'vue'
import FormNative from '@/components/Forms/FormNative/FormNative.vue'
import SelectNative from '@/components/Forms/FormNative/inputs/SelectNative.vue'
import InputNative from '@/components/Forms/FormNative/inputs/InputNative.vue'
import type { Option } from '@/components/Forms/FormNative/inputs/Option'
import { InputType } from '@/components/Forms/FormNative/inputs/InputType'

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
    type: InputType.SEARCH,
    isRequired: false,
    placeholder: 'Search',
    value: ''
  },
  {
    type: InputType.EMAIL,
    isRequired: false,
    placeholder: 'fox@forest.net',
    value: ''
  },
  {
    type: InputType.TIME,
    isRequired: false,
    value: ''
  },
  {
    type: InputType.MONTH,
    isRequired: false,
    value: ''
  },
  {
    type: InputType.DATE_TIME,
    isRequired: false,
    value: ''
  },
  {
    type: InputType.URL,
    isRequired: false,
    pattern: 'https://.*|http://.*',
    placeholder: 'https://example.com',
    value: ''
  },
])

function onSubmit() {
  console.log(toValue(season))

  for(let input of inputs.value) {
    if(input.value) {
      console.log(input.value)
    }
  }
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

    <div class="d-flex g-1 align-center mt-auto pt-2">
      <button class="fs-2 p-1" type="submit">Submit</button>
      <p>Open the console to see the result</p>
    </div>
  </form-native>
</template>
