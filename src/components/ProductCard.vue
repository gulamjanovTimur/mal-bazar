<template>
  <div class="product-card">
    <div class="product-card__img" :style="`background-image:url(images/${data.img})`">
    </div>
    <div class="product-card__title">{{data.title}}</div>
    <div class="product-card-bottom">
      <div class="product-card__amount">{{data.amount}} KGS</div>
      <q-btn color="secondary" class="product-card__button">Подробнее</q-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: ['data']
}
</script>