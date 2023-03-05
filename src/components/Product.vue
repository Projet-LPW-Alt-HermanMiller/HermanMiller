<template>
  <div class="product">
    <RouterLink :class="'product__link'" :to="`/produit/${slug}`">
      <img v-if="image" class="product__image" :src="image" alt="" />
      <p class="product__name">{{ name }}</p>
      <span class="product__price">{{ price }}€</span>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "ProductVue",
  props: {
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
  },

  computed: {
    image() {
      if (!this.images.length) return;
      return this.images[0].src;
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  &__link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image {
    width: 280px;
  }

  &__name {
    font-size: 20px;
    font-weight: 700;
    color: #243b3b;
    margin-top: 10px;
    text-align: center;
  }

  &__price {
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    color: $secondary-color;
    margin-top: 5px;
    text-align: center;
  }
}
</style>
