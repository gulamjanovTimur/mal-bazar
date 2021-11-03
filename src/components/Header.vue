<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/" class="header-logo header__logo">
        <img src="icons/logo.png" alt="logo">
      </router-link>
      <div class="header-lang header__lang">
        <div @click="() => changeLang('KG')" :class="{'header-lang__item_active':selectedLang === 'KG'}" class="header-lang__item">КЫРГ</div>
        <div @click="() => changeLang('RU')" :class="{'header-lang__item_active':selectedLang === 'RU'}" class="header-lang__item">РУС</div>
      </div>
    </div>
    <div class="header-right">
      <div class="header-auth header__auth">
        <router-link to="/authorization" class="header-auth__item">Войти</router-link>
        <router-link to="/registration" class="header-auth__item">Регистрация</router-link>
      </div>
      <q-btn color="secondary" class="header__create" label="Подать объявление"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      selectedLang: 'RU' //KG or RU
    }
  },
  methods: {
    changeLang(newLang){
      this.selectedLang = newLang
    }
  }
}
</script>