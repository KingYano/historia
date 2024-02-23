<template>
  <header class="header-navigation">
    <p tabindex="0" @keydown.enter.prevent="goBack"  class="header-navigation-command header-navigation-previous" @click="goBack">Previous</p>
    <h1 tabindex="0" @keydown.enter.prevent="goHome" class="header-navigation-title" @click="goHome">Historia</h1>
    <p tabindex="0" @keydown.enter.prevent="goNext"  class="header-navigation-command header-navigation-next" @click="goNext">Next</p>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(['goBack', 'goHome', 'goNext']);

const goBack = () => {
  emit('goBack');
};

const goHome = () => {
  emit('goHome');
};

const goNext = () => {
  emit('goNext');
};
</script>

<style lang="scss">
  @import 'HeaderNavigation';
</style>
