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
    <CustomBtn :isLoading="isLoading" class="registration-form__btn" :name="$t('ENTRY')"/>
  </form>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
import { showNotification } from 'src/utils'

export default {
  name: 'AuthorizationForm',
  data() {
    return {
      phone: '',
      password: '',
      isPwd: true,
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'signIn'
    ]),
    ...mapMutations(['updateAuth']),
    authorization() {
      this.$refs.phone.validate()
      this.$refs.password.validate()
      if (!this.$refs.phone.hasError && !this.$refs.password.hasError) {
        this.isLoading = true
        this.signIn({phoneNumber: this.phone, password: this.password}).then((res) => {
          if(res.success) {
            showNotification('positive', 'Авторизация прошла успешно') // TODO: translate
            localStorage.setItem('sessionKey', res.data.sessionKey)
            this.updateAuth({status: true, sessionKey: res.data.sessionKey})
            this.$router.push('/')
          } else {
            showNotification('negative', res.error.data[this.$i18n.locale])
          }
        }).finally(() => this.isLoading = false)
      }
    }
  }
}
</script>