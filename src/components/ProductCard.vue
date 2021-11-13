<template>
  <div class="product-card">
    <div class="product-card__img" :style="`background-image:url(static/images/${data.img})`">
    </div>
    <div class="product-card__content">
      <div class="product-card__title">{{data.title}}</div>
      <div class="product-card__bottom product-card-bottom">
        <div class="product-card-bottom__amount">{{divideAmount(data.amount)}} KGS</div>
        <CustomBtn class="product-card-bottom__btn" secondary @click="() => openProductCard(data.id)" :name="$t('DETAILS')"/>
      </div>
    </div>
  </div>
</template>

<script>
import { divideAmount } from 'src/utils'

export default {
  name: 'ProductCard',
  props: ['data'],
  methods: {
    divideAmount,
    openProductCard(id) {
      this.$router.push({
        path: 'details',
        query: {id}
      })
    }
  }
}
</script>