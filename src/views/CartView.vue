<template>
  <div class="cart-view">
    <div class="container">
      <h1 class="cart-view__title">Mon panier</h1>
      <div v-if="$store.state.cart.length" class="cart-view__list">
        <div
          class="cart-view__item"
          v-for="(product, index) in $store.state.cart"
          :key="index"
        >
          <CartProduct
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :images="product.images"
            :quantity="product.quantity"
          />
        </div>
        <div class="cart-view__total">Total du panier : {{ cartTotal }}€</div>
        <div class="cart-view__validate">
          <router-link to="/cart/order">
            <ButtonHM>Valider le panier</ButtonHM>
          </router-link>
        </div>
      </div>
      <div v-else>Le panier est vide</div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";
import ButtonHM from "@/components/ButtonHM.vue";

export default {
  components: { ButtonHM, CartProduct },

  computed: {
    cartTotal() {
      // New method to accumulate values
      return this.$store.state.cart.reduce((total, product) => {
        total += product.price * product.quantity;
        return total;
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
}
.cart-view {
  display: flex;
  flex-direction: column;
  margin: 0 100px;
  min-height: 100vh;
  @media (max-width: 768px) {
    margin: 0 20px;
    padding-top: 70px;
  }
  &__validate {
    display: flex;
    @media (max-width: 768px) {
      justify-content: center;
      margin-top: 30px;
    }
  }
  &__list {
    margin: auto 0;
  }

  &__item {
    &:not(:first-of-type) {
      border-top: 1px solid black;
    }
  }

  &__total {
    font-size: 22px;
    font-weight: 700;
    margin: 30px 0 0 auto;
    text-align: right;

  }
}
</style>
