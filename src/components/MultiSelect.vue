<template>
  <div class="select-wrapper">
    <div class="select" :class="{'select--active': isOpened}">
      <div class="select__list" :class="{active: isOpened}">
        <label class="select__item">
          <input
            class="select__input"
            type="checkbox"
            value="VIP"
            name="VIP"
            v-model="currentGroups"
          />
          <span class="select__name">VIP</span>
        </label>
        <label class="select__item">
          <input
            class="select__input"
            type="checkbox"
            value="Проблемные"
            name="Проблемные"
            v-model="currentGroups"
          />
          <span class="select__name">Проблемные</span>
        </label>
        <label class="select__item">
          <input
            class="select__input"
            type="checkbox"
            value="ОМС"
            name="ОМС"
            v-model="currentGroups"
          />
          <span class="select__name">ОМС</span>
        </label>
      </div>
      <div class="select__header" @click="isOpened = !isOpened" tabindex="0">Группа клиентов *</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import selectMixin from "@/mixins/select.mixin.js";

export default {
  props: ['checkedGroups'],
  data(){
    return {
      isOpened: false
    }
  },
  computed: {
    currentGroups: {
      get() {
        return this.checkedGroups
      },
      set(value) {
        this.$emit('update:checkedGroups', value)
      }
    }
  },
  mixins: [selectMixin]
}
</script>
