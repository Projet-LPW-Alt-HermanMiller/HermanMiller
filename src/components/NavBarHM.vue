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
  }
}
</script>

<template>
  <nav class="nav">
    <div class="nav__elements nav__flex">
      <div class="nav__left nav__logo"><a href="index.html"><img src="../assets/logos/HM_LDR.png"></a></div>
      <div class="nav__middle nav__flex">
        <ul class="nav__list nav__flex">
          <li class="nav__item titleNavBar"><a href="#">Sièges</a></li>
          <li class="nav__item titleNavBar"><a href="#">Solutions</a></li>
          <li class="nav__item titleNavBar"><a href="#">Ressources</a></li>
        </ul>
        <div class="nav__icon">
          <search-ico/>
        </div>
      </div>
      <div class="nav__right nav__flex">
        <div class="nav__icon">
          <shopping-cart-ico/>
        </div>
        <div class="nav__icon">
          <router-link to="/login">
            <user-ico/>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

.nav {
  padding: 10px;
  margin: 0px;
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

    a {
      padding: 10px;
      display: inline-block;
      text-decoration: none;
      color: $black;

      &:hover {
        color: $HMColor;
      }
    }
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
