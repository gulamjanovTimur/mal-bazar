<template>
  <div v-if="data" class="container">
    <div class="details">
      <div class="details__main details-main">
        <div class="details-main__images details-images">
          <div class="details-images__view" :style="selectedImg ? `background-image: url(static/images/${selectedImg})` : ''"></div>
          <div class="details-images__items images-items">
            <div @click="() => selectImg(img)" :key="index" v-for="(img, index) in data.images" :style="`background-image: url(static/images/${img})`" class="images-items__item">
            </div>
          </div>
        </div>
        <div class="details-main__spec details-spec">
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Цена:</span>
            <span class="spec-field__value spec-field__value_price">{{divideAmount(data.amount) + ' ' + data.ccy}}</span>
          </div>
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Вид:</span>
            <span class="spec-field__value">{{data.type}}</span>
          </div>
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Порода:</span>
            <span class="spec-field__value">{{data.breed}}</span>
          </div>
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Возраст:</span>
            <span class="spec-field__value">{{data.age}}</span>
          </div>
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Город:</span>
            <span class="spec-field__value">{{data.city}}</span>
          </div>
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Количество:</span>
            <span class="spec-field__value">{{data.quantity}}</span>
          </div>
          <q-input readonly mask="#(###)##-##-##" filled input-class="details-spec__phone" v-model="data.phone"></q-input>
          <CustomBtn name="Написать"/>
        </div>
      </div>
      <div class="details__description details-description">
        <div class="details-description__title">Описание</div>
        <div class="details-description__text">{{data.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { divideAmount } from 'src/utils'

export default {
  name: 'ProductDetails',
  data() {
    return {
      data: null,
      selectedImg: {}
    }
  },
  computed: {
    ...mapGetters({
      productById: 'productById'
    })
  },
  methods: {
    divideAmount,
    selectImg(img) {
      this.selectedImg = img
    }
  },
  mounted() {
    this.data = this.productById[this.$route.query.id]
    window.document.title = `${this.data.title} | ${process.env.PRODUCT_NAME}`
    this.selectedImg = this.data.images[0]
  },
}
</script>