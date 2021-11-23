<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/" class="header-left__logo header-logo">
        <img src="static/icons/logo.png" alt="logo">
      </router-link>
      <div class="header-left__lang header-lang">
        <div @click="() => changeLang('ru')" :class="{'header-lang__item_active':selectedLang === 'ru'}" class="header-lang__item">RU</div>
        <div @click="() => changeLang('kg')" :class="{'header-lang__item_active':selectedLang === 'kg'}" class="header-lang__item">KG</div>
      </div>
    </div>
    <div class="header-right">
      <div v-if="!auth.status" class="header-right__auth header-auth">
        <router-link to="/sign-in" class="header-auth__item">{{$t('ENTRY')}}</router-link>
        <router-link to="/sign-up" class="header-auth__item">{{$t('SIGN_UP')}}</router-link>
      </div>
      <q-icon v-if="!auth.status" class="header-right__mobile" @click="() => modalOpen = true" size="38px" name="menu" />
      <div class="header-right__profile header-profile" v-if="auth.status">
        <span class="header-profile__name">{{auth.username || auth.phoneNumber}}</span>
        <q-avatar class="header-profile__avatar" color="secondary">
          <img src="static/images/ishen-soset.jpg" alt="Фото профиля">
        </q-avatar>
        <q-menu fit ref="menu" @update:model-value="(val) => menuToggle = val">
          <q-list class="header-profile__list header-profile-list" style="min-width: 100px">
            <q-item exact to="/office" class="header-profile-list__item" clickable v-close-popup>
              <q-item-section>Личный кабинет</q-item-section>
            </q-item>
            <q-item exact to="/office/chats" class="header-profile-list__item" clickable v-close-popup>
              <q-item-section>Сообщения</q-item-section>
            </q-item>
            <q-separator />
            <q-item class="header-profile-list__item" clickable v-close-popup>
              <q-item-section class="header-right__create" @click="() => $router.push('/create')">
                {{$t('CREATE_ARTICLE')}}
                <!-- <CustomBtn secondary class="header-right__create" :name="$t('CREATE_ARTICLE')"/> -->
              </q-item-section>
            </q-item>
            <q-item @click="() => logOut()" class="header-profile-list__item" clickable v-close-popup>
              <q-item-section>Выход</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        <div :class="{'header-profile__icon_active': menuToggle}" class="header-profile__icon">
          <q-icon class="header-profile__icon" size="md" name="expand_more"/>
        </div>
      </div>
    </div>
    <Modal headerTitle="Меню" v-model="modalOpen">
      <div class="header-mobile">
        <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/sign-in">{{$t('ENTRY')}}</router-link>
        <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/sign-up">{{$t('SIGN_UP')}}</router-link>
        <!-- <router-link @click="() => modalOpen = false" class="header-mobile__item" to="/create">{{$t('CREATE_ARTICLE')}}</router-link> -->
        <div class="header-lang header-mobile__lang">
          <div @click="() => changeLang('ru')" :class="{'header-lang__item_active':selectedLang === 'ru'}" class="header-lang__item">RU</div>
          <div @click="() => changeLang('kg')" :class="{'header-lang__item_active':selectedLang === 'kg'}" class="header-lang__item">KG</div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { showNotification } from 'src/utils'
export default {
  name: 'Header',
  data() {
    return {
      selectedLang: 'ru',
      modalOpen: false,
      menuToggle: false
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
    },
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