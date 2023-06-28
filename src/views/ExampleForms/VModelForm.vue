<script lang="ts" setup>
import { ref, toValue } from 'vue'
import FormNative from '@/components/Forms/FormNative/FormNative.vue'
import SelectNative from '@/components/Forms/FormNative/inputs/SelectNative.vue'
import InputNative from '@/components/Forms/FormNative/inputs/InputNative.vue'
import { Option } from '@/components/Forms/FormNative/inputs/Option'

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
const mail = ref(null)

function onSubmit() {
  console.log(toValue(season), `is ${typeof toValue(season)}`)
  console.log(toValue(mail), `is ${typeof toValue(mail)}`)
}
</script>

<template>
  <form-native class="d-flex flex-column align-start" @submitForm="onSubmit">
    <h3 class="heading-3">VModel form</h3>
    <small>Great for the easy to understand dataflow. Native validation still works</small>
    <p class="mb-3">Data flows from inputs</p>
    <select-native class="mb-3" required v-model="season" :options="seasons" />
    <input-native required type="email" v-model="mail" />

    <div class="d-flex g-1 align-center mt-auto pt-2">
      <button class="fs-2 p-1" type="submit">Submit</button>
      <p>Open the console to see the result</p>
    </div>
  </form-native>
</template>
