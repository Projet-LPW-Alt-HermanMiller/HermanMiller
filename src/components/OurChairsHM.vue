<template>
  <div class="ourChairs-HM">
    <h2 class="ourChairs-HM__title">{{ title }}</h2>
    <div class="ourChairs-HM__container" v-if="productData.length">
      <div class="ourChairs-HM__layout">
        <div
          class="ourChairs-HM__item"
          v-for="product in productData"
          :key="product.ID"
        >
          <img
            v-if="product.images[0]"
            :src="product.images[0].src"
            alt=""
            class="ourChairs-HM__image"
          />
          <div class="ourChairs-HM__text">
            <h3 class="ourChairs-HM__product-title">{{ product.name }}</h3>
            <p v-if="product.acf.tag" class="ourChairs-HM__description">
              {{ product.acf.tag }}
            </p>
            <router-link :to="`/produit/${product.slug}`" :key="key">
              <ButtonHM v-on:click="scrollToTop()">En savoir plus</ButtonHM>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonHM from "@/components/ButtonHM.vue";

export default {
  name: "OurChairs",
  components: { ButtonHM },
  props: {
    productData: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: "Nos sièges",
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.ourChairs-HM {
  &__title {
    font-size: 45px;
    font-weight: 700;
    color: black;
    text-align: left;
    margin-bottom: 50px;
  }

  &__container {
    max-width: 100vw;
    overflow-x: scroll;
  }
  &__layout {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: max-content;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  &__image {
    width: 100%;
    max-width: 400px;
    height: 400px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__product-title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #243b3b;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 16px;
    font-weight: 500;
    color: #243b3b;
    margin-bottom: 20px;
  }
}
</style>
