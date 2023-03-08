<template>
  <div class="confirmation-view">
    <div class="container">
      <h1>
        Merci pour votre commande {{ order.billing.first_name }}
        {{ order.billing.last_name }} !
      </h1>

      <p class="confirmation-view__recap">Récapitulatif de votre commande</p>
      <ul>
        <li class="confirmation-view__item"  v-for="(product, index) in order.line_items">
          {{ product.name }} : {{ product.price }}€ - x{{ product.quantity }}
        </li>
      </ul>

      <p>
        Vous serez bientôt averti de l'expédition de vos produits, la livraison
        est prévue dans les 3 jours ouvrés à l'adresse
        {{ order.shipping.address_1 }} {{ order.shipping.address_2 }} à
        {{ order.shipping.city }}
      </p>
    </div>
    <our-chairs :product-data="products" :title="'Produits recommandés'"/>
  </div>
</template>

<script>
import OurChairs from "@/components/OurChairsHM.vue";
import {client} from "@/utils/axios";

export default {
  components: {OurChairs},
  data() {
    return {
      order: null,
      products: [],
    };
  },
  async mounted() {
    // Get all woocommerce products
    const productResponse = await client.get("/wc/v3/products");
    this.products = productResponse.data;
    console.log(this.products);
  },
  created() {
    this.order = JSON.parse(localStorage.getItem("order"));
    console.log(this.order);
  },
};
</script>

<style lang="scss">
h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.confirmation-view {
  min-height: 100vh;
  margin-left: 100px;
  margin-right: 100px;
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .container {
    background-color: $HMColorSecondary;
    margin-top: 50px;
    padding: 20px;
    color: white;
    @media (max-width: 768px) {
      margin-top: 0;
      padding-top: 80px;
    }
  }
  &__recap {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  &__item {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}
</style>
