import CustomBtn from '../components/CustomBtn.vue'
import Modal from '../components/Modal.vue'

export default ({ app }) => {
  app.component('CustomBtn', CustomBtn)
  app.component('Modal', Modal)
}