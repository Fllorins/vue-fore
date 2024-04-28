import UInput from './UInput.vue'
import UFile from './UFile.vue'

// import UButton from './UButton.vue'

const components = [
  { name: 'UInput', component: UInput },
  { name: 'UFile', component: UFile }
]
export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
