<template>
  <form @submit.prevent="() => confirm()" class="registration-form">
    <div class="registration-form__title">Подтверждение</div>
    <q-input
      v-model="otp"
      class="registration-form__field"
      label="Введите код из смс"
      outlined
    />
    <CustomBtn :isLoading="isLoading" class="registration-form__btn" name="ПОДТВЕРДИТЬ"/>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { showNotification } from 'src/utils'

export default {
  name: 'ConfirmOtp',
  props: ['phoneNumber', 'password'],
  data() {
    return {
      otp: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'confirmOtp'
    ]),
    confirm() {
      this.isLoading = true
      this.confirmOtp({phoneNumber: this.phoneNumber, password: this.password, otp: this.otp}).then((res) => {
        if(res.success) {
          this.isLoading = true
            showNotification('positive', 'Регистрация прошла успешно') // TODO: translate
            this.$router.push({path: '/sign-in'}) //TODO: sign-in auto
        }else{
          showNotification('negative', res.error.data[this.$i18n.locale])
        }
      }).finally(() => this.isLoading = false)
    }
  }
}
</script>