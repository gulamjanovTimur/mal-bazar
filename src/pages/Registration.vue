<template>
  <div class="registration">
    <div class="container">
      <RegistrationForm v-if="step === 1" v-model:step="step" class="registration__form"/>
      <ConfirmOtp class="registration__otp" v-else/>
    </div>
  </div>
</template>
<script>
import RegistrationForm from 'components/RegistrationForm'
import ConfirmOtp from 'src/components/ConfirmOtp.vue'

export default {
  name: 'Registration',
  components: { RegistrationForm, ConfirmOtp },
  data() {
    return {
      step: 1
    }
  },
}
</script>