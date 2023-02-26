<template>
  <main class="homeview">
    <carrousel-h-m />
    <PresentationTypeHM/>
    <PresentationTypeHM :isReverse="true"/>
  </main>
</template>

<script>
import { client } from '@/utils/axios'
import ProductHM from "@/components/ProductHM.vue";
import ShowroomHM from "@/components/ShowroomHM.vue";
import ButtonHM from "../components/ButtonHM.vue";
import CarrouselHM from "@/components/CarrouselHM.vue";
import PresentationTypeHM from "@/components/PresentationTypeHM.vue";

export default {
  components: {
    PresentationTypeHM,
    CarrouselHM,
    ButtonHM,
    ShowroomHM,
    ProductHM
  },
  data () {
    return {
      posts: [],
      products: [],
      categories: [],
      page: {}
    };
  },

  async mounted() {
    // Get all wordpress posts
    const response = await client.get("/wp/v2/posts")
    this.posts = response.data


    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products")
    this.products = productResponse.data
    console.log(this.products)

    // Get all woocommerce categories
    const categoriesResponse = await client.get("/wc/v3/products/categories")
    this.categories = categoriesResponse.data

    // Get homepage data
    const homepageResponse = await client.get("/wp/v2/pages/28838")
    this.page = homepageResponse.data
  },

  methods: {
    // goToThankYouPage () {
    //   this.$router.push({
    //     name: 'cart-order-thank-you',
    //     params: { id: 12}
    //   })
    // }
  }
};
</script>
