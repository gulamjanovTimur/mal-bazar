<template>
  <form @submit.prevent="() => handleRegistration()" class="registration-form">
    <div class="registration-form__title">{{$t('SIGN_UP')}}</div>
    <q-input
      ref="phone"
      :rules="phoneRules"
      mask="#(###)##-##-##"
      v-model="phone"
      class="registration-form__field"
      :label="$t('ENTER_PHONE_NUMBER')"
      outlined
      unmasked-value
      @update:model-value="() => initPhoneRules()"
    />
    <q-input
      ref="password"
      :rules="[val => !!val || $t('VAL_REQUIRED'), val => val.length >= 8 || $t('VAL_PHONE')]"
      v-model="password"
      :type="isPwd ? 'password' : 'text'"
      class="registration-form__field"
      :label="$t('ENTER_PASSWORD')"
      outlined
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-input
      ref="rePassword"
      :rules="[val => !!val || $t('VAL_REQUIRED'), val => val === password || $t('VAL_PASSWORD_REPEAT')]"
      v-model="rePassword"
      :type="isPwd ? 'password' : 'text'"
      class="registration-form__field"
      :label="$t('REPEAT_PASSWORD')"
      outlined
    >
    </q-input>
    <CustomBtn class="registration-form__btn" :name="$t('SIGN_UP')"/>
  </form>
</template>
<script>
import { mapActions } from 'vuex'
import CustomBtn from 'components/CustomBtn'

export default {
  name: 'RegistrationForm',
  components: {
    CustomBtn
  },
  props: ['step'],
  data() {
    return {
      phone: '',
      password: '',
      rePassword: '',
      isPwd: true,
      error: false,
      phoneRules: [
        val => !!val || this.$t('VAL_REQUIRED'),
        val => val.length === 10 || this.$t('VAL_PHONE')
      ]
    }
  },
  methods: {
    ...mapActions([
      'registration'
    ]),
    initPhoneRules() {
      if(this.error) {
        this.error = false
        this.phoneRules = [
          val => !!val || this.$t('VAL_REQUIRED'),
          val => val.length === 10 || this.$t('VAL_PHONE')
        ]
      }
    },
    handleRegistration() {
      this.$refs.phone.validate()
      this.$refs.password.validate()
      this.$refs.rePassword.validate()
      if (!this.$refs.phone.hasError && !this.$refs.password.hasError && !this.$refs.rePassword.hasError) {
        this.registration({phoneNumber: this.phone, password: this.password}).then((res) => {
          if(res.success) {
            this.$emit('update:step', 2)
          }else{
            this.error = true
            this.phoneRules = [
              val => !!val || this.$t('VAL_REQUIRED'),
              val => val.length === 10 || this.$t('VAL_PHONE'),
              val => val >= 0 || res.error.data[this.$locale]
            ]
            setTimeout(() => {
              this.$refs.phone.validate()
              this.$refs.phone.focus()
            }, 0);
          }
        })
      }
    }
  }
}
</script>