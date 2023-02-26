<template>
  <div class="homeview">
    <carrousel-h-m />
    <main class="homeview__main">
      <PresentationTypeHM />
      <PresentationTypeHM :isReverse="true" />
      <OurChairs :product-data="products" />
    </main>
    <section class="homeview__section">
      <PartnersHM/>
    </section>
  </div>
</template>

<script>
import { client } from "@/utils/axios";
import CarrouselHM from "@/components/CarrouselHM.vue";
import PresentationTypeHM from "@/components/PresentationTypeHM.vue";
import OurChairs from "@/components/OurChairsHM.vue";
import PartnersHM from "@/components/partnersHM.vue";

export default {
  components: {
    PartnersHM,
    OurChairs,
    PresentationTypeHM,
    CarrouselHM,
  },
  data() {
    return {
      posts: [],
      products: [],
      categories: [],
      page: {},
    };
  },

  async mounted() {
    // Get all wordpress posts
    const response = await client.get("/wp/v2/posts");
    this.posts = response.data;
    console.log(this.posts);

    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products");
    this.products = productResponse.data;
    console.log(this.products);

    // Get all woocommerce categories
    const categoriesResponse = await client.get("/wc/v3/products/categories");
    this.categories = categoriesResponse.data;

    // Get homepage data
    const homepageResponse = await client.get("/wp/v2/pages/28838");
    this.page = homepageResponse.data;
  },

  methods: {
    // goToThankYouPage () {
    //   this.$router.push({
    //     name: 'cart-order-thank-you',
    //     params: { id: 12}
    //   })
    // }
  },
};
</script>

<style lang="scss" scoped>
.homeview {
  &__main, &__section {
    padding-left: 100px;
    padding-right: 100px;
  }
}
</style>
