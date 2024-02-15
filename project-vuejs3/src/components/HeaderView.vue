<script setup></script>

<template>
  <header>
    <div class="wrapper__pc">
      <!-- nav pc  -->
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary fixed-top header__nav"
      >
        <div class="container-fluid">
          <a class="navbar-brand LogoHeader" href="/">
            <img
              class="image__logo"
              src="../assets/logo/logo__NL.jpg"
              alt="image__logo"
            />
            <h3 class="logo__user__header">Nhân Lê Car</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0"
              aria-labelledby="navbarDropdown"
            >
              <li class="nav-item">
                <RouterLink
                  class="nav-link"
                  aria-current="page"
                  to="/top-best-selling-cars"
                  >Top Best Selling Cars</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/service-car"
                  >Service</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/tax-incentives"
                  >Tax Incentives</RouterLink
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Free Consultation
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      target="_blank"
                      class="dropdown-item"
                      href="https://www.facebook.com/profile.php?id=100053872140355"
                      >Facebook</a
                    >
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/"
                      >Hotline</RouterLink
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      class="dropdown-item"
                      href="https://www.tiktok.com/@nhanle1602"
                      >Tiktok</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <!-- nav table and phone  -->
    <div class="wrapper__table">
      <nav class="navbar fixed-top">
        <div class="container-fluid wrapper__header">
          <a class="navbar-brand LogoHeader" href="/">
            <img
              class="image__logo"
              src="../assets/logo/logo__NL.jpg"
              alt="image__logo"
            />
            <h3 class="logo__user__header">Nhân Lê Car</h3>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end background__color__menu"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item wrapper__header__items">
                  <RouterLink
                    class="nav-link"
                    aria-current="page"
                    to="/top-best-selling-cars"
                    >Top Best Selling Cars</RouterLink
                  >
                </li>
                <li class="nav-item wrapper__header__items">
                  <RouterLink class="nav-link" to="/tax-incentives"
                    >Tax Incentives</RouterLink
                  >
                </li>
                <li class="nav-item wrapper__header__items">
                  <RouterLink class="nav-link" to="/service-car"
                    >Service</RouterLink
                  >
                </li>
                <li class="nav-item wrapper__header__items dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Free Consultation
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a
                        target="_blank"
                        class="dropdown-item"
                        href="https://www.facebook.com/profile.php?id=100053872140355"
                        >Facebook</a
                      >
                    </li>
                    <li>
                      <RouterLink class="dropdown-item" to="/"
                        >Hotline</RouterLink
                      >
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        target="_blank"
                        class="dropdown-item"
                        href="https://www.tiktok.com/@nhanle1602"
                        >Tiktok</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- hotline -->
    <div class="steering__wheel">
      <figure class="hotline__steeringWheel">
        <a href="/" style="margin-bottom: 100%"
          ><img
            class="rung"
            src="https://png.pngtree.com/png-vector/20240115/ourmid/pngtree-sholer-steering-wheel-cover-universal-png-image_11439609.png"
            width="200"
            height="200"
          />
        </a>
      </figure>
      <a class="hotLine__phone" href="tel:+84905927548">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-phone rung"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"
          />
        </svg>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <h4 class="hotLine__phone__title">Hotline: 0339614987</h4>
      </a>
      <a
        class="hotLine__facebook"
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100053872140355"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-facebook rung"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
          />
        </svg>

        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>

        <h4 class="hotLine__facebook__title">Hotline: Facebook</h4>
      </a>

      <a class="hotLine__tiktok" href="https://www.tiktok.com/@nhanle1602">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-tiktok rung"
          viewBox="0 0 16 16"
        >
          <path
            d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
          />
        </svg>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <h4 class="hotLine__tiktok__title">Hotline: Tiktok</h4>
      </a>
    </div>
    <link
      rel="stylesheet"
      href="https://cdn.leanhduc.pro.vn/utilities/animation/shake-effect/style.css"
    />
  </header>
</template>

<style scoped>
.dropdown-menu.show {
  background-color: #e8e8ea !important;
  margin: 20px 0 0 0;
  border: 1px solid #747475 !important;
  padding: 1px 0;
}
/* nav header */
.header__nav {
  background-color: #e8e8ea !important;

  z-index: 998;
  width: 100%;
}

/* nav table mobile  */

.wrapper__header {
  background-color: #e8e8ea !important;
  padding: 0;
  height: 60px;
  position: fixed;
  top: 0px;
}

.LogoHeader {
  display: flex;
  align-items: center;
}

h3.logo__user__header {
  margin-bottom: 0;
}

.image__logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.background__color__menu {
  background-color: #e8e8ea;
}

.wrapper__header__items {
  cursor: pointer;
  padding: 0 12px;
  border-radius: 4px;
}

.wrapper__header__items > a:hover {
  color: white;
}

.wrapper__header__items:hover {
  background-color: #747475;
  color: white;
}

.dropdown-menu.show {
  background-color: #747475;
  border: none;
}

/* hotline */
.steering__wheel {
  position: fixed;
  bottom: 100px;
  left: 30px;
  vertical-align: sub;
  object-fit: none;
  border-radius: 50%;
  z-index: 997;
}

.hotLine__facebook {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}

.hotLine__facebook__title {
  margin: 5px 0 0 15px;
}

.spinner-grow {
  position: fixed;
  width: 50px;
  height: 50px;
  left: 25px;
}

.hotLine__tiktok {
  display: flex;
  color: black;
}

.hotLine__phone {
  display: flex;
  color: green;
}

.hotLine__tiktok:hover {
  color: red;
}
.hotLine__phone__title,
.hotLine__tiktok__title {
  margin: 10px 0 0 15px;
}

/* rung */
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  10% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  20% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  30% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  40% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  50% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  100% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
}

.rung {
  margin-top: 5px;
  transition: all 150ms linear 0s;
  animation-name: pulse;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
}

/* Responsive design */
/* Min  */
@media screen and (min-width: 992px) {
  .wrapper__table {
    display: none;
  }
}
/* Max */
@media screen and (max-width: 1199px) {
  .nav-item.dropdown {
    display: none;
  }
}

@media screen and (max-width: 991px) {
  .hotline__steeringWheel {
    display: none;
  }

  .header__nav {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .hotLine__facebook__title {
    display: none;
  }
  .hotLine__tiktok__title,
  .hotLine__phone__title {
    display: none;
  }
}

/* PC VS Tablet  */
</style>
