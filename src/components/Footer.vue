<template>
  <div class="footer">
    <div class="footer__logo footer-logo">
      <router-link to="/" class="footer-logo__img">
        <img src="static/icons/logo.png" alt="Лого">
      </router-link>
      <router-link to="/" class="footer-logo__link">Mal.kg</router-link>
      <div class="footer-logo__rights">{{$t('RIGHTS')}}</div>
    </div>
    <div class="footer__app footer-app">
      <div class="footer-app__img"><img src="static/icons/app.jpg" alt="Скачать приложение"></div>
      <div class="footer-app__text">{{$t('DOWNLOAD_APP')}}</div>
    </div>
  </div>
  <!-- BOTTOM NAVIGATION CORDOVA -->
  <!-- <div class="footer-mobile">
    <router-link :to="el.path" :key="index" v-for="(el, index) in mobileItems" class="footer-mobile__item footer-mobile-item">
      <div class="footer-mobile-item__text">{{el.text}}</div>
      <div class="footer-mobile-item__icon">
        <img :src="`static/icons/${el.icon}`" alt="Лого">
      </div>
    </router-link>
  </div> -->
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      // BOTTOM NAVIGATION CORDOVA
      // mobileItems: [
      //   {
      //     text: 'Главная',
      //     icon: 'logo.png',
      //     path: '/'
      //   },
      //   {
      //     text: 'Главная',
      //     icon: 'logo.png',
      //     path: '/'
      //   },
      //   {
      //     text: 'Главная',
      //     icon: 'logo.png',
      //     path: '/'
      //   },
      //   {
      //     text: 'Главная',
      //     icon: 'logo.png',
      //     path: '/'
      //   },
      // ]
    }
  }
}
</script>