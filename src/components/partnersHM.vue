<template>
  <div class="partners-HM">
    <h2 class="partners-HM__title">Ils nous font confiance</h2>
    <div class="partners-HM__container">
      <div class="partners-HM__layout">
        <div
          class="partners-HM__item"
          v-for="partner in partners"
          :key="partner.id"
        >
          <img :src="partner.src" alt="" class="partners-HM__image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partnersHM",
  data() {
    return {
      partners: [
        {
          id: 1,
          src: "/partners/partner_1.png",
        },
        {
          id: 2,
          src: "/partners/partner_2.png",
        },
        {
          id: 3,
          src: "/partners/partner_3.png",
        },
        {
          id: 4,
          src: "/partners/partner_4.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.partners-HM {
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
    width: 100%;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  &__image {
    width: 150px;
    height: auto;
    object-fit: contain;
  }
}
</style>
