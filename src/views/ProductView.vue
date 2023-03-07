<template>
  <div class="product-view">
    <div class="product-view__container">
      <div class="product-view__gallery">
        <ProductGallery :images="displayedProduct.images" />
      </div>
      <div class="product-view__content">
        <h1 class="product-view__name">{{ displayedProduct.name }}</h1>
        <p class="product-view__price">{{ displayedProduct.price }}€ TTC</p>
        <h2>Choix de la couleur</h2>
        <div v-if="colorAttribute" class="product-view__attribute">
          <div
            v-for="(option, index) in colorAttribute.options"
            class="product-view__option"
            @click="changeColor(option)"
          >
            <button-h-m>
              {{ option }}
            </button-h-m>
          </div>
        </div>
        <div class="product-view__description">
          <div
            v-if="displayedProduct.dimensions"
            class="product-view__dimensions"
          >
            <h2 class="product-view__subtitle">Dimensions du produit :</h2>
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
    <div>
      <product-gallery-h-m
        v-if="product !== {}"
        :img_1="product.acf.gallery_product.image_1.url"
        :img_2="product.acf.gallery_product.image_2.url"
        :img_3="product.acf.gallery_product.image_3.url"
      />
      <our-chairs :product-data="products" />
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios";

import ProductGallery from "@/components/ProductGallery.vue";

import ButtonHM from "@/components/ButtonHM.vue";
import ProductGalleryHM from "@/components/productGalleryHM.vue";
import OurChairs from "@/components/OurChairsHM.vue";

export default {
  components: { OurChairs, ProductGalleryHM, ButtonHM, ProductGallery },
  data() {
    return {
      product: {},
      products: [],
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
    console.log(this.product);

    const productResponse = await client.get("/wc/v3/products");
    this.products = productResponse.data;
    console.log(this.products);
  },
  created() {
    this.getProductData(this.$route.params.product);
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
  &__attribute {
    display: flex;
  }
  &__dimensions > ul {
    margin-left: 0;
    padding-left: 0;
  }
  &__dimensions-items {
    list-style: none;
    margin-left: 0;
  }
  &__gallery {
    width: 50%;
    margin-bottom: 2rem;
  }
  &__content {
    width: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  &__name {
    margin: 0;
    font-size: 3rem;
  }
  &__price {
    margin-top: 0;
    font: $secondary-title-font-family;
    font-size: 1.5rem;
  }
  &__actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    align-items: center;
  }
  &__quantity {
    display: flex;
    flex-direction: row;
    width: 150px;
    font-size: 24px;
    border: inset 1px #000000;
    border-radius: 2px;
  }
  &__quantity-value {
    margin-left: auto;
    margin-right: auto;
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
  }
}
</style>
