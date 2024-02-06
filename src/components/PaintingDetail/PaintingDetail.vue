<template>
  <section class="painting-detail">
    <div class="painting-detail-text">
      <h2 class="painting-detail-text-title">{{ mainTitle }}</h2>
      <h3 class="painting-detail-text-subtitle">{{ subTitle }}</h3>
      <p class="painting-detail-text-location">{{ infoLocation }}</p>
      <p class="painting-detail-text-characteristic">{{ infoCharacteristic }}</p>
      <p class="painting-detail-first-paragraph">{{ firstParagraph }}</p>
      <p class="painting-detail-second-paragraph">{{ secondParagraph }}</p>
    </div>
    <div class="painting-detail-image">
      <img src="" alt="">
    </div>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps({
    mainTitle: String,
    subTitle: String,
    infoLocation: String,
    infoCharacteristic: String,
    firstParagraph: String,
    secondParagraph: String
  })

</script>

<style lang="scss">
  @import 'PaintingDetail';
</style>
