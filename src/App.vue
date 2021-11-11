<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'App',
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  methods: {
    ...mapMutations(['updateAuth'])
  },
  mounted() {
    if(localStorage.getItem('sessionKey')) {
      this.updateAuth({
        status: true,
        sessionKey: localStorage.getItem('sessionKey')
      })
    }
  }
})
</script>
