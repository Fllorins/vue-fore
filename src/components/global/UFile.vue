<script setup>
import { computed, ref, defineProps, defineEmits, watch } from 'vue'

const emits = defineEmits(['update:modelValue'])

const { modelValue } = defineProps({
  modelValue: Array,
  label: String
})
const value = ref(modelValue)
const uploadedFile = (e) => {
  const [file] = e.target.files
  value.value = file
}

const previewFile = computed(() => {
  if (value.value) {
    return URL.createObjectURL(value.value)
  }
  return '#'
})

watch(value, () => {
  emits('update:modelValue', value.value)
})
</script>
<template>
  <div class="mb-3 mt-3">
    <label class="form-label">{{ label }}</label>
    <input @change="uploadedFile" type="file" class="form-control" />
    <img :src="previewFile" class="w-25" />
  </div>
</template>
