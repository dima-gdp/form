<template>
  <div class="select-wrapper">
    <div class="select" :class="{'select--active': isOpened}">
      <div class="select__list" :class="{active: isOpened}">
        <label class="select__item" v-for="item in items" :key="item.id">
          <input
            class="select__input"
            type="radio"
            :name="item.value"
            :value="item.value"
            v-model="updateValue"
          />
          <span class="select__name">{{item.value}}</span>
        </label>
      </div>
      <div class="select__header"  @click="isOpened = !isOpened" tabindex="0">{{currentValue}}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import selectMixin from "@/mixins/select.mixin.js";

export default {
  props: ['value', 'items', 'name'],
  computed: {
    updateValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update:value', value)
      }
    },
    currentValue() {
      return this.updateValue ? this.value : this.name
    }
  },
  mixins: [selectMixin]
}
</script>
