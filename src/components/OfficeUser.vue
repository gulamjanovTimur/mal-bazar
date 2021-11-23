<template>
  <form @submit.prevent="() => changeName()" class="office-user">
    <div class="office-user__info office-user-info">
      <label for="file" class="office-user-info__avatar" size="80px" color="secondary">
        <img src="static/images/ishen-soset.jpg" alt="Фото профиля">
      </label>
      <div class="office-user-info__text office-user-text">
        <div class="office-user-text__name">Алмазбеков Ишен</div>
        <div class="office-user-text__help">Нажмите на фото чтобы изменить его</div>
      </div>
    </div>
    <input
      ref="downloadFile"
      @change="onChangeFile"
      class="chat-form__btn-file"
      id="file"
      type="file"
    >
    <div class="office-user__fields office-user-fields">
      <q-input v-model="name" label="Имя" filled class="office-user-fields__item" />
    </div>
    <CustomBtn :isLoading="isLoading" class="office-user__btn" name="Сохранить"/>
  </form>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'OfficeUser',
  data() {
    return {
      name: '',
      isLoading: false,
      fileUpload: null
    }
  },
  computed: {
    ...mapState({
      auth: state => state.user.auth
    })
  },
  methods: {
    ...mapActions(['changeUserName']),
    ...mapMutations(['updateAuth']),
    onChangeFile() {
      let file = this.$refs.downloadFile.files[0];
      if (file) {
        const ext = file.name.split(".");
        let reader = new FileReader();
        reader.readAsDataURL(file);
        return (reader.onload = () => {
          const base64 = reader.result.split("base64,")[1];
          this.fileUpload = {
            data: base64,
            ext: "." + ext[ext.length - 1],
            name: file.name,
          }
        });
      }
    },
    changeName() {
      this.isLoading = true
      this.changeUserName(this.name).then((res) => {
        this.isLoading = false
        if(res.success) {
          this.updateAuth({
            ...this.auth,
            username: this.name
          })
        }
      })
    }
  }
}
</script>