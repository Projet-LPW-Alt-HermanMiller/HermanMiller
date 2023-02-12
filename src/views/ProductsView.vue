<template>
  <div class="products-view">
    <div class="container">
      <div class="row">

        <!-- EN COURS : head de la page-->
        <div class="products-view__head">
          <div class="products-view__bg-image">
            
          </div>
          <h1 class="products-view__head-title">
            <span class="products-view__head-title-left">Sièges de</span><br>
            <span class="products-view__head-title-right">bureau</span>
          </h1>
          <p class="products-view__head-text">
            Comparez nos sièges de bureau et découvrez-en plus à leur sujet afin de trouver celui qui est fait pour vous.
          </p>
        </div>

        <!-- FILTRES -->
        <div class="column -size-3 products-view__filter">
          <p>Filtres</p>
          <p class="products-view__filter-title">Filtre par pièce</p>
          <!-- Remplir selon les catégories qu'on mettra !!! -->
          
          <!-- <div class="products-view__checkbox">
            <input v-model="filters" type="checkbox" id="meubles" name="meubles" value="meubles">
            <label class="products-view__label" for="meubles"></label>
          </div>
          <div class="products-view__checkbox">
            <input v-model="filters" type="checkbox" id="nft" name="nft" value="nft">
            <label class="products-view__label" for="nft"></label>
          </div> -->
          <p class="products-view__filter-title">Filtre par prix</p>
          <input v-model="price" type="range" min="0" max="2000">
          <br>
          {{ price }}
        </div>
        <div class="column -size-9">
          <h1 class="products-view__title">Mes produits</h1>
          <div class="products-view__list">
            <div class="row">
              <div class="column -size-3" v-for="(product, index) in displayedProducts" :key="index">
                <ProductHM :name="product.name" :slug="product.slug" :price="product.price" :images="product.images" />
              </div>
            </div>
          </div>
          <div class="products-view__pagination">
            <span class="products-view__pagination-button" @click="onPreviousClick">Page précédente</span>
            <span class="products-view__pagination-button" @click="onNextClick">Page suivante</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios";
import ProductHM from "@/components/ProductHM.vue";

export default {
  components: { ProductHM },
  data () {
    return {
      products: [],
      filters: [],
      price: null,
      page: 0,
      byPage: 4
    }
  },

  watch: {
    // filteredProducts (value) {
    //   this.page = 0
    // }
    'filteredProducts': 'onFilteredProductsChange'
  },

  computed: {
    // Filtered array based on this.products and this.filters
    filteredProducts () {
      // If no filters selected
      if (!this.filters.length && !this.price) return this.products

      return this.products.filter((product) => {
        // At least one filter selected
        return product.categories.find(category => this.filters.includes(category.slug))
      }).filter((product) => {
        // Price is not null -> apply price filter
        if (!this.price) return product
        return parseInt(product.price) <= parseInt(this.price)
      })
    },

    // Sliced array of products based on filteredProducts
    // Handles pagination
    displayedProducts () {
      const nextPage = this.page + 1
      return this.filteredProducts.slice(this.page * this.byPage, nextPage * this.byPage)
    }
  },

  async mounted () {
    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products")
    this.products = productResponse.data
  },

  methods: {
    // Go to previous page if not first one
    onPreviousClick () {
      if (this.page === 0) return
      this.page = this.page - 1
    },

    // Go to next page if not last one
    onNextClick () {
      const pageCount = Math.ceil(this.filteredProducts.length / this.byPage)
      if (this.page >= pageCount - 1) return
      this.page = this.page + 1
    },

    // Triggered when this.filteredProducts value changes
    onFilteredProductsChange () {
      this.page = 0
    }
  }
};
</script>

<style lang="scss">
.products-view {
  &__label {
    font-size: 16px;
    font-weight: 500;
  }

  &__filter-title {
    font-size: 20px;
    font-weight: 700;
  }

  &__pagination {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 50px 0;
  }

  &__pagination-button {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>
