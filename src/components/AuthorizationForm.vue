<template>
  <form @submit.prevent="() => authorization()" class="registration-form">
    <div class="registration-form__title">{{$t('ENTRY')}}</div>
    <q-input
      ref="phone"
      :rules="[ val => !!val || $t('VAL_REQUIRED'), val => val.length === 10 || $t('VAL_PHONE')]"
      mask="#(###)##-##-##"
      unmasked-value
      v-model="phone"
      class="registration-form__field"
      :label="$t('ENTER_PHONE_NUMBER')"
      outlined
    />
    <q-input
      ref="password"
      :rules="[val => !!val || $t('VAL_REQUIRED')]"
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
    <CustomBtn class="registration-form__btn" :name="$t('ENTRY')"/>
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