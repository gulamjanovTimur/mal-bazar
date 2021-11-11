<template>
  <form @submit.prevent="() => handleRegistration()" class="registration-form">
    <div class="registration-form__title">{{$t('SIGN_UP')}}</div>
    <q-input
      ref="phone"
      :rules="[val => !!val || this.$t('VAL_REQUIRED'), val => val.length === 10 || this.$t('VAL_PHONE')]"
      mask="#(###)##-##-##"
      v-model="phone"
      class="registration-form__field"
      :label="$t('ENTER_PHONE_NUMBER')"
      outlined
      unmasked-value
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
import { mapActions, mapMutations, mapState } from 'vuex'
import CustomBtn from 'components/CustomBtn'
import { showNotification } from 'src/utils'

export default {
  name: 'RegistrationForm',
  components: {
    CustomBtn
  },
  props: ['step'],
  data() {
    return {
      rePassword: '',
      isPwd: true,
    }
  },
  computed: {
    ...mapState({
      signUp: state => state.user.signUp
    }),
    phone: {
      get () {
      return this.signUp.phoneNumber
      },
      set (value) {
        this.updateSignUpPhone(value)
      }
    },
    password: {
      get () {
      return this.signUp.password
      },
      set (value) {
        this.updateSignUpPassword(value)
      }
    },
  },
  methods: {
    ...mapActions([
      'checkNumber',
      'sendOtpToClient'
    ]),
    ...mapMutations([
      'updateSignUpPhone',
      'updateSignUpPassword',
    ]),
    handleRegistration() {
      this.$refs.phone.validate()
      this.$refs.password.validate()
      this.$refs.rePassword.validate()
      if (!this.$refs.phone.hasError && !this.$refs.password.hasError && !this.$refs.rePassword.hasError) {
        this.checkNumber(this.phone).then((res) => {
          if(res.success) {
            this.sendOtpToClient(this.phone).then((res) => {
              this.$emit('update:step', 2)
            })
          } else {
            showNotification('negative', res.error.data[this.$i18n.locale])
          }
        })
      }
    }
  }
}
</script>

