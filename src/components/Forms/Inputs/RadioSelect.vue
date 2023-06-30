<!-- no need to have a single radio input -->
<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import type { Option, UniqueKey } from "@/components/Forms/Inputs/Option";

  const props = defineProps({
    options: {
      type: Array as PropType<Option[]>,
      default: () => ([])
    },
    modelValue: Object as PropType<Option>,
    name: String,
    required: Boolean
  })

  const emit = defineEmits<
  (e: 'update:modelValue', value: Option) => void
  >()

  const localSelected = ref(props.modelValue)

  function onChange(uniqueKey: UniqueKey) {
    localSelected.value = props.options?.find(el => el.uniqueKey === uniqueKey)

    emit('update:modelValue', localSelected.value)
  }
</script>

<template>
  <div class="radio-select">
    <label class="radio-select__item" v-for="option in options" :key="option.uniqueKey">
      <span :class="['radio-select__label', {disabled: option.isDisabled}]">{{ option.title }}</span>
      <!-- need for native FormData submit and native form validation -->
      <input
        @change="onChange(option.uniqueKey)"
        :checked="option.uniqueKey === localSelected?.uniqueKey"
        :disabled="option.isDisabled"
        type="radio"
        :name="name"
        :required="required"
        :value="localSelected?.value"
      >
    </label>
  </div>
</template>

<style scoped>
.radio-select {
  display: flex;
  gap: 10px;
}

.radio-select__item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.6rem;
  line-height: 1;
}

.radio-select__label.disabled {
  opacity: 0.5;
}

.radio-select input {
  transform: translateY(2px);
}
</style>
