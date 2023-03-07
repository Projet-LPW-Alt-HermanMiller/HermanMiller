<template>
  <Carousel :wrap-around="true" :autoplay="5000" :transition="500">
    <Slide
      class="carrousel-HM"
      v-for="product in products"
      :key="product.id"
      :style="'background-image:url(' + product.acf.image_hero.url + ')'"
    >
      <div class="carrousel-HM__container">
        <h1 class="carrousel-HM__title">{{ product.name }}</h1>
        <h2 class="carrousel-HM__undertitle">
          {{ product.acf.tag }} <span>À partir de {{ product.price }} €</span>
        </h2>
        <div class="carrousel-HM__button">
          <router-link :to="`/achat/${product.slug}`">
            <button-h-m>Acheter</button-h-m>
          </router-link>
          <router-link :to="`/produit/${product.slug}`">
            <button-h-m class="-Secondary">En savoir plus</button-h-m>
          </router-link>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import ButtonHM from "@/components/ButtonHM.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "CarrouselHM",
  components: { ButtonHM, Carousel, Slide, Pagination },
  props: {
    products: {
      type: Array,
    },
  },
};
</script>

<style lang="sass" scoped>
.carrousel-HM
  width: 100%
  height: 80vh
  display: flex
  align-items: center
  justify-content: left
  position: relative
  background-size: cover
  background-position-y: center
  background-position-x: 350px
  background-repeat: no-repeat

  &__container
    width: 100%
    max-width: 350px
    position: relative
    z-index: 1
    padding: 0 20px

  &__title
    font-size: 45px
    font-weight: 700
    color: black
    margin-bottom: 20px
    text-align: left

  &__undertitle
    font-size: 30px
    font-weight: 700
    color: black
    margin-bottom: 20px
    text-align: left

    span
      font-weight: 400
      font-size: 20px
      display: block

  &__button
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    @media (min-width: 768px)
      flex-direction: row
      align-items: center
      justify-content: flex-start
</style>
