<template>
  <div class="products-view">
    <div class="container">
      <div class="row">
        <div class="column -size-3">
          <p class="products-view__filter-title">Filtre</p>
          <div class="products-view__checkbox">
            <input
              v-model="filters"
              type="checkbox"
              id="cuisine"
              name="cuisine"
              value="cuisine"
            />
            <label class="products-view__label" for="cuisine">Cuisine</label>
          </div>
          <div class="products-view__checkbox">
            <input
              v-model="filters"
              type="checkbox"
              id="chambre"
              name="chambre"
              value="chambre"
            />
            <label class="products-view__label" for="chambre">Chambre</label>
          </div>
          <div class="products-view__checkbox">
            <input
              v-model="filters"
              type="checkbox"
              id="salon-sejour"
              name="salon-sejour"
              value="salon-sejour"
            />
            <label class="products-view__label" for="salon-sejour"
              >Salon/Séjour</label
            >
          </div>
        </div>
        <div>
          <div class="products-view__list">
            <OurChairs :product-data="filteredProducts" :title="'Nos produits'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios";
import Product from "@/components/Product.vue";
import OurChairs from "@/components/OurChairsHM.vue";

export default {
  components: {OurChairs, Product },
  data() {
    return {
      products: [],
      filters: [],
      price: null,
      page: 0,
      byPage: 4,
    };
  },

  watch: {
    // filteredProducts (value) {
    //   this.page = 0
    // }
    filteredProducts: "onFilteredProductsChange",
  },

  computed: {
    // Filtered array based on this.products and this.filters
    filteredProducts() {
      // If no filters selected
      if (!this.filters.length && !this.price) return this.products;

      return this.products
        .filter((product) => {
          // At least one filter selected
          return product.categories.find((category) =>
            this.filters.includes(category.slug)
          );
        })
        .filter((product) => {
          // Price is not null -> apply price filter
          if (!this.price) return product;
          return parseInt(product.price) <= parseInt(this.price);
        });
    },

    // Sliced array of products based on filteredProducts
    // Handles pagination
  },

  async mounted() {
    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products");
    this.products = productResponse.data;
  },

  methods: {
    // Triggered when this.filteredProducts value changes
  },
};
</script>

<style lang="scss">
@import "../src/scss/foundations/variables.scss";
.products-view {
  margin-right: 100px;
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-right: 20px;
    margin-left: 20px;
  }
  &__filter-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
}

</style>
