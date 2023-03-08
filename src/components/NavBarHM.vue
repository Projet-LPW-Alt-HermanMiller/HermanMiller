<script>
import userIco from "@/assets/icons/userIco.vue";
import shoppingCartIco from "@/assets/icons/shoppingCartIco.vue";
import searchIco from "@/assets/icons/searchIco.vue";

export default {
  name: "NavBarHM",
  components: {
    userIco,
    shoppingCartIco,
    searchIco,
  },
  methods: {
    toggleMenu() {
      const menu = document.querySelector(".mobile__nav-menu");
      menu.classList.toggle("open");
    },
  },
};
</script>

<template>
  <nav class="nav">
    <div class="desktop">
      <div class="nav__elements nav__flex">
        <div class="nav__left nav__logo">
          <router-link to="/"
            ><img src="../assets/logos/HM_LDR.png" alt=""
          /></router-link>
        </div>
        <div class="nav__middle nav__flex">
          <ul class="nav__list nav__flex">
            <li class="nav__item titleNavBar">
              <router-link to="/produits">Sièges</router-link>
            </li>
            <li class="nav__item titleNavBar"><a href="#">Solutions</a></li>
            <li class="nav__item titleNavBar"><a href="#">Ressources</a></li>
          </ul>
        </div>
        <div class="nav__right nav__flex">
          <div class="nav__icon">
            <router-link to="/panier">
              <shopping-cart-ico />
            </router-link>
          </div>
          <div class="nav__icon">
            <router-link to="/login">
              <user-ico />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="mobile__navbar">
        <div class="mobile__logo">
          <router-link to="/"
            ><img src="../assets/logos/HM_LDR.png" alt=""
          /></router-link>
        </div>
        <div class="mobile__icon" v-on:click="toggleMenu()">
          <search-ico  />
        </div>
      </div>
      <div class="mobile__nav-menu">
        <ul class="mobile__list">
          <li class="mobile__item titleNavBar">
            <router-link to="/produits">Sièges</router-link>
          </li>
          <li class="mobile__item titleNavBar"><a href="#">Solutions</a></li>
          <li class="mobile__item titleNavBar"><a href="#">Ressources</a></li>
        </ul>
        <div class="mobile__icons">
          <div class="mobile__icon">
            <router-link to="/panier">
              <shopping-cart-ico />
            </router-link>
          </div>
          <div class="mobile__icon">
            <router-link to="/login">
              <user-ico />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  padding: 10px;
  display: inline-block;
  text-decoration: none;
  color: $black;

  &:hover {
    color: $HMColor;
  }
}
.desktop {
  @media (max-width: 768px) {
    display: none;
  }
}
.mobile {
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    z-index: 100;
    padding: -30px;
    margin-top: -10px;
    margin-left: -10px;
    &__navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      width: 100vw;
      padding-right: 30px;
      padding-top: 30px;
      padding-bottom: 32px;
      background-color: white;
    }
    &__logo {
      justify-content: center;
      img {
        max-width: 50px;
        display: inline-block;
      }
    }
    &__icons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    &__list {
      margin: 0;
      padding: 0;
    }
    &__item {
      text-align: center;
      font-size: 30px;
    }
    &__nav-menu {
      transform: translateX(100vw);
      background-color: white;
      transition: all ease-in-out 0.5s;
    }
    .open {
      transform: translateX(0);
    }
  }
}
.nav {
  padding: 10px;
  margin: 0;
  background: $white;

  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    justify-content: center;
    margin-left: 30px;

    img {
      max-width: 50px;
      display: inline-block;
    }
  }

  &__item {
    list-style: none;
  }

  &__right {
    width: 10%;
    justify-self: end;
    justify-content: space-around;
  }

  &__middle {
    width: 50%;
    justify-content: center;

    .nav__icon {
      padding-left: 20px;
    }
  }
}
</style>
