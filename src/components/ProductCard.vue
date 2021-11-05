<template>
  <div class="product-card">
    <div class="product-card__img" :style="`background-image:url(images/${data.img})`">
    </div>
    <div class="product-card__content">
      <div class="product-card__title">{{data.title}}</div>
      <div class="product-card__bottom product-card-bottom">
        <div class="product-card-bottom__amount">{{divideAmount(data.amount)}} KGS</div>
        <q-btn @click="() => openProductCard(data.id)" color="secondary" class="product-card-bottom__btn">Подробнее</q-btn>
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