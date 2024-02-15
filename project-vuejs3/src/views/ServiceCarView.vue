<script setup lang="ts">
import FooterView from "../components/FooterView.vue";
</script>

<template>
  <div class="wrapper">
    <h1 class="title">
      What Does the Car Service Center Provide to Customers?
    </h1>
    <div class="container wrapper__border">
      <ul class="wrapper__service">
        <li class="wrapper__service__list">
          Ten quality scores for the car service center's services are not only
          evaluated based on beautiful facilities and good location, modern
          equipment and tools but also rely on skills, reputation and expertise
          career of experts. Not outside those standards, that These are also
          the values that Thanh Phong strives to bring services to his god.
        </li>
        <li class="wrapper__service__list">
          And to understand better, let's learn about repair and services
          maintenance of some current car service centers including Thanh Phong.
          <img
            class="service__image"
            src="../assets/service/service1.jpg"
            alt="service"
          />
          In recent years, the Vietnamese automobile market has truly become a
          potential market not only for domestic car brands but also for famous
          brands in the world. Along with the invention of producing good cars,
          after-sales service is also focused and strongly developed.
        </li>
        <h3>
          Below are 7 items that the car service center is currently providing:
        </h3>
      </ul>
      <ul class="wrapper__service">
        <h4>1. Dịch vụ bảo hành xe ô tô định kỳ</h4>
        <li class="wrapper__service__list">
          <img
            class="service__image"
            src="../assets/service/service2.jpg"
            alt="service"
          />
          During the warranty period, the maintenance center will be responsible
          for free repair of car damage from materials to production according
          to previous regulations and terms. Customers will be carefully and
          thoughtfully reminded by the maintenance center to schedule regular
          vehicle maintenance.
        </li>
      </ul>
      <ul class="wrapper__service">
        <h4>2. Cung cấp phụ tùng chính hãng</h4>
        <li class="wrapper__service__list">
          <img
            class="service__image"
            src="../assets/service/service3.jpg"
            alt="service"
          />
          The diverse market makes it impossible for customers to distinguish
          between genuine car parts. The car service center will provide
          customers with genuine spare parts that are designed, manufactured and
          quality tested to comply with the most stringent standards. Thanks to
          that, the spare parts that these centers provide always ensure
          customer satisfaction thanks to the best fit, durability and
          performance. Thereby extending the car's lifespan as well as ensuring
          the highest safety for customers.
        </li>
      </ul>
      <ul class="wrapper__service">
        <h4>3. Painting service to make the car look like new</h4>
        <li class="wrapper__service__list">
          <img
            class="service__image"
            src="../assets/service/service4.jpg"
            alt="service"
          />
          Painting service is loved by many customers because it makes the car
          new again after a period of use. It is the whole process of molding,
          welding and bronze the car body, then repainting it to make the car
          body like new.
        </li>
      </ul>
      <ul class="wrapper__service">
        <h4>4. Maintenance service</h4>
        <li class="wrapper__service__list">
          <img
            class="service__image"
            src="../assets/service/service5.jpg"
            alt="service"
          />Maintenance service is a series of tasks that car manufacturers are
          required to do for vehicles after a period of operation. In recent
          years, express maintenance service has been very popular because it
          meets quality, shortens time and optimizes costs while still bringing
          customer satisfaction.
        </li>
      </ul>
      <ul class="wrapper__service">
        <h4>5. Repair service</h4>
        <li class="wrapper__service__list">
          Car repair services are like doctors treating patients. Just
          diagnosing the disease correctly and giving the right method will
          quickly repair the car's damage.
        </li>
      </ul>
      <ul class="wrapper__service">
        <h4>6. Car beauty care</h4>
        <li class="wrapper__service__list">
          <img
            class="service__image"
            src="../assets/service/service6.jpg"
            alt="service"
          />
          <a class="service__link" href="#"
            >If you are bored with the interior and exterior of your car, you
            can apply a new coat of paint to your car by:</a
          >
          <ul class="list__items">
            <li class="list__items__description">Nano coating for vehicles.</li>
            <li class="list__items__description">Perform underbody coating.</li>
            <li class="list__items__description">Unclog the injector.</li>
            <li class="list__items__description">
              Descale the combustion chamber.
            </li>
            <li class="list__items__description">
              Coating nano glass or applying heat-insulating film.
            </li>
            <li class="list__items__description">Car cleaning.</li>
          </ul>
        </li>
      </ul>
      <ul class="wrapper__service">
        <h4>7. Customer care and consulting and rescue support</h4>
        <li class="wrapper__service__list">
          <img
            class="service__image"
            src="../assets/service/service7.jpg"
            alt="service"
          />
          Consulting, repair, maintenance and rescue support services are always
          provided 24/7. Anytime you have questions about car-related issues,
          they will be answered quickly and accurately. In case your car needs
          rescue, it will also be served quickly. Above are the after-sales
          services that the car service center will provide to customers. If you
          are in need of taking care of your traveling companion, come and
          experience Thanh Phong's service. Thanh Phong is a quality and
          effective auto parts repair, maintenance and supplier trusted by many
          people. The team of experienced and skilled experts at Thanh Phong
          Auto will definitely bring you the most satisfaction.
        </li>
      </ul>
    </div>
  </div>
  <FooterView />
</template>

<style>
.title {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin: 40px 0;
}

.container {
  padding: 15px;
  border-radius: 8px;
}

.wrapper__border {
  border: 1px solid #ddd;
  padding: 25px;
}

.wrapper__service {
  margin-bottom: 25px;
  padding: 0;
}

.wrapper__service__list {
  font-size: 18px;
  list-style: none;
  margin-bottom: 10px;
}

.service__image {
  display: block;
  width: 800px;
  height: 400px;
  margin: 25px auto;
}

.service__link {
  font-size: 20px;
}

.list__items__description {
  list-style: inherit;
  margin: 5px 0 0 0;
  padding-left: 5px;
}

/* Max */
@media screen and (max-width: 991px) {
  .service__image {
    width: 100%;
    max-height: 330px;
  }

  .title {
    margin: 40px 50px;
  }
}
</style>
