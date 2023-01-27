<script>
import { RouterView } from "vue-router";
import NavBarHM from '@/components/NavBarHM.vue'
import FooterHM from '@/components/FooterHM.vue'

export default {
  components: {
    RouterView,
    NavBarHM,
    FooterHM
  }
}
</script>

<template>
  <NavBarHM />
  <RouterView />
  <FooterHM />
</template>
