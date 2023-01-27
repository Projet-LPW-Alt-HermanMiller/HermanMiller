<script>
import ButtonHM from "./ButtonHM.vue";
export default {
  data() {
    return {
      hasError: false,
      showPassword: false,
      email: "",
      password: "",
    };
  },
  components: {
    ButtonHM,
  },
  methods: {
    handlePasswordClick() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit() {
      if (this.email.length === 0 || this.password.length === 0) {
        this.hasError = true;
      } else {
        this.hasError = false;
      }
    },
  },
};
</script>

<template>
  <div class="formLogIn">
    <div class="fontH1">Inscription</div>

    <form @submit.prevent="handleSubmit">
      <div>
        <input
          v-model="email"
          name="email" 
          type="text" 
          placeholder="Adresse e-mail"
        />
      </div>
      <div class="formLogIn__Identity">
        <input
          class="formLogIn__Identity__Input"
          v-model="email"
          name="email" 
          type="text" 
          placeholder="Adresse e-mail"
        />
        <input
          class="formLogIn__Identity__Input"
          v-model="password"
          name="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Mot de passe"
        />
      </div>
      <div>
        <input
          v-model="password"
          name="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Mot de passe"
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
        />
        <label for="newsletter">Je m'inscris à la newsletter</label>
      </div>
      <!-- Afficher ou masquer le mot de passe dans l'input -> à ajouter si besoin -->
      <!-- <p @click="handlePasswordClick">
        {{ showPassword ? "Masquer" : "Afficher" }} le mdp
      </p> -->
      <div>
        <a href="#"> Mot de passe oublié ?</a>
      </div>
      <div v-if="hasError">
        <p>Veuillez entrer toutes les informations</p>
      </div>
      <ButtonHM class="-Secondary">Inscription</ButtonHM>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.formLogIn {
  text-align: center;
  &__Identity{
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: auto;
    &__Input{
      width: 45%;
      margin: 0;
    }
  }
}

a {
  text-decoration: none;
  color: $darkGrey;
  margin: rem(12);
  &:visited {
    color: $darkGrey;
  }
}

input{
  width: 30%;
}
</style>