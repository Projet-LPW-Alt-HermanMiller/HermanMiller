<script>
import { RouterView } from "vue-router";
import NavBarHM from "@/components/NavBarHM.vue";
import FooterHM from "@/components/FooterHM.vue";

export default {
  components: {
    RouterView,
    NavBarHM,
    FooterHM,
  },
  mounted() {
    const stringifiedCart = localStorage.getItem("cart");
    if (!stringifiedCart) localStorage.setItem("cart", JSON.stringify([]));
    this.$store.commit("set", JSON.parse(stringifiedCart));
  },
};
</script>

<template>
  <NavBarHM />
  <RouterView />
  <FooterHM />
</template>

<style lang="scss"></style>
