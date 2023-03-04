<template>
  <div class="specificationSection-HM">
    <section class="specificationSection-HM__section" :style="'background-image: url('+backgroundImage+')'">
      <div class="specificationSection-HM__section__content">
        <div class="specificationSection-HM__section__content__title">
          <h2>{{ title }}</h2>
        </div>
        <div class="specificationSection-HM__section__content__text">
          <p>
            {{ text }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ButtonHM from "@/components/ButtonHM.vue";

export default {
  name: "specificationSectionHM",
  components: {ButtonHM},
  props: {
    text: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl ut aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    },
    title: {
      type: String,
      default: "Lorem ipsum dolor sit amet",
    },
    backgroundImage: {
      type: String,
      default:
        "https://cdn.shopify.com/s/files/1/0581/5490/9862/files/HM-Seasonal_Reductions-HP_BLOCK-FR-02.jpg?v=1672916516",
    },
  },

};
</script>

<style lang="scss" scoped>
@import "@/scss/foundations/variables.scss";

.specificationSection-HM {
  margin-top: 100px;

  &__section {
    display: flex;
    flex-flow: column;
    height: 465px;
    margin-left: -100px;
    margin-right: -100px;
    justify-content: center;

    &__content {
      width: 50%;
      margin-right: 100px;
      margin-left: 100px;
    }
  }

  &__section:first-child {
    align-items: end;
  }

  &__section:last-child {
    align-items: start;
  }
}
</style>
