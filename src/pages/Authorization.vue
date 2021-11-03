<template>
  <div class="registration">
    <div class="container">
      <AuthorizationForm/>
    </div>
  </div>
</template>
<script>
import AuthorizationForm from 'components/AuthorizationForm'

export default {
  name: 'Registration',
  components: { AuthorizationForm }
}
</script>