<template>
  <form @submit.prevent="() => create()" class="create">
    <h1 class="create__title page__title">Создать объявление</h1>
    <div class="create__uploader create-uploader">
      <label :for="fileList[0] === undefined ? 'file' : ''" class="create-uploader__main-card" :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[0])})` : ''">
        <q-icon @click="() => deleteFile(0)" size="md" class="create-uploader__close" name="close"/>
      </label>
      <div class="create-uploader__cards uploader-cards">
        <label 
          :for="fileList[1] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[1])})` : ''"
        >
          <q-icon @click="() => deleteFile(1)" class="create-uploader__close" name="close"/>
          <div class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(1)" color="secondary" text-color="white" square>Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[2] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[2])})` : ''"
        >
          <q-icon @click="() => deleteFile(2)" class="create-uploader__close" name="close"/>
          <div class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(2)" color="secondary" text-color="white" square>Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[3] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[3])})` : ''"
        >
          <q-icon @click="() => deleteFile(3)" class="create-uploader__close" name="close"/>
          <div class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(3)" color="secondary" text-color="white" square>Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[4] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[4])})` : ''"
        >
          <q-icon @click="() => deleteFile(4)" class="create-uploader__close" name="close"/>
          <div class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(4)" color="secondary" text-color="white" square>Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[5] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[5])})` : ''"
        >
          <q-icon @click="() => deleteFile(5)" class="create-uploader__close" name="close"/>
          <div class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(5)" color="secondary" text-color="white" square>Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[6] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[6])})` : ''"
        >
          <q-icon @click="() => deleteFile(6)" class="create-uploader__close" name="close"/>
          <div class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(6)" color="secondary" text-color="white" square>Сделать главной</q-chip>
          </div>
        </label>
      </div>
      <input
        accept=".jpg, .png, .tiff"
        ref="downloadFile"
        type="file"
        id="file"
        class="create-uploader__btn-file"
        @change="() => changeFile()"
      />
    </div>
    <div class="create__specifications create-specifications">
      <template :key="field.label" v-for="field in fieldsList">
          <q-select 
            v-if="field.type === 'select'" 
            outlined 
            :label="field.label" 
            v-model="field.model" 
            :options="field.selectOptions" class="create-specifications__field"
          />
          <q-input 
            v-if="field.type === 'input'" 
            outlined 
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
      <q-input outlined label="Номер телефона" class="create-specifications__field"/>
      <div class="create-specifications__field create-price">
        <q-input outlined label="Цена" class="create-price__field"/>
        <q-btn-toggle v-model="ccy" :options="ccyOptions" class="create-price__toggle"/>
      </div>
    </div>
    <div class="create__actions create-actions">
      <custom-btn class="create-actions__item" :name="$t('CREATE_ARTICLE')"/>
      <custom-btn class="create-actions__item" type secondary name="Отмена"/>
    </div>
  </form>
</template>

<script>
import { convertToImgPath, showNotification } from 'src/utils'

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
      ccy: 'kgs',
      fileList: []
    }
  },
  methods: {
    convertToImgPath,
    create() {
      console.log('CREATE')
    },
    changeFile() {
      let file = this.$refs.downloadFile.files[0];
      if (file) {
        if(this.fileList.length < 7) {
          const ext = file.name.split(".");
          let reader = new FileReader();
          reader.readAsDataURL(file);
          return (reader.onload = () => {
            const base64 = reader.result.split("base64,")[1];
            this.fileList.push({
              data: base64,
              extension: "." + ext[ext.length - 1],
              name: file.name,
            });
          });
        } else {
          showNotification('negative', 'Загружено максимальное количество файлов')
        }
      }
    },
    deleteFile(index) {
      if(this.fileList[index] !== undefined) {
        setTimeout(() => {
          this.fileList.splice(index, 1)
        }, 0);
      }
    },
    makeMain(index) {
      this.fileList[index] = this.fileList.splice(0,1, this.fileList[index])[0]
    }
  }
}
</script>
