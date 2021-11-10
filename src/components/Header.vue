<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/" class="header-logo header-right__logo">
        <img src="static/icons/logo.png" alt="logo">
      </router-link>
      <div class="header-lang header-right__lang">
        <div @click="() => changeLang('ru')" :class="{'header-lang__item_active':selectedLang === 'ru'}" class="header-lang__item">РУС</div>
        <div @click="() => changeLang('kg')" :class="{'header-lang__item_active':selectedLang === 'kg'}" class="header-lang__item">КЫРГ</div>
      </div>
    </div>
    <div class="header-right">
      <div class="header-auth header-right__auth">
        <router-link to="/authorization" active-class="route_active" class="header-auth__item">{{$t('ENTRY')}}</router-link>
        <router-link to="/registration" active-class="route_active" class="header-auth__item">{{$t('SIGN_UP')}}</router-link>
      </div>
      <q-btn color="secondary" class="header-right__create" :label="$t('CREATE_ARTICLE')"/>
      <q-icon class="header-right__mobile" @click="() => modalOpen = true" size="38px" name="menu"></q-icon>
    </div>
    <Modal headerTitle="Меню" v-model="modalOpen">
      <div class="header-mobile">
        <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/authorization">Войти</router-link>
        <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/registration">Регистрация</router-link>
        <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/create">Подать объявление</router-link>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from 'components/Modal'
export default {
  name: 'Header',
  components: { Modal },
  data() {
    return {
      selectedLang: 'ru', //KG or RU
      modalOpen: false
    }
  },
  methods: {
    changeLang(newLang){ 
      this.selectedLang = newLang
      localStorage.setItem('lang', newLang)
      this.$i18n.locale = newLang
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