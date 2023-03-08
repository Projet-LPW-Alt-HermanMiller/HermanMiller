<template>
  <div class="singleTestimony-HM">
    <div
      v-for="testimony in dataTestimonies"
      :key="testimony.id"
      class="singleTestimony-HM__content"
    >
      <div class="singleTestimony-HM__image">
        <img
          :src="testimony.acf.avatar.sizes.medium"
          :alt="testimony.acf.avatar.title"
        />
      </div>
      <div class="singleTestimony-HM__text-content">
        <p class="singleTestimony-HM__text">
          {{ testimony.acf.text }}
        </p>
        <p class="singleTestimony-HM__name">{{ testimony.acf.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleTestimonyHM",
  props: {
    dataTestimonies: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.singleTestimony-HM {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
  }
  &__image {
    z-index: 10;
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      margin-bottom: -45px;
    }
  }
  &__text-content {
    width: 280px;
    height: 224px;
    box-shadow: #dedede 0 0 10px 0;
  }
  &__text {
    font-size: 16px;
    font-weight: 400;
    color: black;
    text-align: center;
    margin-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  &__name {
    font-size: 18px;
    font-weight: 700;
    margin-top: 30px;
    color: black;
    text-align: center;
  }
}
</style>
