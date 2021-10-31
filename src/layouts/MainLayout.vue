<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <div class="container">
        <Header/>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
        
  </q-layout>
</template>

<script>

import Header from 'components/Header'

export default {
  name: 'MainLayout',
  components: {
    Header
  },
  data() {
    return {

    }
  },


}
</script>
