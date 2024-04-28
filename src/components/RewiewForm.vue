<script>
import { reactive, computed, defineComponent } from 'vue'
import axios from 'axios'

import UButton from './UButton.vue'

export default defineComponent({
  name: 'RewiewForm',

  components: {
    UButton
  },
  setup() {
    const rewiew = reactive({
      autor: '',
      stars: null,
      text: '',
      photo: null,
      isRecommended: true
    })

    const stars = [1, 2, 3, 4, 5]

    const submit = () => {
      console.log('submit')

      axios
        .post('/api/rewiew', rewiew, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          console.log('finally')
        })
    }
    return { rewiew, submit, stars }
  }
})
</script>
<template>
  <form @submit.prevent.stop="submit" class="container pt-5 pb-5">
    <UInput v-model="rewiew.autor" placeholder="Как вас зовут?" />

    <UInput type="textarea" v-model="rewiew.text" placeholder="Что понравилось, а что нет?" />

    <h4>Оценка:</h4>
    <div v-for="star in stars" :key="star" class="form-check">
      <input
        v-model="rewiew.stars"
        class="form-check-input"
        type="checkbox"
        :true-value="star"
        :falsee-value="null"
        :id="`star${star}`"
      />
      <label :for="`star${star}`" class="form-check-label">{{ star }}</label>
    </div>
    <!-- form-check photo-->
    <UFile v-model="rewiew.photo" label="Фото" />
    <!-- radio -->
    <div class="form-check">
      <input
        v-model="rewiew.isRecommended"
        :value="false"
        class="form-check-input"
        type="radio"
        id="adv1"
      />
      <label class="form-check-label" for="adv1"> Не советую </label>
    </div>
    <!-- form-check -->
    <div class="form-check">
      <input
        v-model="rewiew.isRecommended"
        :value="true"
        class="form-check-input"
        type="radio"
        id="adv2"
      />
      <label class="form-check-label" for="adv2"> Советую </label>
    </div>

    <UButton>Отправить!</UButton>
  </form>
</template>
