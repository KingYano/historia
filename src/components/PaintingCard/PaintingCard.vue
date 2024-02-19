<template>
  <section class="painting-card" v-on:click="handleClick">
    <a class="painting-card-button">
      <img class="painting-card-image" :src="imagePainting" :alt="imageAltText">
      <div class="painting-card-info">
        <h1 class="painting-card-info-title">{{ subTitle }}</h1>
        <p class="painting-card-info-date">{{ datePainting }}</p>
      </div>
    </a>
  </section>
</template>

<script setup lang="ts">

  const props = defineProps({
    imagePainting: String,
    imageAltText: String,
    subTitle: String,
    datePainting: String,
  })

  const emit = defineEmits(['cardClicked']);

  const handleClick = () => {
    emit('cardClicked');
  }
</script>

<style lang="scss">
  @import "PaintingCard";
</style>