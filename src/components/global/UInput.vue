<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const emits = defineEmits(['update:modelValue'])

const { modelValue } = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator: (val) => ['text', 'textarea', 'password', 'tel', 'email', 'search'].includes(val)
  }
})

const value = ref(modelValue)

watch(value, () => {
  emits('update:modelValue', value)
})
</script>
<template>
  <div>
    <input
      v-if="type !== 'textarea'"
      :type="text"
      :placeholder="placeholder"
      class="form-control mb-3"
      v-model="value"
    />

    <textarea
      v-else
      rows="5"
      class="form-control mb-3"
      placeholder="Что понравилось, а что нет?"
      v-model="value"
    ></textarea>
  </div>
</template>
