<script lang="ts" setup>
import NativeSubmitForm from '@/views/ExampleForms/NativeSubmitForm.vue'
import VModelForm from '@/views/ExampleForms/VModelForm.vue'
</script>

<template>
  <div class="d-flex flex-column-md mt-3 g-1">
    <v-model-form class="max-width-100 overflow-hidden grow" />
    <native-submit-form class="max-width-100 overflow-hidden grow" />
  </div>
</template>

<style scoped>

</style>
