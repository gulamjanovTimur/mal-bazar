<template>
  <div class="products">
    <ProductCard :key="el.id" v-for="el in data" :data="el"/>
  </div>
</template>

<script>
import ProductCard from 'components/ProductCard'

export default {
  name: 'Products',
  props: ['data'],
  components: { ProductCard }
}
</script>