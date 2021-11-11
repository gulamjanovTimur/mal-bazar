<template>
  <div class="registration">
    <div class="container">
      <AuthorizationForm class="registration__form"/>
    </div>
  </div>
</template>
<script>
import AuthorizationForm from 'components/AuthorizationForm'
import { mapState } from 'vuex'

export default {
  name: 'Registration',
  components: { AuthorizationForm },
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  mounted() {
    if(this.auth.status) {
      this.$router.push('/')
    }
  }
}
</script>