<template>
  <form @submit.prevent="() => registration()" class="registration-form">
    <div class="registration-form__title">Регистрация</div>
    <q-input
      ref="phone"
      :rules="[ val => !!val || 'Обязательное поле', val => val.length === 14 || 'Номер телефона должен состоять из 10 цифр']"
      mask="#(###)##-##-##"
      v-model="phone"
      class="registration-form__field"
      label="Введите номер телефона"
      outlined
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
export default {
  name: 'RegistrationForm',
  data() {
    return {
      phone: '',
      password: '',
      rePassword: '',
      isPwd: true
    }
  },
  methods: {
    registration() {
      this.$refs.phone.validate()
      this.$refs.password.validate()
      this.$refs.rePassword.validate()
      if (!this.$refs.phone.hasError && !this.$refs.password.hasError && !this.$refs.rePassword.hasError) {
        console.log('РЕГИСТРАЦИЯ')
      }
    }
  }
}
</script>