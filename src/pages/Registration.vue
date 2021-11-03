<template>
  <div class="registration">
    <div class="container">
      <RegistrationForm/>
    </div>
  </div>
</template>
<script>
import RegistrationForm from 'components/RegistrationForm'

export default {
  name: 'Registration',
  components: { RegistrationForm }
}
</script>