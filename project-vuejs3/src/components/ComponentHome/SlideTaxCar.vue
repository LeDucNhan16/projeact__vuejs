<script setup lang="ts">
import IntroducingCars from "./IntroducingCars.vue";
</script>

<template>
  <div class="container">
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
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="../../assets/silde/tax-car1.jpg"
            class="slide__image d-block w-100"
            alt="car audi"
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="../../assets/silde/tax-car2.jpg"
            class="slide__image d-block w-100"
            alt="lamborghili"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/silde/tax-car3.jpg"
            class="slide__image d-block w-100"
            alt="car max"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/silde/tax-car4.png"
            class="slide__image d-block w-100"
            alt="car mes"
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
  </div>
</template>

<style scoped>
/* slide  */
.slide__image {
  height: 500px;
  object-fit: fill;
}

.slide__note__title {
  font-size: 20px;
}

.carousel-indicators {
  bottom: -25px;
}

/* Max */
@media screen and (max-width: 1199px) {
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
