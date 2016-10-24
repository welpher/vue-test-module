<template>
    <a class="cell" @click="goto">
      <span class="cell-mask" v-if="isLink"></span>
      <div class="cell-title" v-if="$slots.icon || icon || $slots.title || title">
        <slot name="icon">
          <i v-if="icon" class="icon" :class="'dark-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="cell-text" v-if="title" v-text="title"></span>
          <span v-if="label" class="cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="cell-value" v-if="$slots.value || value">
        <slot name="value">
          <span v-text="value"></span>
        </slot>
      </div>
      <i v-if="isLink" class="cell-allow_right"></i>
      <slot></slot>
    </a>
</template>

<script>

export default {
  name: 'lm-cell',
  methods: {
    goto(){
      if(this.click) this.click(this);
    }
  },
  props: {
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: String,
    click:Function
  },
  beforeCreate(){
    console.log(this)
  }
};
</script>

<style>
 
</style>
