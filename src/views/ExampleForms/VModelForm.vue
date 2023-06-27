<script lang="ts" setup>
import FormNative from '@/components/Forms/FormNative/FormNative.vue'
import SelectNative from '@/components/Forms/FormNative/inputs/SelectNative.vue'
import { ref, toValue } from 'vue'
import { Option } from '@/components/Forms/FormNative/inputs/Option'

const options: Option[] = [
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

const selected = ref(options[1])

function onSubmit() {
  console.log(toValue(selected))
}
</script>

<template>
  <form-native class="d-flex flex-column align-start" @submitForm="onSubmit">
    <h3 class="heading-3">VModel form</h3>
    <p class="mb-3">Data flows from inputs</p>
    <select-native v-model="selected" :options="options" />

    <div class="d-flex g-1 align-center mt-auto">
      <button class="fs-2 p-1" type="submit">Submit</button>
      <p>Open the console to see the result</p>
    </div>
  </form-native>
</template>
