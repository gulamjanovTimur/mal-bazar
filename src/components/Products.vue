<template>
  <div class="products">
    <ProductCard @click="() => openProductCard(el.id)" :key="el.id" v-for="el in data" :data="el"/>
  </div>
</template>

<script>
import ProductCard from 'components/ProductCard'

export default {
  name: 'Products',
  props: ['data'],
  components: { ProductCard },
  methods: {
    openProductCard(id) {
      this.$router.push({
        path: 'details',
        query: {id}
      })
    }
  }
}
</script>