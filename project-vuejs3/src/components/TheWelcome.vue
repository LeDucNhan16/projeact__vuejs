<script setup lang="ts">
import SlideHome from "./ComponentHome/SliderHome.vue";
import IntroducingCars from "./ComponentHome/IntroducingCars.vue";
import EffectiveAdvertising from "./ComponentHome/EffectiveAdvertising.vue";
import ListOfCarManufacturers from "./ComponentHome/ListOfCarManufacturers.vue";
import WarnCustomers from "./ComponentHome/WarnCustomers.vue";
</script>

<template>
  <div class="wrapper">
    <SlideHome />
    <div class="container">
      <WarnCustomers />
      <ListOfCarManufacturers />
      <EffectiveAdvertising />
      <IntroducingCars />
    </div>
  </div>
</template>

<style scoped>
.col-8 {
  overflow: auto;
  max-height: 400px;
}
/* slide  */
.slide__image {
  margin-top: -50px;
  height: 450px;
  object-fit: none;
}

.slide__note__title {
  font-size: 20px;
}
</style>
