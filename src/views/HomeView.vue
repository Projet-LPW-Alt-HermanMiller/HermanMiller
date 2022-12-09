<script>
import NavBarHM from "../components/NavBarHM.vue";
import FooterHM from "../components/FooterHM.vue";
import ButtonHM from "../components/ButtonHM.vue";

export default {
  components: {
    NavBarHM,
    FooterHM,
    ButtonHM,
  },
};
</script>

<template>
  <main>
    <NavBarHM></NavBarHM>
    <h1>Caviar</h1>
    <h2>Rasputin</h2>
    <h3>Poppins</h3>
    <ButtonHM text="Bouton" link="#" />
    <ButtonHM class="-Secondary" text="Bouton" link="#" />
    <FooterHM></FooterHM>
  </main>
</template>
