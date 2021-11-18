<template>
  <div class="chat">
    <div class="chat__header chat-header">
      <q-icon @click="() => goBack()" class="chat-header__back" name="navigate_before"/>
      <div class="chat-header__info chat-header-info">
        <div class="chat-header-info__name">Алмазбеков Ишен</div>
        <div class="chat-header-info__date">Был(а) в сети 16.10.2021</div>
      </div>
    </div>
    <q-scroll-area
      :thumb-style="thumbStyle"
      ref="scrollArea"
      class="chat-msgs"
    >
    <div class="chat-msgs__item msgs-item">
      <div class="msgs-item__text">Куплю ........</div>
      <div class="msgs-item__time">19:30</div>
    </div>
    <div class="chat-msgs__item msgs-item msgs-item_my">
      <div class="msgs-item__text">Продам ........</div>
      <div class="msgs-item__time">19:30</div>
    </div>
    </q-scroll-area>
    
    <div class="chat__form chat-form">

    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatDetails',
  props: ['details'],
  data() {
    return {
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
    goBack() {
      this.$emit('update:details', false)
    }
  }

}
</script>