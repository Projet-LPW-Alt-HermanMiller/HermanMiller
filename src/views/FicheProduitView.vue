<template>
  <div class="ficheProduit-view" v-if="product.length !== 0">
    <hero-section-h-m
      :title="product.name"
      :price="product.price"
      :description="product.acf.tag"
      :img-product="product.images[0].src"
      :img-illustration="product.acf.image_hero.url"
    />
    <div class="ficheProduit-view__content">
      <presentation-type-h-m
        :image="product.acf.section_1.image.url"
        :title="product.acf.section_1.title"
        :text="product.acf.section_1.text"
      />
      <presentation-type-h-m
        :is-reverse="true"
        :title="product.acf.section_2.title"
        :text="product.acf.section_2.text"
        :image="product.acf.section_2.image.url"
      />
      <product-gallery-h-m
        :img_1="product.acf.gallery_product.image_1.url"
        :img_2="product.acf.gallery_product.image_2.url"
        :img_3="product.acf.gallery_product.image_3.url"
      />
      <our-chairs :product-data="products" :title="'Bestsellers'" />
    </div>
  </div>
  <div v-else>
    <h1 class="ficheProduit-view__loading">Chargement...</h1>
  </div>
</template>

<script>
import HeroSectionHM from "@/components/heroSectionHM.vue";
import OurChairs from "@/components/OurChairsHM.vue";
import { client } from "@/utils/axios";
import PresentationTypeHM from "@/components/PresentationTypeHM.vue";
import ProductGalleryHM from "@/components/productGalleryHM.vue";
import SpecificationSectionHM from "@/components/specificationSectionHM.vue";

export default {
  name: "FicheProduitView",
  components: {
    ProductGalleryHM,
    PresentationTypeHM,
    OurChairs,
    HeroSectionHM,
  },
  data() {
    return {
      products: [],
      product: [],
    };
  },
  async mounted() {
    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products");
    this.products = productResponse.data;
    console.log(this.products);
    // Get product data
    await this.getProductData(this.$route.params.product);
  },
  methods: {
    async getProductData(slug) {
      const response = await client.get("/wc/v3/products?slug=" + slug);
      this.product = response.data[0];
      console.log(this.product);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.ficheProduit-view {
  &__content {
    margin-right: 100px;
    margin-left: 100px;
  }
  &__loading {
    font-size: 45px;
    font-weight: 700;
    color: #858585;
    text-align: center;
    margin-top: 100px;
    animation: loading 1s infinite;
    height: 100vh;
  }
}
@keyframes loading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
