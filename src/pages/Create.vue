<template>
  <!-- <div class="container"> -->
    <div class="create">
      <h1 class="create__title page__title">Создать объявление</h1>
      <div class="create__uploader create-uploader">
        <div class="create-uploader__main-card"></div>
        <div class="create-uploader__cards uploader-cards">
          <div class="uploader-cards__item"></div>
          <div class="uploader-cards__item"></div>
          <div class="uploader-cards__item"></div>
          <div class="uploader-cards__item"></div>
          <div class="uploader-cards__item"></div>
          <div class="uploader-cards__item"></div>
        </div>
      </div>
      <div class="create__specifications create-specifications">
        <template :key="field.label" v-for="field in fieldsList">
            <q-select 
              v-if="field.type === 'select'" 
              rounded outlined 
              :label="field.label" 
              v-model="field.model" 
              :options="field.selectOptions" class="create-specifications__field"
            />
            <q-input 
              v-if="field.type === 'input'" 
              rounded outlined 
              :label="field.label" 
              v-model="field.model" 
              class="create-specifications__field"
            />
        </template>
      </div>
      <q-input
        v-model="description"
        type="textarea"
        bg-color="white"
        outlined
        class="create__description"
        label="Введите описание"
      />
      <div class="create-specifications">
        <q-input outlined rounded label="Номер телефона" class="create-specifications__field"/>
        <div class="create-specifications__field create-price">
          <q-input outlined rounded label="Цена" class="create-price__field"/>
          <q-btn-toggle v-model="ccy" :options="ccyOptions" class="create-price__toggle"/>
        </div>
      </div>
      
      
      <div class="create__actions create-actions">
        <custom-btn name="Подать объявление"/>
        <custom-btn secondary name="Отмена"/>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      description: '',
      fieldsList: {
        cat: {
          label: 'Категория',
          type: 'select',
          selectOptions: [
            'Коровы',
            'Овцы',
            'Собаки',
            'Кошки'
          ],
          model: ''
        },
        type: {
          label: 'Вид',
          type: 'select',
          selectOptions: [
            'Коровы',
            'Овцы',
            'Собаки',
            'Кошки'
          ],
          model: ''
        },
        breed: {
          label: 'Порода',
          type: 'select',
          selectOptions: [
            'Коровы',
            'Овцы',
            'Собаки',
            'Кошки'
          ],
          model: ''
        },
        city: {
          label: 'Город',
          type: 'select',
          selectOptions: [
            'Коровы',
            'Овцы',
            'Собаки',
            'Кошки'
          ],
          model: ''
        },
        quantity: {
          label: 'Количество',
          type: 'input',
          model: ''
        },
        age: {
          label: 'Возраст',
          type: 'input',
          model: ''
        },
      },
      ccyOptions: [
        {label: 'KGS', value: 'kgs'},
        {label: 'USD', value: 'usd'},
      ],
      ccy: 'kgs'
    }
  }
}
</script>