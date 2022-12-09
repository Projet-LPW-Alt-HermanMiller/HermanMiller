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
    <h1>Caviar</h1>
    <h2>Rasputin</h2>
    <h3>Poppins</h3>
    <div>dgeg "ger grgrg  et"g regrgzgzgz thtehzrg ztttezf tzetz</div>
    <ButtonHM>TEST 1</ButtonHM>
    <ButtonHM class="-Secondary">TEST 2343536454363</ButtonHM>
    <FormLogInHM />
    <FormSignInHM />
    <FooterHM></FooterHM>
  </main>
</template>
