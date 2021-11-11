<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/" class="header-logo header-right__logo">
        <img src="static/icons/logo.png" alt="logo">
      </router-link>
      <div class="header-lang header-right__lang">
        <div @click="() => changeLang('ru')" :class="{'header-lang__item_active':selectedLang === 'ru'}" class="header-lang__item">RU</div>
        <div @click="() => changeLang('kg')" :class="{'header-lang__item_active':selectedLang === 'kg'}" class="header-lang__item">KG</div>
      </div>
    </div>
    <div class="header-right">
      <div v-if="!auth.status" class="header-auth header-right__auth">
        <router-link to="/sign-in" active-class="route_active" class="header-auth__item">{{$t('ENTRY')}}</router-link>
        <router-link to="/sign-up" active-class="route_active" class="header-auth__item">{{$t('SIGN_UP')}}</router-link>
      </div>
      <q-btn color="secondary" class="header-right__create" :label="$t('CREATE_ARTICLE')"/>
      <q-icon class="header-right__mobile" @click="() => modalOpen = true" size="38px" name="menu" />
      <template v-if="auth.status">
        <div class="header-right__profile">П</div>
        <q-icon class="cursor-pointer" @click="() => logOut()" color="secondary" size="40px" name="logout"/>
      </template>
      
    </div>
    <Modal headerTitle="Меню" v-model="modalOpen">
      <div class="header-mobile">
        <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/sign-in">{{$t('ENTRY')}}</router-link>
        <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/sign-up">{{$t('SIGN_UP')}}</router-link>
        <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/create">{{$t('CREATE_ARTICLE')}}</router-link>
        <div class="header-lang header-mobile__lang">
          <div @click="() => changeLang('ru')" :class="{'header-lang__item_active':selectedLang === 'ru'}" class="header-lang__item">RU</div>
          <div @click="() => changeLang('kg')" :class="{'header-lang__item_active':selectedLang === 'kg'}" class="header-lang__item">KG</div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from 'components/Modal'
import { mapState, mapMutations } from 'vuex'
import { showNotification } from 'src/utils'
export default {
  name: 'Header',
  components: { Modal },
  data() {
    return {
      selectedLang: 'ru',
      modalOpen: false
    }
  },
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  methods: {
    ...mapMutations(['updateAuth']),
    changeLang(newLang){ 
      this.selectedLang = newLang
      localStorage.setItem('lang', newLang)
      this.$i18n.locale = newLang
    },
    logOut() {
      showNotification('positive', 'Вы успешно вышли из системы')
      localStorage.removeItem('sessionKey')
      this.updateAuth({status: false, sessionKey: ''})
    }
  },
  mounted() {
    if(!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'ru')
    } else {
      this.$i18n.locale = localStorage.getItem('lang')
      this.selectedLang = this.$i18n.locale
    }
  }
}
</script>