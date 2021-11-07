<template>
  <form @submit.prevent="() => authorization()" class="registration-form">
    <div class="registration-form__title">Вход</div>
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
      :rules="[val => !!val || 'Обязательное поле']"
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
    <CustomBtn class="registration-form__btn" name="ВОЙТИ"/>
  </form>
</template>
<script>
import CustomBtn from 'components/CustomBtn'

export default {
  name: 'AuthorizationForm',
  components: {
    CustomBtn
  },
  data() {
    return {
      phone: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    authorization() {
      this.$refs.phone.validate()
      this.$refs.password.validate()
      if (!this.$refs.phone.hasError && !this.$refs.password.hasError) {
        console.log('ВХОД')
      }
    }
  }
}
</script>