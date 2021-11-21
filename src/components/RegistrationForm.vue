<template>
  <form @submit.prevent="() => handleRegistration()" class="registration-form">
    <div class="registration-form__title">{{$t('SIGN_UP')}}</div>
    <q-input
      ref="phone"
      v-model="phone"
      :rules="[val => !!val || this.$t('VAL_REQUIRED'), val => val.length === 10 || this.$t('VAL_PHONE')]"
      mask="#(###)##-##-##"
      class="registration-form__field"
      :label="$t('ENTER_PHONE_NUMBER')"
      outlined
      unmasked-value
    />
    <q-input
      v-model="passwordModel"
      ref="password"
      :rules="[val => !!val || $t('VAL_REQUIRED'), val => val.length >= 8 || $t('VAL_PHONE')]"
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
    <CustomBtn :isLoading="isLoading" class="registration-form__btn" :name="$t('SIGN_UP')"/>
  </form>
</template>
<script>
import { mapActions } from 'vuex'
import { showNotification } from 'src/utils'

export default {
  name: 'RegistrationForm',
  props: ['step', 'password', 'phoneNumber'],
  data() {
    return {
      rePassword: '',
      isPwd: true,
      isLoading: false
    }
  },
  computed: {
    phone: {
      get () {
      return this.phoneNumber
      },
      set (value) {
        this.$emit('update:phoneNumber', value)
      }
    },
    passwordModel: {
      get () {
      return this.password
      },
      set (value) {
        this.$emit('update:password', value)
      }
    },
  },
  methods: {
    ...mapActions([
      'signUp'
    ]),
    handleRegistration() {
      this.$refs.phone.validate()
      this.$refs.password.validate()
      this.$refs.rePassword.validate()
      if (!this.$refs.phone.hasError && !this.$refs.password.hasError && !this.$refs.rePassword.hasError) {
        this.isLoading = true
        this.signUp(this.phone).then((res) => {
          if(res.success) {
            this.$emit('update:step', 2)
          } else {
            showNotification('negative', res.error.data[this.$i18n.locale])
          }
        }).finally(() => this.loading = false)
      }
    }
  }
}
</script>

