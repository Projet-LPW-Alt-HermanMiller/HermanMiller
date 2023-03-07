<template>
  <div class="product-view">
    <div class="product-view__container">
      <div class="product-view__gallery">
        <ProductGallery :images="displayedProduct.images" />
      </div>
      <div class="product-view__content">
        <h1 class="product-view__name">{{ displayedProduct.name }}</h1>
        <span class="product-view__sku">{{ displayedProduct.sku }}</span>
        <p class="product-view__price">{{ displayedProduct.price }}€</p>
        <div v-if="colorAttribute" class="product-view__attribute">
          <div
            v-for="(option, index) in colorAttribute.options"
            class="product-view__option"
            @click="changeColor(option)"
          >
            {{ option }}
          </div>
        </div>
        <div class="product-view__description">
          <div
            v-if="displayedProduct.dimensions"
            class="product-view__dimensions"
          >
            <p class="product-view__subtitle">Dimensions du produit :</p>
            <ul>
              <li class="product-view__dimensions-item">
                Longueur : {{ displayedProduct.dimensions.length }}cm
              </li>
              <li class="product-view__dimensions-item">
                Largeur : {{ displayedProduct.dimensions.width }}cm
              </li>
              <li class="product-view__dimensions-item">
                Hauteur : {{ displayedProduct.dimensions.height }}cm
              </li>
            </ul>
          </div>
          <div
            class="product-view__description-content"
            v-html="displayedProduct.short_description"
          />
        </div>
        <div class="product-view__actions">
          <div class="product-view__add-to-cart" @click="addToCart">
            <ButtonHM>Ajouter au panier</ButtonHM>
          </div>
          <div class="product-view__quantity">
            <div
              class="product-view__quantity-button"
              @click="updateQuantity('decrease')"
            >
              -
            </div>
            <div class="product-view__quantity-value">{{ quantity }}</div>
            <div
              class="product-view__quantity-button"
              @click="updateQuantity('increase')"
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios";

import ProductGallery from "@/components/ProductGallery.vue";

import ButtonHM from "@/components/ButtonHM.vue";

export default {
  components: { ButtonHM, ProductGallery },
  data() {
    return {
      product: {},
      variations: [],
      activeColor: null,
      quantity: 1,
    };
  },

  computed: {
    colorAttribute() {
      if (!this.product.attributes) return;
      return this.product.attributes.find(
        (attribute) => attribute.name === "Couleur"
      );
    },
    displayedProduct() {
      if (!this.activeColor) return this.product;
      // Filter variations array to find if there's a match with selected attributes (color)
      const [variation] = this.variations.filter((variation) => {
        return variation.attributes.find(
          (attribute) => attribute.option === this.activeColor
        );
      });
      return variation || this.product;
    },
  },

  async mounted() {
    await this.getProductData(this.$route.params.product);
  },

  async beforeRouteUpdate(to, from) {
    await this.getProductData(to.params.product);
  },

  methods: {
    // Get WooCommerce product data by slug
    async getProductData(slug) {
      const response = await client.get("/wc/v3/products?slug=" + slug);
      this.product = response.data[0];
      if (this.product.type === "variable") {
        // Loop through all variation ids
        for await (const id of this.product.variations) {
          const response = await client.get("/wc/v3/products/" + id);
          this.variations.push(response.data);
        }
        console.log(this.variations);
      }
    },

    // Add product to cart
    addToCart() {
      this.$store.commit("add", {
        product: this.displayedProduct,
        quantity: this.quantity,
      });
    },

    // Update wanted quantity before adding product to cart
    updateQuantity(action) {
      if (action === "increase") {
        this.quantity++;
      } else if (action === "decrease" && this.quantity > 1) {
        this.quantity--;
      }
    },

    // Update activeColor value
    changeColor(color) {
      this.activeColor = color;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-view {
  margin: 0 100px;
  &__container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__gallery {
    width: 100%;
    max-width: 500px;
    margin-bottom: 2rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
  &__content {
    width: 100%;
    max-width: 500px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
}
</style>
