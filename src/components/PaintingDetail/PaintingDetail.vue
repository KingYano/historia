<template>
  <section class="painting-detail">
    <div class="painting-detail-text">
      <h2 class="painting-detail-text-title">{{ mainTitle }}</h2>
      <h3 class="painting-detail-text-subtitle">{{ subTitle }}</h3>
      <p class="painting-detail-text-location">{{ infoLocation }}</p>
      <p class="painting-detail-text-characteristic">{{ infoCharacteristic }}</p>
      <div class="painting-detail-text-paragraph">
        <p v-for="(firstParagraph, index) in firstParagraphSentences" :key="`first-${index}`" :class="{'first-paragraph': true, 'last-first-paragraph': index === firstParagraphSentences.length - 1}">
          {{ firstParagraph }}
        </p>
        <p v-for="(secondParagraph, index) in secondParagraphSentences" :key="`second-${index}`" class="second-paragraph">
          {{ secondParagraph }}
        </p>
      </div>
    </div>
    <div class="painting-detail-image">
      <img :src="imagePainting" :alt="imageAlt">
    </div>
  </section>
</template>

<script setup lang="ts">
  import {computed} from "vue";

  const props = defineProps({
    mainTitle: String,
    subTitle: String,
    infoLocation: String,
    infoCharacteristic: String,
    firstParagraph: String,
    secondParagraph: String,
    imagePainting: String,
    imageAlt: String
  })

  const firstParagraphSentences = computed(() => props.firstParagraph?.match(/[^\.!\?]+[\.!\?]+/g) || []);
  const secondParagraphSentences = computed(() => props.secondParagraph?.match(/[^\.!\?]+[\.!\?]+/g) || []);
</script>

<style lang="scss">
  @import 'PaintingDetail';
</style>
