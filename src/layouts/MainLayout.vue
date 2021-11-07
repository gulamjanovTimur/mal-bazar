<template>
  <q-layout class="main-layout" view="hHh lpR fff">
    <q-header>
      <div class="container">
        <Header/>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="main-layout__footer">
      <div class="container">
        <Footer/>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>

import Header from 'components/Header'
import Footer from 'components/Footer'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  },
  data() {
    return {

    }
  },


}
</script>
