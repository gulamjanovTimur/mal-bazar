<template>
  <div class="region-filter">
    <div @click="() => selectedRegion = region.name" :key="region.name" v-for="region in regions" class="region-filter__item region-filter-item">
      <div class="region-filter-item__img" :style="`background-image: url(static/icons/regions/${region.img})`">
      </div>
      <div class="region-filter-item__text" :class="{'region-filter-item__text_active' : selectedRegion === region.name}">{{region.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegionFilter',
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
      selectedRegion: 'Чуй'
    }
  }
}
</script>