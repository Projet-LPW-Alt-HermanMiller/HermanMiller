<template>
  <div class="productGallery-HM">
    <div class="productGallery-HM__content">
      <div class="productGallery-HM__content-flex">
        <img :src="img_1" alt="" />
        <img :src="img_2" alt="" />
      </div>
      <div class="productGallery-HM__content-large">
        <img :src="img_3" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productGalleryHM",
  props: {
    img_1: {
      type: String,
      default: "/images/REK_ENV_17068_20160725100226124_L.jpg",
    },
    img_2: {
      type: String,
      default: "/images/REK_ENV_17350_20160725100341729_L.jpg",
    },
    img_3: {
      type: String,
      default: "/images/ATL_0158_ENV_20170406002343730_L.jpg",
    },
  },
};
</script>

<style lang="scss" scoped>
.productGallery-HM {
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  &__content {
    &-flex {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      img {
        max-width: 50%;
        height: 480px;
        object-fit: cover;
        @media (max-width: 768px) {
          max-width: 100%;
          height: 300px;
        }
      }
      img:first-child {
        padding-right: 10px;
        @media (max-width: 768px) {
          padding-right: 0;
        }
      }
      img:last-child {
        padding-left: 10px;
        @media (max-width: 768px) {
          padding-left: 0;
          padding-top: 20px;
        }
      }
    }
    &-large {
      img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        margin-top: 20px;
        object-position: bottom;
      }
    }
  }
}
</style>
