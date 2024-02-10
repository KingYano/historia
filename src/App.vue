<template>
  <header-navigation></header-navigation>
  <painting-detail
      :main-title="mainTitle"
      :sub-title="subTitle"
      :info-location="infoLocation"
      :info-characteristic="infoCharacteristic"
      :first-paragraph="firstParagraph"
      :second-paragraph="secondParagraph"
  ></painting-detail>
</template>

<script setup lang="ts">
import HeaderNavigation from "@/components/HeaderNavigation/HeaderNavigation.vue";
import PaintingDetail from "@/components/PaintingDetail/PaintingDetail.vue";
import { ref } from 'vue';

const mainTitle = ref('Pandemonium');
const subTitle = ref('Chaos Unleashed');
const infoLocation = ref('John Martin (1789 - 1854), United Kingdom, 1841');
const infoCharacteristic = ref('Oil on canvas, 123 cm x 185 cm');
const firstParagraph = ref('The painting "Pandemonium" by John Martin is an iconic work of English Romanticism, created in 1841. It is inspired by John Milton\'s epic poem "Paradise Lost," which narrates the fall of man and Satan\'s rebellion against God. The term "Pandemonium" refers to the capital of Hell in the poem, constructed by demons.');
const secondParagraph = ref('In this painting, Martin depicts Pandemonium as a vast and imposing architectural structure, reflecting the grandeur and terror of Hell. The work is characterized by a dramatic contrast between light and darkness, with meticulous details and a monumental scale that amplify the sense of awe and majesty. The painting demonstrates Martin\'s talent for creating dramatic and apocalyptic landscapes, captivating the viewer with its intensity and imaginative portrayal of chaos and desolation.');
</script>

<style lang="scss">

</style>
