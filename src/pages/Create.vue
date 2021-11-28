<template>
  <form @submit.prevent="() => create()" class="create">
    <h1 class="create__title page__title">Создать объявление</h1>
    <div class="create__uploader create-uploader">
      <label :for="fileList[0] === undefined ? 'file' : ''" class="create-uploader__main-card" :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[0])})` : ''">
        <div class="create-uploader__text create-uploader__text_main" v-if="fileList[0] === undefined">
          <q-icon size="xl" color="primary" name="add_a_photo"/>
          Загрузить фото...
        </div>
        <q-icon v-if="fileList[0] !== undefined" @click="() => deleteFile(0)" size="md" class="create-uploader__close" name="close"/>
      </label>
      <div class="create-uploader__cards uploader-cards">
        <label 
          :for="fileList[1] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[1])})` : ''"
        >
          <q-icon v-if="fileList[1] !== undefined" @click="() => deleteFile(1)" class="create-uploader__close" name="close"/>
            <div class="create-uploader__text" v-if="fileList[1] === undefined">
              <q-icon size="md" color="primary" name="add_a_photo"/>
              Загрузить фото...
            </div>
          <div v-if="fileList[1] !== undefined" class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(1)" color="secondary" text-color="white">Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[2] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[2])})` : ''"
        >
          <q-icon v-if="fileList[2] !== undefined" @click="() => deleteFile(2)" class="create-uploader__close" name="close"/>
            <div class="create-uploader__text" v-if="fileList[2] === undefined">
              <q-icon size="md" color="primary" name="add_a_photo"/>
              Загрузить фото...
            </div>
          <div v-if="fileList[2] !== undefined" class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(2)" color="secondary" text-color="white">Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[3] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[3])})` : ''"
        >
          <q-icon v-if="fileList[3] !== undefined" @click="() => deleteFile(3)" class="create-uploader__close" name="close"/>
            <div class="create-uploader__text" v-if="fileList[3] === undefined">
              <q-icon size="md" color="primary" name="add_a_photo"/>
              Загрузить фото...
            </div>
          <div v-if="fileList[3] !== undefined" class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(3)" color="secondary" text-color="white">Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[4] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[4])})` : ''"
        >
          <q-icon v-if="fileList[4] !== undefined" @click="() => deleteFile(4)" class="create-uploader__close" name="close"/>
            <div class="create-uploader__text" v-if="fileList[4] === undefined">
              <q-icon size="md" color="primary" name="add_a_photo"/>
              Загрузить фото...
            </div>
          <div v-if="fileList[4] !== undefined" class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(4)" color="secondary" text-color="white">Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[5] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[5])})` : ''"
        >
          <q-icon v-if="fileList[5] !== undefined" @click="() => deleteFile(5)" class="create-uploader__close" name="close"/>
            <div class="create-uploader__text" v-if="fileList[5] === undefined">
              <q-icon size="md" color="primary" name="add_a_photo"/>
              Загрузить фото...
            </div>
          <div v-if="fileList[5] !== undefined" class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(5)" color="secondary" text-color="white">Сделать главной</q-chip>
          </div>
        </label>
        <label 
          :for="fileList[6] === undefined ? 'file' : ''"
          class="uploader-cards__item" 
          :style="fileList.length > 0 ? `background-image:url(${convertToImgPath(fileList[6])})` : ''"
        >
          <q-icon v-if="fileList[6] !== undefined" @click="() => deleteFile(6)" class="create-uploader__close" name="close"/>
            <div class="create-uploader__text" v-if="fileList[6] === undefined">
              <q-icon size="md" color="primary" name="add_a_photo"/>
              Загрузить фото...
            </div>
          <div v-if="fileList[6] !== undefined" class="create-uploader__make-main">
            <q-chip clickable @click="() => makeMain(6)" color="secondary" text-color="white">Сделать главной</q-chip>
          </div>
        </label>
      </div>
      <input
        accept=".jpg, .png, .tiff"
        ref="downloadFile"
        type="file"
        id="file"
        class="create-uploader__btn-file"
        @change="(e) => changeFile(e)"
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
      label="Описание"
    />
    <div class="create-specifications">
      <q-input v-model="phone" outlined label="Номер телефона" class="create-specifications__field"/>
      <div class="create-specifications__field create-price">
        <q-input v-model="price" outlined label="Цена" class="create-price__field"/>
        <q-btn-toggle v-model="ccy" :options="ccyOptions" class="create-price__toggle"/>
      </div>
    </div>
    <div class="create__actions create-actions">
      <custom-btn class="create-actions__item" :name="$t('CREATE_ARTICLE')"/>
      <custom-btn @click="() => $router.push('/')" class="create-actions__item" type secondary name="Отмена"/>
    </div>
  </form>
</template>

<script>
import { convertToImgPath, showNotification } from 'src/utils'
import { mapActions } from 'vuex'

export default {
  name: 'Create',
  data() {
    return {
      description: '',
      fieldsList: {
        title: {
          label: 'Название',
          type: 'input',
          model: ''
        },
        cat: {
          label: 'Категория',
          type: 'select',
          selectOptions: [
            {
              label: 'Коровы',
              value: 1
            },
            {
              label: 'Овцы',
              value: 2
            },
            {
              label: 'Собаки',
              value: 3
            },
            {
              label: 'Кошки',
              value: 4
            }
          ],
          model: ''
        },
        region: {
          label: 'Область',
          type: 'select',
          selectOptions: [
            {
              label: 'Коровы',
              value: 1
            },
            {
              label: 'Овцы',
              value: 2
            },
            {
              label: 'Собаки',
              value: 3
            },
            {
              label: 'Кошки',
              value: 4
            }
          ],
          model: ''
        },
        city: {
          label: 'Город',
          type: 'select',
          selectOptions: [
            {
              label: 'Коровы',
              value: 1
            },
            {
              label: 'Овцы',
              value: 2
            },
            {
              label: 'Собаки',
              value: 3
            },
            {
              label: 'Кошки',
              value: 4
            }
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
        {label: 'KGS', value: 'KGS'},
        {label: 'USD', value: 'USD'},
      ],
      ccy: 'KGS',
      fileList: [],
      price: '',
      phone: ''
    }
  },
  methods: {
    ...mapActions(['createNewProduct']),
    convertToImgPath,
    create() {
      this.createNewProduct({
        title: this.fieldsList.title.model,
        description: this.description,
        price: this.price,
        priceCurrency: this.ccy,
        count: this.fieldsList.quantity.model,
        age: this.fieldsList.age.model,
        categoryId: this.fieldsList.cat.model.value,
        locationId: this.fieldsList.city.model.value,
        images: this.fileList,
        phoneNumber: this.phone
      }).then((res) => {
        if(res.success) {
          this.$router.push('/'),
          showNotification('positive', 'Объявление успешно создано') //TODO: localization
        } else {
          showNotification('negative', res.error.data[this.$i18n.locale])
        }
      })
    },
    changeFile(e) {
      let file = e.target.files[0]
      if(file) {
        const ext = file.name.split(".")
        let reader = new FileReader()
        reader.readAsDataURL(file)
        return (reader.onload = () => {
          const base64 = reader.result.split("base64,")[1]
          this.fileList.push({
            image: base64,
            extension: "." + ext[ext.length - 1],
          })
          e.target.value = ''
        })
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
      if(this.fileList[index] !== undefined) {
        this.fileList[index] = this.fileList.splice(0,1, this.fileList[index])[0]
      }
    }
  }
}
</script>
