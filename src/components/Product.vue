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

<style lang="scss" scoped></style>
