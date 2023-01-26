<script>
import NavBarHM from "../components/NavBarHM.vue";
import FooterHM from "../components/FooterHM.vue";
import ButtonHM from "../components/ButtonHM.vue";
import FormLogInHM from "../components/FormLogInHM.vue";
import FormSignInHM from "../components/FormSignInHM.vue";

export default {
  components: {
    NavBarHM,
    FooterHM,
    ButtonHM,
    FormLogInHM,
    FormSignInHM,
  },
};
</script>

<template>
  <main>
    <NavBarHM></NavBarHM>
    <h1>Outfit</h1>
    <h2>Poppins</h2>
    <h3>Poppins</h3>
    <div>
      Texte
    </div>
    <ButtonHM>TEST 1</ButtonHM>
    <ButtonHM class="-Secondary">TEST 2343536454363</ButtonHM>
    <FormLogInHM />
    <FormSignInHM />
    <FooterHM></FooterHM>
  </main>
</template>
