<template>
  <div :class="['cart-product', `-is-layout-${layout}`]">
    <img v-if="image" class="cart-product__image" :src="image" alt="" />
    <p class="cart-product__name">{{ name }}</p>
    <span class="cart-product__quantity">
      <button class="cart-product__quantity-button" @click="onDecreaseQuantity">
        -
      </button>
      Quantité : {{ quantity }}
      <button class="cart-product__quantity-button" @click="onIncreaseQuantity">
        +
      </button>
    </span>
    <span class="cart-product__price">Prix : {{ price }}€</span>
    <span class="cart-product__price -is-total">Total : {{ total }}€</span>
    <span class="cart-product__delete" @click="onDeleteClick">X</span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    slug: {
      type: String,
      default: null,
    },
    images: {
      type: Array,
      default: () => [],
    },
    quantity: {
      type: Number,
      default: null,
    },
    layout: {
      type: String,
      default: "cart",
      validator: (layout) => {
        return ["cart", "order"].includes(layout);
        // return layout === 'cart' || layout === 'order'
      },
    },
  },

  computed: {
    total() {
      return this.price * this.quantity;
    },
    image() {
      if (!this.images.length) return;
      return this.images[0].src;
    },
  },

  methods: {
    onDecreaseQuantity() {
      // this.$store.commit('updateQuantity', 'id-action')
      // this.$store.commit('updateQuantity', [id, 'action'])
      this.$store.commit("updateQuantity", { id: this.id, action: "decrease" });
    },

    onIncreaseQuantity() {
      this.$store.commit("updateQuantity", { id: this.id, action: "increase" });
    },

    onDeleteClick() {
      this.$store.commit("remove", this.id);
    },
  },
};
</script>

<style lang="scss">
span {
  display: inline-block;
  margin: 10px 0;
}
.cart-product {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-flow: column wrap;
  }

  &.-is-layout-cart {
    align-items: center;
  }

  &.-is-layout-order {
    flex-flow: column wrap;
  }

  &__image {
    width: 200px;
    height: auto;
  }

  &__name {
    font-size: 20px;
    font-weight: 700;
  }
  &__quantity {
    display: flex;
    align-items: center;
    .-is-layout-order & {
      display: none;
    }
  }

  &__quantity-button {
    width: 34px;
    height: 34px;
    border-radius: 2px;
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .-is-layout-order & {
      display: none;
    }
  }
  &__price {
    display: inline-block;
    font-size: 18px;
  }

  &__delete {
    font-size: 25px;
    font-weight: 700;
    color: black;
    cursor: pointer;

    &:hover {
      color: red;
    }

    .-is-layout-order & {
      display: none;
    }
  }
}
</style>
