<template>
  <section class="painting-card" v-on:click="handleClick">
    <div class="painting-card-wrapper">
      <img :class="['painting-card-image', imageClass]" :src="imagePainting" :alt="imageAlt">
      <div class="painting-card-overlay"></div>
      <div class="painting-card-info">
        <h1 class="painting-card-info-title">{{ subTitle }}</h1>
        <p class="painting-card-info-date">{{ datePainting }}</p>
      </div>
      <div class="painting-card-number">
        <p>{{ paintingId }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps({
    imagePainting: String,
    imageAlt: String,
    subTitle: String,
    datePainting: String,
    paintingId: Number
  })

  const emit = defineEmits(['cardClicked']);

  const imageClass = computed(() => {
    const formattedSubTitle = props.subTitle!.replace(/\s+/g, '-').toLowerCase();
    return `painting-card-image-${formattedSubTitle}`;
  });

  const handleClick = () => {
    emit('cardClicked');
  }
</script>

<style lang="scss">
  @import "PaintingCard";
</style>
