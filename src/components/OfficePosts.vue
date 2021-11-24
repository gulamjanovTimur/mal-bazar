<template>
  <div class="office-posts">
    <div class="office-posts__filters office-posts-filters">
      <div @click="() => filter = 'ACTIVE'" :class="{'office-posts-filters__item_active': filter === 'ACTIVE'}" class="office-posts-filters__item">Активные</div>
      <div @click="() => filter = 'INACTIVE'" :class="{'office-posts-filters__item_active': filter === 'INACTIVE'}" class="office-posts-filters__item">Деактивированные</div>
      <div @click="() => filter = 'MODERATION'" :class="{'office-posts-filters__item_active': filter === 'MODERATION'}" class="office-posts-filters__item">На модерации</div>
    </div>
    <template v-if="!isLoading">
      <div :key="index" v-for="(item, index) in filteredData" class="office-posts__item office-post-item">
        <div :style="`background-image:url(static/images/product-img.jpg)`" class="office-post-item__img"></div>
        <div class="office-post-item__title office-post-title">
          <div class="office-item__name">{{item.description}}</div>
          <div class="office-item__price">{{item.price}}</div>
          <div class="office-item__small">Создано: 20/12/2021</div>
        </div>
        <div class="office-post-item__views office-post-views">
          <div class="office-item__small">Показы: 50 000</div>
          <div class="office-item__small">Просмотры: 50 000</div>
          <CustomBtn v-if="filter !== 'MODERATION'" :negative="filter === 'ACTIVE' ? true : false" :name="filter !== 'ACTIVE' ? 'Активировать' : 'Деактивировать'"/>
        </div>
      </div>
    </template>
    <div v-else class="office-loader">
      Loading...
    </div>
  </div>
</template>

<script>
import { showNotification } from 'src/utils'
import { mapActions } from 'vuex'

export default {
  name: 'OfficePosts',
  data() {
    return {
      filter: 'ACTIVE',
      data: [],
      isLoading: false
    }
  },
  computed: {
    filteredData() {
      return this.data.filter((el) => el.status === this.filter)
    }
  },
  methods: {
    ...mapActions(['getOfficeProducts']),
  },
  mounted(){
    this.isLoading = true
    this.getOfficeProducts().then((res) => {
      if(res.success) {
        this.data = res.data
      } else {
        showNotification('negative', res.error.data[this.$i18n.locale])
      }
    }).finally(() => {
      this.isLoading = false
    })
  }
}
</script>