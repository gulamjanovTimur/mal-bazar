<template>
  <div class="office-user">
    <div class="office-user__info office-user-info">
      <q-avatar class="cursor-pointer" size="80px" color="secondary">
        <img src="static/images/ishen-soset.jpg" alt="Фото профиля">
      </q-avatar>
      <div class="office-user-info__text office-user-text">
        <div class="office-user-text__name">Алмазбеков Ишен</div>
        <div class="office-user-text__help">Нажмите на фото чтобы изменить его</div>
      </div>
    </div>
    <div class="office-user__fields office-user-fields">
      <q-input v-model="userName" label="Имя" filled class="office-user-fields__item" />
      <q-input v-model="fullName" label="Фамилия" filled class="office-user-fields__item" />
    </div>
    <CustomBtn name="Сохранить"/>
  </div>
</template>
<script>
export default {
  name: 'OfficeUser',
  data() {
    return {
      userName: 'Ишен',
      fullName: 'Алмазбеков'
    }
  }
}
</script>