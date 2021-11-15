<template>
  <div class="main">
    <SearchPanel/>
    <div class="container">
      <div class="main__region-filter region-filter">
        <div @click="() => selectedRegion = region.name" :key="region.name" v-for="region in regions" class="region-filter__item region-filter-item">
          <div class="region-filter-item__img" :style="`background-image: url(static/icons/regions/${region.img})`">
          </div>
          <div class="region-filter-item__text" :class="{'region-filter-item__text_active' : selectedRegion === region.name}">{{region.name}}</div>
        </div>
      </div>
      <h1 class="page__title">{{$t('NEW_ARTICLE')}}</h1>
      <Products :data="products"/>
      <div class="main__pag main-pag">
        <q-pagination
          v-model="pag"
          @update:model-value="() => changePage()"
          color="primary"
          :max="products.length"
          :max-pages="2"
          boundary-numbers
          direction-links
        />
      </div>
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
      regions: [
        {
          name: 'Чуй',
          img: 'chui.jpg'
        },
        {
          name: 'Ыссык-кол',
          img: 'ik.jpg'
        },
        {
          name: 'Нарын',
          img: 'naryn.jpg'
        },
        {
          name: 'Талас',
          img: 'talas.jpg'
        },
        {
          name: 'Джалал-Абад',
          img: 'djalal-abad.jpg'
        },
        {
          name: 'Ош',
          img: 'osh.jpg'
        },
        {
          name: 'Баткен',
          img: 'batken.jpg'
        },
      ],
      selectedRegion: 'Чуй',
      pag: 1
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.data
    })
  },
  methods: {
    changePage() {
      console.log('ЗАПРОС К БЭКУ')
    }
  },
  mounted() {
    
  }
}
</script>
