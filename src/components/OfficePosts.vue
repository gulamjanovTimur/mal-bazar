<template>
  <div class="office-posts">
    <div class="office-posts__filters office-posts-filters">
      <div @click="() => filter = 'active'" :class="{'office-posts-filters__item_active': filter === 'active'}" class="office-posts-filters__item">Активные</div>
      <div @click="() => filter = 'deActive'" :class="{'office-posts-filters__item_active': filter === 'deActive'}" class="office-posts-filters__item">Деактивированные</div>
      <div @click="() => filter = 'moderation'" :class="{'office-posts-filters__item_active': filter === 'moderation'}" class="office-posts-filters__item">На модерации</div>
    </div>
    <div class="office-posts__item office-post-item">
      <div :style="`background-image:url(static/images/product-img.jpg)`" class="office-post-item__img"></div>
      <div class="office-post-item__title office-post-title">
        <div class="office-item__name">Продаю корову, 5 лет, 20л</div>
        <div class="office-item__price">120 000 KGS</div>
        <div class="office-item__small">Создано: 20/12/2021</div>
      </div>
      <div class="office-post-item__views office-post-views">
        <div class="office-item__small">Показы: 50 000</div>
        <div class="office-item__small">Просмотры: 50 000</div>
        <CustomBtn v-if="filter !== 'moderation'" :negative="filter === 'active' ? true : false" :name="filter !== 'active' ? 'Активировать' : 'Деактивировать'"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficePosts',
  data() {
    return {
      filter: 'active'
    }
  }
}
</script>