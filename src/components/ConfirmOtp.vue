<template>
  <form @submit.prevent="() => confirmOtp()" class="registration-form">
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
import { mapActions, mapState } from 'vuex'
import { showNotification } from 'src/utils'

export default {
  name: 'ConfirmOtp',
  data() {
    return {
      otp: '',
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      signUp: state => state.user.signUp
    })
  },
  methods: {
    ...mapActions({
      sendOtpToServer: 'sendOtpToServer',
      register: 'signUp'
    }),
    confirmOtp() {
      this.isLoading = true
      this.sendOtpToServer({phoneNumber: this.signUp.phoneNumber, password: this.signUp.password, otp: this.otp}).then((res) => {
        if(res.success) {
          this.isLoading = true
          this.register({phoneNumber: this.signUp.phoneNumber, password: this.signUp.password}).then(() => {
            showNotification('positive', 'Регистрация прошла успешно') // TODO: translate
            this.$router.push({path: '/sign-in'}) //TODO: sign-in auto
          }).finally(() => this.isLoading = false)
        } else {
          showNotification('negative', res.error.data[this.$i18n.locale])
        }
      }).finally(() => this.isLoading = false)
    }
  }
}
</script>