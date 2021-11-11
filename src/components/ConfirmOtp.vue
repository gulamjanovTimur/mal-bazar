<template>
  <form @submit.prevent="() => confirmOtp()" class="registration-form">
    <div class="registration-form__title">Подтверждение</div>
    <q-input
      v-model="otp"
      class="registration-form__field"
      label="Введите код из смс"
      outlined
    />
    <CustomBtn class="registration-form__btn" name="ПОДТВЕРДИТЬ"/>
  </form>
</template>

<script>
import CustomBtn from 'components/CustomBtn'
import { mapActions, mapState } from 'vuex'
import { showNotification } from 'src/utils'

export default {
  name: 'ConfirmOtp',
  components: {
    CustomBtn
  },
  data() {
    return {
      otp: ''
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
      this.sendOtpToServer({phoneNumber: this.signUp.phoneNumber, password: this.signUp.password, otp: this.otp}).then((res) => {
        if(res.success) {
          this.register({phoneNumber: this.signUp.phoneNumber, password: this.signUp.password}).then(() => {
            showNotification('positive', 'Регистрация прошла успешно') // TODO: translate
            this.$router.push({path: '/sign-in'}) //TODO: sign-in auto
          })
        } else {
          showNotification('negative', res.error.data[this.$i18n.locale])
        }
      })
    }
  }
}
</script>