<script>
export default {
  props: {
    text: String,
    link: String,
  },
};
</script>

<template>
  <a v-if="link" :href="link" class="button">
    <slot></slot>
  </a>
  <button v-else class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 0.5rem;
  display: inline-block;
  background: $HMColor;
  color: $white;
  border-radius: 2px;
  margin: 0.5rem;
  font-size: 1rem;
  font-family: $text-font-family, sans-serif;
  line-height: 1rem;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid $HMColor;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  &:hover {
    color: $HMColor;
    background: $white;
  }

  &.-Secondary {
    color: $HMColor;
    background: $white;
    &:hover {
      background: $HMColor;
      color: $white;
    }
  }
}
</style>
