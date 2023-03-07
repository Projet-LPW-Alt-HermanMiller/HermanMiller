<template>
  <div v-if="active" class="product-gallery">
    <!-- Image active -->
    <div
      class="product-gallery__main-image"
      :style="`background-image: url('${active.src}')`"
    />
    <!-- Liste d'images -->
    <Carousel :itemsToShow="5" :itemsToScroll="5" :transition="500">
      <Slide
        v-for="(image, index) in images"
        :key="image.id"
        @click="onImageClick(image)"
      >
        <img
          :src="image.src"
          alt=""
          :class="[
            'product-gallery__image',
            { '-is-active': active.id === image.id },
          ]"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  components: { Carousel, Slide },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      active: null,
    };
  },

  watch: {
    images(value) {
      this.active = value[0];
    },
  },

  methods: {
    onImageClick(image) {
      this.active = image;
    },
  },
};
</script>

<style lang="scss">
.product-gallery {
  &__list {
    display: flex;
    flex-flow: row wrap;
    margin-top: 30px;
  }

  &__image {
    width: 80px;
    height: auto;
    background-size: cover;
    background-position: center;

    &.-is-active {
      opacity: 0.5;
    }
  }

  &__item {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
  }

  &__main-image {
    width: 500px;
    height: 500px;
    background-size: cover;
    background-position: center;
  }
}
</style>
