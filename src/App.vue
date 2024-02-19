<template>
  <div v-if="!selectedPainting">
    <div v-for="painting in paintings" :key="painting.id">
      <painting-card
          :image-painting="painting.imagePainting"
          :image-alt="painting.imageAlt"
          :sub-title="painting.subTitle"
          :date-painting="painting.datePainting"
          @cardClicked="() => showDetails(painting.id)"
      ></painting-card>
    </div>
  </div>
  <div v-else>
    <header-navigation></header-navigation>
    <painting-detail
        :main-title="selectedPainting.mainTitle"
        :sub-title="selectedPainting.subTitle"
        :info-location="selectedPainting.infoLocation"
        :info-characteristic="selectedPainting.infoCharacteristic"
        :first-paragraph="selectedPainting.firstParagraph"
        :second-paragraph="selectedPainting.secondParagraph"
        :image-painting="selectedPainting.imagePainting"
        :image-alt="selectedPainting.imageAlt"
    ></painting-detail>
    <footer-information></footer-information>
  </div>
</template>

<script setup lang="ts">
  import HeaderNavigation from "@/components/HeaderNavigation/HeaderNavigation.vue";
  import PaintingDetail from "@/components/PaintingDetail/PaintingDetail.vue";
  import FooterInformation from "@/components/FooterInformation/FooterInformation.vue";
  import PaintingCard from "@/components/PaintingCard/PaintingCard.vue";
  import { ref } from 'vue';
  import type { Painting } from '@/data/paintingsData';
  import { paintingsData } from '@/data/paintingsData';

  const paintings = ref<Painting[]>(paintingsData);
  const selectedPainting = ref<Painting | null>(null);

  const showDetails = (id: number) => {
    selectedPainting.value = paintings.value.find(p => p.id === id) || null;
  };
</script>
