<template>
  <div class="footer">
    <div class="footer__logo footer-logo">
      <router-link to="/" class="footer-logo__img">
        <img src="static/icons/logo.png" alt="Лого">
      </router-link>
      <router-link to="/" class="footer-logo__link">Mal.kg</router-link>
      <div class="footer-logo__rights">© 2022 Все права защищены</div>
    </div>
    <div class="footer__app footer-app">
      <div class="footer-app__img"><img src="static/icons/app.jpg" alt="Скачать приложение"></div>
      <div class="footer-app__text">Бесплатное приложение<br>для твоего телефона</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>