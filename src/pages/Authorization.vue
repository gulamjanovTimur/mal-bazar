<template>
  <div class="registration">
    <div class="container">
      <AuthorizationForm class="registration__form"/>
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