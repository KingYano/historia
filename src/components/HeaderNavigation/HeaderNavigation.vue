<template>
  <header class="header-navigation">
    <a class="header-navigation-command header-navigation-previous" @click="goBack">Previous</a>
    <h1 class="header-navigation-title" @click="goHome">Historia</h1>
    <a class="header-navigation-command header-navigation-next" @click="goNext">Next</a>
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
