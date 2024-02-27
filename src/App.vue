<template>
  <section class="painting-app" v-if="!selectedPainting">
    <div class="painting-cards">
      <painting-card
          v-for="painting in paintings"
          :key="painting.id"
          :image-painting="painting.imagePainting"
          :image-alt="painting.imageAlt"
          :sub-title="painting.subTitle"
          :date-painting="painting.datePainting"
          :painting-id="painting.id"
          @cardClicked="() => showDetails(painting.id)"
      ></painting-card>
      <div class="scroll-btn"></div>
    </div>
  </section>
  <section v-else>
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
  </section>
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const showDetails = (id: number) => {
    selectedPainting.value = paintings.value.find(p => p.id === id) || null;
    scrollToTop();
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


