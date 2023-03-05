<template>
  <div class="carrousel-HM">
    <div class="carrousel-HM__container">
      <h1 class="carrousel-HM__title">Aeron</h1>
      <h2 class="carrousel-HM__undertitle">
        Le siège ultime <span>À partir de 1599€</span>
      </h2>
      <div class="carrousel-HM__button">
        <ButtonHM> Acheter </ButtonHM>
        <ButtonHM class="-Secondary"> En savoir plus </ButtonHM>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonHM from "@/components/ButtonHM.vue";

export default {
  name: "CarrouselHM",
  components: { ButtonHM },
};
</script>

<style lang="sass" scoped>
.carrousel-HM
  width: 100%
  height: 100vh
  background-image: url('https://cdn.shopify.com/s/files/1/0581/5490/9862/files/HM-LEAD-Sayl-OE1-Hybrid_Home-B.jpg?v=1676547473')
  background-size: cover
  background-position-y: center
  background-position-x: 350px
  background-repeat: no-repeat
  display: flex
  align-items: center
  justify-content: center
  position: relative
  &__container
    width: 100%
    max-width: 1200px
    padding: 0 20px
    position: relative
    z-index: 1
  &__title
    font-size: 45px
    font-weight: 700
    color: black
    margin-bottom: 20px
  &__undertitle
    font-size: 30px
    font-weight: 700
    color: black
    margin-bottom: 20px
    span
      font-weight: 400
      font-size: 20px
      display: block
  &__button
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    @media (min-width: 768px)
      flex-direction: row
      align-items: center
      justify-content: flex-start
</style>
