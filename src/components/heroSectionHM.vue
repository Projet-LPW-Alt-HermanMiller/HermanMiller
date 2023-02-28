<template>
  <div class="heroSection-HM">
    <div class="heroSection-HM__content">
      <div class="heroSection-HM__image">
        <img
          src="https://www.hermanmiller.com/content/dam/hmi/hmidam/active/2022/01/28/HM_AEN_0011.tif.rendition.1440.1440.jpg"
          alt=""
        />
      </div>
      <div class="heroSection-HM__product-overview">
        <div class="heroSection-HM__product-overview-image">
          <img
            src="https://www.hermanmiller.com/content/dam/hmi/hmidam/active/2021/08/16/HM_AER_61588_RET.tif.rendition.1440.1440.jpg"
            alt=""
          />
        </div>
        <div class="heroSection-HM__product-overview__texts">
          <div class="heroSection-HM__product-overview__title">
            <h1>Aeron</h1>
          </div>
          <div class="heroSection-HM__product-overview__description">
            <p>Le siège ultime</p>
          </div>
          <div class="heroSection-HM__product-overview__price">
            <p>1599€ TTC</p>
          </div>
          <div class="heroSection-HM__product-overview__button">
            <button-h-m>Acheter</button-h-m>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonHM from "@/components/ButtonHM.vue";

export default {
  name: "heroSectionHM",
  components: { ButtonHM },
};
</script>

<style lang="scss" scoped>
.heroSection-HM {
  &__content {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }
  &__image {
    width: max-content;
    img {
      width: 50vw;
      height: 100vh;
      max-height: 620px;
      object-fit: cover;
    }
  }
  &__product-overview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    max-height: 620px;
  }
  &__product-overview__texts {
    width: 300px;
  }
  &__product-overview__title {
    h1 {
      font-size: 48px;
      font-weight: 700;
      color: black;
      text-align: left;
      margin-bottom: 0;
    }
  }
  &__product-overview__description {
    p {
      font-size: 36px;
      font-weight: 400;
      color: black;
      text-align: left;
      margin-bottom: 20px;
      margin-top: 0;
    }
  }
  &__product-overview__price {
    p {
      font-size: 24px;
      font-weight: 400;
      color: black;
      text-align: left;
      margin-bottom: 20px;
      text-align: center;
    }
  }
  &__product-overview__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  &__product-overview-image {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }
}
</style>
