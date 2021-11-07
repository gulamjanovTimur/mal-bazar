<template>
  <form @submit.prevent="() => handleRegistration()" class="registration-form">
    <div class="registration-form__title">Регистрация</div>
    <q-input
      ref="phone"
      :rules="phoneRules"
      mask="#(###)##-##-##"
      v-model="phone"
      class="registration-form__field"
      label="Введите номер телефона"
      outlined
      @update:model-value="() => initPhoneRules()"
    />
    <q-input
      ref="password"
      :rules="[val => !!val || 'Обязательное поле', val => val.length >= 8 || 'Пароль должен состоять минимум из 8 символов']"
      v-model="password"
      :type="isPwd ? 'password' : 'text'"
      class="registration-form__field"
      label="Введите пароль"
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
      :rules="[val => !!val || 'Обязательное поле', val => val === password || 'Пароли не совпадают']"
      v-model="rePassword"
      :type="isPwd ? 'password' : 'text'"
      class="registration-form__field"
      label="Повторите пароль"
      outlined
    >
    </q-input>
    <q-btn size="17px" type="submit" class="registration-form__btn" color="primary">Зарегистрироваться</q-btn>
  </form>
</template>
<script>
import { showNotification } from 'src/utils'
import { mapActions } from 'vuex'

export default {
  name: 'RegistrationForm',
  data() {
    return {
      phone: '',
      password: '',
      rePassword: '',
      isPwd: true,
      error: false,
      phoneRules: [
        val => !!val || 'Обязательное поле',
        val => val.length === 14 || 'Номер телефона должен состоять из 10 цифр'
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
          val => !!val || 'Обязательное поле',
          val => val.length === 14 || 'Номер телефона должен состоять из 10 цифр'
        ]
      }
    },
    handleRegistration() {
      this.$refs.phone.validate()
      this.$refs.password.validate()
      this.$refs.rePassword.validate()
      if (!this.$refs.phone.hasError && !this.$refs.password.hasError && !this.$refs.rePassword.hasError) {
        this.registration({phone_number: this.phone, password: this.password}).then((res) => {
          if(res.success) {
            console.log('STEP 2(OTP)')
          }else{
            this.error = true
            this.phoneRules = [
              val => !!val || 'Обязательное поле',
              val => val.length === 14 || 'Номер телефона должен состоять из 10 цифр',
              val => val >= 0 || res.error.data.ru
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