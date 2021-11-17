<template>
  <div class="office-chats">
    <div class="office-chats__item chat-item">
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
        <div class="chat-item__msgs">+1</div>
        <div class="chat-item__date">17/09/2021</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OfficeChats',
}
</script>