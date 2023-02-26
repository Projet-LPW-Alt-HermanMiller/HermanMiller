<template>
  <div class="presentationType-HM">
    <div class="presentationType-HM__container" :class="{ reverse: isReverse }">
      <div class="presentationType-HM__side-img">
        <img
          src="https://cdn.shopify.com/s/files/1/0581/5490/9862/files/HM-Seasonal_Reductions-HP_BLOCK-FR-02.jpg?v=1672916516"
          alt=""
        />
      </div>
      <div class="presentationType-HM__side-text">
        <h2 class="presentationType-HM__title">
          Lorem ipsum <br />
          dolor sit amet
        </h2>
        <p class="presentationType-HM__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          aperiam commodi, dolores eligendi enim, eum ipsum molestias numquam
          odio perferendis quaerat tenetur? Ab alias atque commodi consequuntur,
          cum cupiditate, dolorum ducimus enim error excepturi facere fugiat
          fugit hic illum ipsa iure maiores maxime numquam quam quidem quo
          sapiente temporibus ut.
        </p>
        <ButtonHM class="-Secondary">En savoir plus</ButtonHM>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonHM from "@/components/ButtonHM.vue";

export default {
  name: "PresentationTypeHM",
  components: { ButtonHM },
  props: {
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.reverse {
  flex-direction: row-reverse !important;
}
.presentationType-HM {
  width: 100%;
  margin: 100px 0 0 0;
  &__container {
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__side-img {
    width: 100%;
    height: 100%;
    img {
      max-width: 579px;
      max-height: 523px;
      object-fit: cover;
    }
  }
  &__side-text {
    width: 100%;
    height: 100%;
  }
  &__text {
    font-size: 16px;
    font-weight: 400;
    color: black;
    margin-bottom: 20px;
    margin-top: 50px;
    max-width: 480px;
  }
  &__title {
    font-size: 48px;
    font-weight: 700;
    color: black;
    margin-bottom: 20px;
  }
}
</style>
