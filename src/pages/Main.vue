<template>
  <div class="main">
    <SearchPanel/>
    <div class="container">
      <h1 class="page-title">Новые объявления</h1>
      <Products :data="products"/>
    </div>
  </div>
  
</template>

<script>
import SearchPanel from 'components/SearchPanel'
import Products from 'components/Products'
import { mapState } from 'vuex'


export default {
  name: 'Main',
  components: {SearchPanel, Products},
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.data
    })
  },
  mounted() {
    
  }
}
</script>
