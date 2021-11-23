<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

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
      this.getUserInfo().then((res) => {
        if(res.success) {
          this.updateAuth({
            status: true,
            phoneNumber: res.data.phoneNumber,
            username: res.data.username,
            sessionKey: localStorage.getItem('sessionKey')
          })
        }
      })
    }
  }
})
</script>
