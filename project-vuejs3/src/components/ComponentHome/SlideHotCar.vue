<script setup lang="ts">
import IntroducingCars from "./IntroducingCars.vue";
</script>

<template>
  <div class="slide__topCar">
    <!-- slide -->
    <div id="carouselExampleDark" class="carousel carousel-dark">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="../../assets/top car hot/image__slide__accent.jpg"
            class="slide__image d-block w-100"
            alt="car audi"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Huyndai Accent</h3>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="../../assets/top car hot/image__slide__mazda3.jpg"
            class="slide__image d-block w-100"
            alt="lamborghili"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Mazda 3</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/top car hot/image__slide__hondaCity.jpg"
            class="slide__image d-block w-100"
            alt="car max"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Honda City</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/top car hot/image__slide__elentra.jpg"
            class="slide__image d-block w-100"
            alt="car mes"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Mitsubishi Attrage</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/top car hot/image__slide__vios.jpg"
            class="slide__image d-block w-100"
            alt="car spost"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Toyota Vios</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/top car hot/image__slide__k3.jpg"
            class="slide__image d-block w-100"
            alt="car spost"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>KIA K3</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/top car hot/image__slide__camry.jpg"
            class="slide__image d-block w-100"
            alt="car spost"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Toyota Camry</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/top car hot/image__slide__elentra.jpg"
            class="slide__image d-block w-100"
            alt="car spost"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Toyota Elantra</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/top car hot/image__slide__altis.jpg"
            class="slide__image d-block w-100"
            alt="car spost"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Toyota Eltis</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/top car hot/image__slide__civic.jpg"
            class="slide__image d-block w-100"
            alt="car spost"
          />
          <div class="slide__note carousel-caption d-none d-md-block">
            <h3>Honda Civic</h3>
          </div>
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
.slide__topCar {
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

.slide__image {
  margin-top: -50px;
  height: 450px;
  object-fit: none;
}

.slide__note__title {
  font-size: 20px;
}
</style>
