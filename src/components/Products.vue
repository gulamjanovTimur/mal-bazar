<template>
  <div class="products">
    <ProductCard :key="index" v-for="(el, index) in data" :data="el"/>
  </div>
</template>

<script>
import ProductCard from 'components/ProductCard'

export default {
  name: 'Products',
  components: { ProductCard },
  props: ['data'],
}
</script>