<template>
  <div class="chat">
    <div class="chat__header chat-header">
      <div @click="() => goBack()" class="chat-header__back chat-header-back">
        <q-icon  size="xl" color="grey" name="navigate_before"/>
        Назад
      </div>
      <div class="chat-header__info chat-header-info">
        <q-avatar class="header-profile__avatar" color="secondary">
          <img src="static/images/ishen-soset.jpg" alt="Фото профиля">
        </q-avatar>
        <div><div class="chat-header-info__name">Алмазбеков Ишен</div>
        <div class="chat-header-info__date">Был(а) в сети 16.10.2021</div></div>
      </div>
    </div>
    <q-scroll-area
      :thumb-style="thumbStyle"
      ref="scrollArea"
      class="chat-msgs"
    >
    <div class="chat-msgs__date">
      <q-chip color="primary" text-color="white">
        16/09/2021
      </q-chip>
    </div>
    <div class="chat-msgs__content">
      <div class="chat-msgs__item msgs-item">
        <div class="msgs-item__text">Куплю........</div>
        <div class="msgs-item__time">19:30</div>
      </div>
    </div>
    <div class="chat-msgs__date">
      <q-chip color="primary" text-color="white">
        17/09/2021
      </q-chip>
    </div>
    <div class="chat-msgs__content">
      <div class="chat-msgs__item msgs-item msgs-item_my">
        <div class="msgs-item__text">Продам 25 собак и 30 кошек за 85 тысяч ........</div>
        <div class="msgs-item__time">19:30</div>
      </div>
    </div>
    </q-scroll-area>
    <form @keydown.enter.prevent="(e) => addMsg(e)" class="chat__form chat-form">
      <input
        accept=".jpg, .pdf, .tiff"
        ref="downloadFile"
        @change="onChangeFile"
        type="file"
        id="file"
        class="chat-form__btn-file"
      />
      <label for="file" class="chat-form__btn-file-label" :class="{'chat-form__btn-file-label--active': fileUpload.length > 0}">
        <q-icon size="xs" name="attach_file" :color="fileUpload.length > 0 ? 'white' : 'black'"/>
      </label>
      <q-input
        bg-color="white"
        rounded
        class="chat-form__input"
        dense
        outlined
        autofocus
        v-model="inputText"
        label="Сообщение"
      />
      <button
        :disabled="inputText || fileUpload.length > 0 ? false : true"
        class="chat-form__send-btn"
        type="submit"
      >
        <q-icon color="white" name="send"/>
      </button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ChatDetails',
  props: ['details'],
  data() {
    return {
      fileUpload: [],
      inputText: '',
      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },
    }
  },
  emits: ['update:details'],
  methods: {
    onChangeFile() {
      let file = this.$refs.downloadFile.files[0];
      if (file) {
        const ext = file.name.split(".");
        let reader = new FileReader();
        reader.readAsDataURL(file);
        return (reader.onload = () => {
          const base64 = reader.result.split("base64,")[1];
          this.fileUpload.push({
            data: base64,
            ext: "." + ext[ext.length - 1],
            name: file.name,
          });
        });
      }
    },
    addMsg(e) {
      if(e.keyCode === 13 && e.shiftKey) {
        console.log('NEW LINE')
      } else {
        console.log('ADD MESSAGE')
      }
    },
    goBack() {
      this.$emit('update:details', false)
    }
  }

}
</script>