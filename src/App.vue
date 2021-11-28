<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import { showNotification } from './utils';

export default defineComponent({
  name: 'App',
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  methods: {
    ...mapActions(['getUserInfo']),
    ...mapMutations(['updateAuth'])
  },
  mounted() {
    if(localStorage.getItem('sessionKey')) {
      this.updateAuth({
        ...this.auth,
        status: true,
      })
      this.getUserInfo().then((res) => {
        if(res.success) {
          this.updateAuth({
            status: true,
            phoneNumber: res.data.phoneNumber,
            username: res.data.username,
            sessionKey: localStorage.getItem('sessionKey')
          })
        } else {
          localStorage.removeItem('sessionKey')
          showNotification('negative', res.error.data[this.$i18n.locale])
          this.updateAuth({
            status: false,
            sessionKey: '',
          })
        }
      })
    }
  }
})
</script>
