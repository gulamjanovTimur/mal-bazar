<template>
  <div v-if="data" class="container">
    <div class="details">
      <div class="details__title page__title">
        {{data.title}}
      </div>
      <div class="details__main details-main">
        <div class="details-main__carousel">
          <q-carousel
            class="details-carousel"
            swipeable
            animated
            v-model="selectedImg"
            thumbnails
            infinite
            arrows
            control-color="primary"
            control-type="regular"
            transition-next="slide-left"
            transition-prev="slide-right"
            v-model:fullscreen="fullscreen"
          >
            <q-carousel-slide class="details-carousel__slide" :key="index" v-for="(img, index) in data.images" :name="index" :img-src="`static/images/${img}`" />
            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[5, 5]"
              >
                <q-btn
                   round dense color="white" text-color="primary"
                  :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="fullscreen = !fullscreen"
                />
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
         
        <div class="details-main__spec details-spec">
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Цена:</span>
            <span class="spec-field__value spec-field__value_price">{{divideAmount(data.amount) + ' ' + data.ccy}}</span>
          </div>
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Количество:</span>
            <span class="spec-field__value">{{data.quantity}}</span>
          </div>
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Область</span>
            <span class="spec-field__value">{{data.region}}</span>
          </div>
          <div class="details-spec__field spec-field">
            <span class="spec-field__name">Город:</span>
            <span class="spec-field__value">{{data.city}}</span>
          </div>
          
          <q-input input readonly mask="#(###)##-##-##" filled input-class="details-spec__phone" v-model="data.phone"></q-input>
          <CustomBtn class="details-spec__btn" name="Написать"/>
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
      selectedImg: 0,
      fullscreen: false
    }
  },
  computed: {
    ...mapGetters({
      productById: 'productById'
    })
  },
  methods: {
    divideAmount,
  },
  mounted() {
    this.data = this.productById[this.$route.query.id]
    window.document.title = `${this.data.title} | ${process.env.PRODUCT_NAME}`
  },
}
</script>