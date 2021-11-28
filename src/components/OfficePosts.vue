<template>
  <div class="office-posts">
    <div class="office-posts__filters office-posts-filters">
      <div
        @click="() => filter = 'ACTIVE'"
        :class="{'office-posts-filters__item_active': filter === 'ACTIVE'}"
        class="office-posts-filters__item"
      >
        {{filterToTitle['ACTIVE']}}
      </div>
      <div
        @click="() => filter = 'INACTIVE'"
        :class="{'office-posts-filters__item_active': filter === 'INACTIVE'}"
        class="office-posts-filters__item"
      > 
        {{filterToTitle['INACTIVE']}}
      </div>
      <div 
        @click="() => filter = 'MODERATION'"
        :class="{'office-posts-filters__item_active': filter === 'MODERATION'}"
        class="office-posts-filters__item"
      >
        {{filterToTitle['MODERATION']}}
      </div>
    </div>
    <template v-if="!isLoading">
      <template v-if="filteredData.length > 0">
        <div :key="index" v-for="(item, index) in filteredData" class="office-posts__item office-post-item">
          <div :style="`background-image:url(${convertToImgPath(item.images[0])})`" class="office-post-item__img"></div>
          <div class="office-post-item__title office-post-title">
            <div class="office-item__name">{{item.description}}</div>
            <div class="office-item__price">{{item.price + ' ' + item.priceCurrency}}</div>
            <div class="office-item__small">Создано: 20/12/2021</div>
          </div>
          <div class="office-post-item__views office-post-views">
            <div class="office-item__small">Показы: 50 000</div>
            <div class="office-item__small">Просмотры: 50 000</div>
            <CustomBtn v-if="filter !== 'MODERATION'" :negative="filter === 'ACTIVE' ? true : false" :name="filter !== 'ACTIVE' ? 'Активировать' : 'Деактивировать'"/>
          </div>
        </div>
      </template>
      <div class="office-posts__no-data" v-else>
        Нет объявлений со статусом: "{{filterToTitle[filter]}}"
      </div>
    </template>
    <div v-else class="office-loader">
      Loading...
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { convertToImgPath } from '../utils'

export default {
  name: 'OfficePosts',
  data() {
    return {
      filter: 'ACTIVE',
      data: [],
      isLoading: false,
      filterToTitle: {
        ACTIVE: 'Активные',
        INACTIVE: 'Деактивированные',
        MODERATION: 'На модерации'
      }
    }
  },
  computed: {
    filteredData() {
      return this.data.filter((el) => el.status === this.filter)
    }
  },
  methods: {
    ...mapActions(['getOfficeProducts']),
    convertToImgPath
  },
  mounted(){
    this.isLoading = true
    this.getOfficeProducts().then((res) => {
      if(res.success) {
        this.data = res.data
      }
    }).finally(() => {
      this.isLoading = false
    })
  }
}
</script>