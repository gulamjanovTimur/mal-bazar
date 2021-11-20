<template>
  <div v-if="!details" class="office-chats">
    <div @click="() => openDetails()" class="office-chats__item chat-item">
      <div class="chat-item__left">
        <q-avatar size="55px" color="secondary">
          <img src="static/images/ishen-soset.jpg" alt="Фото профиля">
        </q-avatar>
        <div class="chat-item__text">
          <div class="chat-item__name">Алмазбеков Ишен</div>
          <div class="chat-item__last-msg">Нахуй пойдешь</div>
        </div>
      </div>
      <div class="chat-item__right">
        <div class="chat-item__new">+1</div>
        <div class="chat-item__date">17/09/2021</div>
      </div>
    </div>
    <div @click="() => openDetails()" class="office-chats__item chat-item">
      <div class="chat-item__left">
        <q-avatar size="55px" color="secondary">
          <img src="static/images/ishen-soset.jpg" alt="Фото профиля">
        </q-avatar>
        <div class="chat-item__text">
          <div class="chat-item__name">Алмазбеков Ишен</div>
          <div class="chat-item__last-msg">Нахуй пойдешь</div>
        </div>
      </div>
      <div class="chat-item__right">
        <div class="chat-item__new">+1</div>
        <div class="chat-item__date">17/09/2021</div>
      </div>
    </div>
  </div>
  <ChatDetails v-model:details="details" v-else />
</template>
<script>
import ChatDetails from './ChatDetails.vue'
export default {
  components: { ChatDetails },
  name: 'OfficeChats',
  data() {
    return {
      details: false,
    }
  },
  methods: {
    openDetails() {
      this.details = true
    }
  }
}
</script>