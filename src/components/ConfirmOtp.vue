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
  methods: {
    confirmOtp() {
      console.log('CONFIRM')
    }
  }
}
</script>