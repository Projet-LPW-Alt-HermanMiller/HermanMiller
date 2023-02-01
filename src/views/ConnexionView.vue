<template>
  <div class="connexion-view">
    <div v-if="signIN === false" class="connexion-view__form">
      <form-log-in-h-m/>
      <span class="connexion-view__span" @click="signIN = true">Pas encore de compte ? Inscrivez-vous !</span>
    </div>
    <div v-if="signIN === true" class="connexion-view__form">
      <form-sign-in-h-m/>
      <span class="connexion-view__span" @click="signIN = false">Déjà un compte ?</span>
    </div>
  </div>
</template>

<script>
import FormLogInHM from "@/components/FormLogInHM.vue";
import formSignInHM from "@/components/FormSignInHM.vue"
export default {
  name: "ConnexionView",
  data () {
    return {
      signIN: false,
    }
  },
  components: {
    formSignInHM,
    FormLogInHM,
  }
}
</script>

<style lang="scss" scoped>
.connexion-view {
  margin: 14vh auto 13vh auto;
  box-shadow: 0 0 10px #dedede;
  width: max-content;

  &__form {
    display: flex;
    flex-flow: column wrap;
    padding: 30px 40px;
    max-width: min-content;
  }
  &__span {
    text-align: center;
    font-size: $small-font-size;
    color: #FA7351;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
