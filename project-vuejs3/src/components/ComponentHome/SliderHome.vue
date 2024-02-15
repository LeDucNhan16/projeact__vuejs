<script setup lang="ts">
import IntroducingCars from "./IntroducingCars.vue";
</script>

<template>
  <!-- slide -->
  <div id="carouselExampleDark" class="carousel carousel-dark">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="5"
        aria-label="Slide 6"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="../../assets/silde/slide__car__main1.jpg"
          class="slide__image d-block"
          alt="car audi"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/silde/slide__car__main2.jpg"
          class="slide__image d-block"
          alt="car audi"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/silde/slide__car__main3.jpg"
          class="slide__image d-block"
          alt="car audi"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/silde/slide__car__main4.jpg"
          class="slide__image d-block"
          alt="car audi"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/silde/slide__car__main5.jpg"
          class="slide__image d-block"
          alt="car audi"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/silde/slide__car__main6.jpg"
          class="slide__image d-block"
          alt="car audi"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
/* slide  */
.slide__image {
  margin-top: 50px;
  height: 700px;
  object-fit: fill;
  width: 100%;
}

.slide__note__title {
  font-size: 20px;
}

.carousel-dark .carousel-caption {
  color: #fff;
}

.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #fff;
}

.carousel-dark .carousel-control-next-icon,
.carousel-dark .carousel-control-prev-icon {
  filter: invert(1) grayscale(100);
  width: 70px;
  height: 70px;
  color: #fff;
}

@media screen and (max-width: 1399px) {
  .slide__image {
    height: 600px;
  }
}

@media screen and (max-width: 1199px) {
  .slide__image {
    height: 500px;
  }
}

@media screen and (max-width: 991px) {
  .slide__image {
    height: 400px;
  }
}

@media screen and (max-width: 767px) {
  .slide__image {
    height: 300px;
  }
}
</style>
