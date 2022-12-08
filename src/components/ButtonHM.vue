<script>
export default {
  props: {
    text: String,
    link: String,
  },
};
</script>

<template>
  <a v-if="link" :href="link" class="button">{{ text }}</a>
  <button v-else class="button">{{ text }}</button>
</template>

<style lang="scss" scoped>
.button {
  padding: 0.5rem;
  display: inline-block;
  background: $HMColor;
  color: $white;
  border: 1px solid $HMColor;
  border-radius: 2px;
  margin: 0.5rem;
  font-size: 1rem;
  font-family: "Arial";
  line-height: 1rem;
  text-decoration:none;
  &:hover {
    color: $HMColor;
    background: $white;
  }
  &.-Secondary{
    color: $HMColor;
    background: $white;
    &:hover {
        background: $HMColor;
        color: $white;
    }
  }
}
</style>
