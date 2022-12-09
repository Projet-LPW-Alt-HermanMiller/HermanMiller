<script>

</script>


<template>
  <div class="footer">
    <div class="footer__left">
      <img src="" />
      <div class="footer__list">
        <h5 class="footer__title">NOUS CONTACTER</h5>
        <p class="footer__info">info_france@hermanmiller.com</p>
        <p class="footer__info">+33 1 88 46 72 80</p>
        <p class="footer__info">Réclamations</p>
        <p class="footer__info">Service client</p>
      </div>
      <div class="footer__RS">
        <a class="RSFooter Twitter" href="https://twitter.com/HermanMiller"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
        <a class="RSFooter LinkedIn" href="https://www.linkedin.com/company/herman-miller/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
        <a class="RSFooter Instagram" href="https://www.instagram.com/hermanmiller/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        <a class="RSFooter Facebook" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
      </div>
    </div>

    <div class="footer__right">
      <div class="footer__menu">
        <div class="footer__list">
          <h5 class="footer__title">SIÈGES</h5>
          <p class="footer__info">Sièges de bureau</p>
          <p class="footer__info">Sièges d'appoint</p>
          <p class="footer__info">Sièges empilables</p>
          <p class="footer__info">Sièges lounge</p>
          <p class="footer__info">Tabourets hauts</p>
        </div>
        <div class="footer__list">
          <h5 class="footer__title">À PROPOS</h5>
          <p class="footer__info">Notre entreprise</p>
          <p class="footer__info">Nos engagements</p>
          <p class="footer__info">Nos partenaires</p>
          <p class="footer__info">Interviews</p>
          <p class="footer__info">Réglages des sièges</p>
        </div>
        <div class="footer__list">
          <h5 class="footer__title">ENTREPRISES</h5>
          <p class="footer__info">Nos solutions</p>
          <p class="footer__info">Recherches</p>
        </div>
      </div>
      <div class="footer__infosPratiques">
        <p>Mentions légales</p>
        <p>CGU</p>
        <p>CGV</p>
        <p>Politique de confidentialité</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100%;
  height: 50vh;
  &__left {
    background-color: $backgroundFooterLight;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__right {
    background-color: $backgroundFooterDark;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 40px;
  }
  &__menu {
    background-color: $backgroundFooterDark;
    display: flex;
    justify-content: space-around;
  }
  &__infosPratiques {
    background-color: $backgroundFooterDark;
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    font-size: $small-font-size;
  }
  &__RS {
    width: 70%;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
  }
}

.RSFooter {
  background-color: $HMColor;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>
