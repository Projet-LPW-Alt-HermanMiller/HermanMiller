<template>
  <div class="homeview">
    <carrousel-h-m :products="products" />
    <main class="homeview__main">
      <PresentationTypeHM
        :image="products[3].acf.section_1.image.url"
        :title="products[3].acf.section_1.title"
        :text="products[3].acf.section_1.text"
      />
      <PresentationTypeHM
        :image="products[0].acf.section_2.image.url"
        :title="products[0].acf.section_2.title"
        :text="products[0].acf.section_2.text"
        :isReverse="true"
      />
      <OurChairs :product-data="products" />
    </main>
    <section class="homeview__section">
      <PartnersHM />
      <h2 class="homeview__section-H2">
        <span>Témoignages</span><br />Ce que les utilisateurs disent de nous
      </h2>
      <single-testimony-h-m :data-testimonies="testimonies" />
      <news-letter-h-m />
    </section>
  </div>
</template>

<script>
import { client } from "@/utils/axios";
import CarrouselHM from "@/components/CarrouselHM.vue";
import PresentationTypeHM from "@/components/PresentationTypeHM.vue";
import OurChairs from "@/components/OurChairsHM.vue";
import PartnersHM from "@/components/partnersHM.vue";
import SingleTestimonyHM from "@/components/SingleTestimonyHM.vue";
import NewsLetterHM from "@/components/newsLetterHM.vue";

export default {
  components: {
    NewsLetterHM,
    SingleTestimonyHM,
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
      testimonies: [],
    };
  },

  async mounted() {
    // Get all wordpress posts
    const response = await client.get("/wp/v2/posts");
    this.posts = response.data;
    console.log(this.posts);

    //Get all testimonies
    const testimoniesResponse = await client.get("/wp/v2/testimony");
    this.testimonies = testimoniesResponse.data;

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
  &__main,
  &__section {
    padding-left: 100px;
    padding-right: 100px;
    @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  &__section {
    background-color: #f5f5f5;
  }
  &__section-H2 {
    text-align: center;
    span {
      font-weight: 300;
    }
  }
}
</style>
