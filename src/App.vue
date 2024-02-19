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
    <header-navigation @goBack="goBack" @goHome="goHome" @goNext="goNext"></header-navigation>

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
  import { ref } from 'vue';

  import type { Painting } from '@/data/paintingsData';
  import { paintingsData } from '@/data/paintingsData';

  import HeaderNavigation from "@/components/HeaderNavigation/HeaderNavigation.vue";
  import PaintingDetail from "@/components/PaintingDetail/PaintingDetail.vue";
  import PaintingCard from "@/components/PaintingCard/PaintingCard.vue";
  import FooterInformation from "@/components/FooterInformation/FooterInformation.vue";

  const paintings = ref<Painting[]>(paintingsData);
  const selectedPainting = ref<Painting | null>(null);

  const showDetails = (id: number) => {
    selectedPainting.value = paintings.value.find(p => p.id === id) || null;
  };

  const goHome = () => {
    selectedPainting.value = null;
  };

  const goNext = () => {
    const currentIndex = paintings.value.findIndex(p => p.id === selectedPainting.value?.id);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % paintings.value.length : 0;
    selectedPainting.value = paintings.value[nextIndex];
  };

  const goBack = () => {
    const currentIndex = paintings.value.findIndex(p => p.id === selectedPainting.value?.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : paintings.value.length - 1;
    selectedPainting.value = paintings.value[prevIndex];
  };
</script>
