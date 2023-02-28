<template>
  <div class="ficheProduit-view">
    <hero-section-h-m />
    <div class="ficheProduit-view__content">
      <our-chairs :product-data="products" :title="'Bestsellers'"/>
    </div>
  </div>
</template>

<script>
import HeroSectionHM from "@/components/heroSectionHM.vue";
import OurChairs from "@/components/OurChairsHM.vue";
import { client } from "@/utils/axios";

export default {
  name: "FicheProduitView",
  components: { OurChairs, HeroSectionHM },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products");
    this.products = productResponse.data;
    console.log(this.products);
  },
};
</script>

<style lang="scss" scoped>
.ficheProduit-view {
  &__content {
    margin-right: 100px;
    margin-left: 100px;
  }
}
</style>
