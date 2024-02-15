<template>
  <div class="wrapper__list row">
    <h2 class="wrapper__list__car">
      Nhan Le Car's quality cars can go on any terrain
    </h2>
    <div class="card carSub" style="width: 18rem">
      <img
        src="../../assets/topographic/wrapper__list__car1.jpg"
        class="card-img-top list__car__image"
        alt="wrapper__list__car1"
      />
      <div class="card-body">
        <h5 class="card-title">Car goes on mountain passes</h5>
        <p class="card-text">
          NhanLe Car's cars can go on any terrain, we hope to accompany
          customers around the world.
        </p>
      </div>
    </div>
    <div class="card carSub" style="width: 18rem">
      <img
        src="../../assets/topographic/wrapper__list__car2.jpg"
        class="card-img-top list__car__image"
        alt="wrapper__list__car2"
      />
      <div class="card-body">
        <h5 class="card-title">car traveling on desert roads</h5>
        <p class="card-text">
          NhanLe Car's cars can go on any terrain, we hope to accompany
          customers around the world.
        </p>
      </div>
    </div>
    <div class="card carSub" style="width: 18rem">
      <img
        src="../../assets/topographic/wrapper__list__car3.jpg"
        class="card-img-top list__car__image"
        alt="wrapper__list__car3"
      />
      <div class="card-body">
        <h5 class="card-title">car on brick road</h5>
        <p class="card-text">
          NhanLe Car's cars can go on any terrain, we hope to accompany
          customers around the world.
        </p>
      </div>
    </div>
    <div class="card carSub" style="width: 18rem">
      <img
        src="../../assets/topographic/wrapper__list__car4.jpg"
        class="card-img-top list__car__image"
        alt="wrapper__list__car4"
      />
      <div class="card-body">
        <h5 class="card-title">car driving on snowy roads</h5>
        <p class="card-text">
          NhanLe Car's cars can go on any terrain, we hope to accompany
          customers around the world.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  justify-content: space-between;
  margin: 0 0px px;
}

.wrapper__list {
  padding: 0 12px;
}

.wrapper__list__car {
  margin: 70px 0 30px 0;
  display: flex;
  justify-content: center;
}

.carSub {
  padding: 0;
  margin-bottom: 20px;
}

.list__car__image {
  height: 200px;
  cursor: pointer;
}

/* Responsive design */

@media screen and (max-width: 767px) {
  .list__car__image {
    width: 100%;
    height: 300px;
  }

  .card.carSub {
    width: 100% !important;
  }
}
</style>
