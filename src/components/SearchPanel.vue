<template>
  <div class="search">
    <div class="container">
      <q-input @focus="(e) => focus = true" @blur="() => focus = false" input-class="search__input" ref="input" bg-color="white" outlined v-model="text" label="Я ищу...">
        <template v-slot:append>
          <div :class="{'search-button_focus':focus}" class="search-button">
            <span :class="{'search__text_focus':focus}" class="search__text">Поиск</span>
            <q-icon size="md" :color="focus ? 'primary' : 'grey'" name="search" />
          </div>
        </template>
      </q-input>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchPanel',
  data() {
    return {
      text: '',
      focus: false
    }
  },
}
</script>