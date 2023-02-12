<template>
  <main class="homeview">
    <h1>Outfit</h1>
    <h2>Poppins</h2>
    <h3>Poppins</h3>
    <div>
      Texte
    </div>
    <ButtonHM>TEST 1</ButtonHM>
    <ButtonHM class="-Secondary">TEST 2343536454363</ButtonHM>

    <div class="container">
      <div @click="gotoThankYouPage">Merci !</div>
      <p>Mes articles</p>
      <ul>
        <li v-for="(post, index) in posts">
          <span>{{ post.title.rendered }}</span>
        </li>
      </ul>
      <p style="margin-top: 100px;">Mes produits</p>
      <div class="row">
        <div class="column -size-3" v-for="(product, index) in products" :key="index">
          <ProductHM :name="product.name" :slug="product.slug" :price="product.price" :images="product.images" />
        </div>
      </div>
      <p style="margin-top: 100px;">Mes categories de produit</p>
      <ul>
        <li v-for="(category, index) in categories">
          <span>{{ category.name }}</span>
        </li>
      </ul>
    </div>
    <div v-if="page.acf" class="homeview__showroom">
      <ShowroomHM :title="page.acf.title" :images="page.acf.images" />
    </div>
  </main>
</template>

<script>
import { client } from '@/utils/axios'
import ProductHM from "@/components/ProductHM.vue";
import ShowroomHM from "@/components/ShowroomHM.vue";
import ButtonHM from "../components/ButtonHM.vue";

export default {
  components: {
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
