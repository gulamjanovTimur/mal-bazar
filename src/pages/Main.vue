<template>
  <div class="main">
    <SearchPanel/>
    <div class="container">
      <RegionFilter class="main__region-filter"/>
      <h1 class="page__title">{{$t('NEW_ARTICLE')}}</h1>
      <Products :data="products"/>
    </div>
  </div>
  
</template>

<script>
import SearchPanel from 'components/SearchPanel'
import Products from 'components/Products'
import RegionFilter from 'components/RegionFilter'
import { mapState } from 'vuex'


export default {
  name: 'Main',
  components: {SearchPanel, Products, RegionFilter},
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
