<template>
  <div class="wrapper">
    <header class="header">Форма создания клиента</header>
    <main class="main">
      <form class="form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">Атрибуты формы:</legend>
          <div class="form__labels-wrapper">
            <label class="form__label">
              <input
                class="form__input"
                type="text"
                name="Фамилия"
                v-model="userData.lastName"
                :class="{'form__input--invalid': $v.userData.lastName.$error}"
              />
              <span class="form__value">Фамилия *</span>
              <span class="form__error" v-if="$v.userData.lastName.$error">Обязательное поле</span>
            </label>
            <label class="form__label">
              <input
                class="form__input"
                type="text"
                name="Имя"
                v-model="userData.firstName"
                :class="{'form__input--invalid': $v.userData.firstName.$error}"
              />
              <span class="form__value">Имя *</span>
              <span class="form__error" v-if="$v.userData.firstName.$error">Обязательное поле</span>
            </label>
            <label class="form__label">
              <input class="form__input" type="text" name="Отчество" v-model="userData.middleName"/>
              <span class="form__value">Отчество</span>
            </label>
            <label class="form__label">
              <input
                class="form__input"
                type="date"
                name=" Дата рождения"
                v-model="userData.birthday"
                :class="{'form__input--invalid': $v.userData.birthday.$error}"
              />
              <span class="form__value">Дата рождения *</span>
              <span class="form__error" v-if="$v.userData.birthday.$error">Обязательное поле</span>
            </label>
            <label class="form__label">
              <input
                class="form__input"
                type="tel"
                name="Номер телефона"
                v-model="userData.tel"
                :class="{'form__input--invalid': $v.userData.tel.$error}"
              />
              <span class="form__value">Номер телефона *</span>
              <span
                class="form__error"
                v-if="!$v.userData.tel.required && $v.userData.tel.$dirty"
              >Обязательное поле</span>
              <span
                class="form__error"
                v-else-if="!$v.userData.tel.startsWith && $v.userData.tel.$dirty"
              >Телефон должен начинаться с "7"</span>
              <span
                class="form__error"
                v-else-if="!$v.userData.tel.length && $v.userData.tel.$dirty"
              >Поле должно содержать 11 цифр</span>
              <span
                class="form__error"
                v-else-if="$v.userData.tel.$dirty && !$v.userData.tel.numeric"
              >Поле должно содержать 11 цифр</span>
            </label>
            <label class="form__label">
              <input class="form__input" type="text" name="Пол" v-model="userData.gender"/>
              <span class="form__value">Пол</span>
            </label>
            <MultiSelect
              :checkedGroups.sync="userData.checkedGroups"
              :class="{'select-wrapper--invalid': $v.userData.checkedGroups.$error}"
            >
              <span class="select__error" v-if="$v.userData.checkedGroups.$error">Обязательное поле</span>
            </MultiSelect>
            <BaseSelect :value.sync="userData.doctor" :items="doctors" name="Лечащий врач" />
            <label class="form__label form__label--check">
              <input class="form__checkbox" type="checkbox" name="Не отправлять СМС"  v-model="userData.sms" />
              <span class="form__value form__value--check">Не отправлять СМС</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="form__fieldset">
          <legend class="form__legend">Адрес:</legend>
          <div class="form__labels-wrapper">
            <label class="form__label">
              <input class="form__input" type="text" name="Индекс" v-model="userData.index" />
              <span class="form__value">Индекс</span>
            </label>
            <label class="form__label">
              <input class="form__input" type="text" name="Страна"  v-model="userData.country"/>
              <span class="form__value">Страна</span>
            </label>
            <label class="form__label">
              <input class="form__input" type="text" name="Область" v-model="userData.area" />
              <span class="form__value">Область</span>
            </label>
            <label class="form__label">
              <input
                class="form__input"
                type="text"
                name="Город"
                v-model="userData.city"
                :class="{'form__input--invalid': $v.userData.city.$error}"
              />
              <span class="form__value">Город *</span>
              <span class="form__error" v-if="$v.userData.city.$error">Обязательное поле</span>
            </label>
            <label class="form__label">
              <input class="form__input" type="text" name="Улица" v-model="userData.street" />
              <span class="form__value">Улица</span>
            </label>
            <label class="form__label">
              <input class="form__input" type="text" name="Дом"  v-model="userData.home"/>
              <span class="form__value">Дом</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="form__fieldset">
          <legend class="form__legend">Паспорт:</legend>
          <div class="form__labels-wrapper">
            <BaseSelect
              :value.sync="userData.document"
              :items="documents"
              name="Тип документа *"
              :class="{'select-wrapper--invalid': $v.userData.checkedGroups.$error}"
            >
              <span class="select__error" v-if="$v.userData.document.$error">Обязательное поле</span>
            </BaseSelect>
            <label class="form__label">
              <input class="form__input" type="text" name="Серия"  v-model="userData.series"/>
              <span class="form__value">Серия</span>
            </label>
            <label class="form__label">
              <input class="form__input" type="text" name="Номер"  v-model="userData.number"/>
              <span class="form__value">Номер</span>
            </label>
            <label class="form__label">
              <input class="form__input" type="text" name="Кем выдан"  v-model="userData.issued"/>
              <span class="form__value">Кем выдан</span>
            </label>
            <label class="form__label">
              <input
                class="form__input"
                type="date"
                name="Дата выдачи"
                v-model="userData.passportDate"
                :class="{'form__input--invalid': $v.userData.passportDate.$error}"
              />
              <span class="form__value">Дата выдачи *</span>
              <span class="form__error" v-if="$v.userData.passportDate.$error">Обязательное поле</span>
            </label>
          </div>
        </fieldset>
        <button class="form__btn" type="submit" @click.prevent="submitForm">Отправить</button>
      </form>
      <span class="tooltip" ref="tooltip">Клиент успешно создан</span>
    </main>
    <footer class="footer">footer</footer>
  </div>
</template>

<script>
import MultiSelect from '@/components/MultiSelect.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import doctors from '@/data/doctors.data.js'
import documents from '@/data/documents.data.js'
import { startsWith, length } from '@/validators/phoneValidator.js'
import { required, minLength, numeric } from 'vuelidate/lib/validators'

export default {
  components: { MultiSelect, BaseSelect },
  data() {
    return {
      doctors,
      documents,
      userData: {
        firstName: '',
        lastName: '',
        middleName: '',
        birthday: '',
        tel: '',
        gender: '',
        checkedGroups: [],
        doctor: null,
        sms: null,
        index: '',
        country: '',
        area: '',
        city: '',
        street: '',
        home: '',
        document: null,
        series: '',
        number: '',
        issued: '',
        passportDate: '',
      },
      clientAdded: false
    }
  },
  validations: {
    userData: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      birthday: {
        required,
      },
      tel: {
        required,
        numeric,
        length,
        startsWith,
      },
      city: {
        required,
      },
      document: {
        required,
      },
      passportDate: {
        required,
      },
      checkedGroups: {
        required,
        minLength: minLength(1),
      }
    }
  },
  methods: {
    submitForm() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.showTooltip()
      this.resetForm()
    },
    showTooltip() {
      this.$refs.tooltip.classList.add('tooltip--active')
      setTimeout(() => {
        this.$refs.tooltip.classList.remove('tooltip--active')
      }, 3000)
    },
    resetForm(){
      Object.keys(this.userData).forEach( item => {
        if(item === 'checkedGroups'){
          this.userData[item] = []
        }
        else if(item === 'document' || item === 'sms' || item === 'doctor'){
          this.userData[item] = null
        } else {
          this.userData[item] = ''
        }
      })
      this.$v.$reset()
    }
  },
}
</script>
