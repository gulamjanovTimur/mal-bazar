<template>
  <div class="container">
    <div class="office">
      <q-list bordered class="office__nav office-nav">
        <q-item exact to="/office" class="office-nav__item" clickable v-ripple>
          <q-item-section>
            Пользователь
          </q-item-section>
        </q-item>

        <q-item exact to="/office/posts" class="office-nav__item" clickable v-ripple>
          <q-item-section>
            Объявления
          </q-item-section>
        </q-item>

        <q-item exact to="/office/chats" class="office-nav__item" clickable v-ripple>
          <q-item-section>
            Сообщения
          </q-item-section>
        </q-item>

        <q-item class="office-nav__item" clickable v-ripple>
          <q-item-section>
            Настройки
          </q-item-section>
        </q-item>
      </q-list>
      <div class="office__main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Office',
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  mounted() {
    if(!this.auth.status) {
      this.$router.push('/')
    }
  }
}
</script>