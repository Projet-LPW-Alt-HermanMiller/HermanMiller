<script>
import twitterIco from "@/assets/icons/twitterIco.vue";
import linkedinIco from "@/assets/icons/linkedinIco.vue";
import instagramIco from "@/assets/icons/instagramIco.vue";
import FacebookIco from "@/assets/icons/facebookIco.vue";
export default {
  name: "FooterHm",
  components: {
    FacebookIco,
    twitterIco,
    linkedinIco,
    instagramIco,
  },
};
</script>

<template>
  <div class="footer">
    <div class="footer__parts">
      <div class="footer__left">
        <img src="../assets/logos/hm-logo-caption.svg" />
        <div class="footer__list">
          <h5 class="footer__title">NOUS CONTACTER</h5>
          <p class="footer__info">info_france@hermanmiller.com</p>
          <p class="footer__info">+33 1 88 46 72 80</p>
          <p class="footer__info">Réclamations</p>
          <p class="footer__info">Service client</p>
        </div>
        <div class="footer__RS">
          <twitter-ico />
          <linkedin-ico />
          <instagram-ico />
          <facebook-ico />
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
          <p><router-link to="/mentions-legales">Mentions légales</router-link></p>
          <p><router-link to="/CGU">CGU</router-link></p>
          <p><router-link to="/CGV">CGV</router-link></p>
          <p><router-link to="/politique-de-confidentialite">Politique de confidentialité</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: max-content;

  &__parts {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__left {
    background-color: $backgroundFooterLight;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 20px 0;
    @media (max-width: 768px) {
      width: 100vw;
    }
  }

  &__right {
    background-color: $backgroundFooterDark;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 40px 0 20px 0;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &__menu {
    background-color: $backgroundFooterDark;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__infosPratiques {
    background-color: $backgroundFooterDark;
    width: 70%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    font-size: $small-font-size;
    font-weight: 200;
    @media (max-width: 768px) {
      p {
        padding: 10px;
      }
    }
  }

  &__RS {
    width: 70%;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
  }
  &__info {
    font-size: $small-font-size;
    font-weight: 400;
    padding: 5px 0;
  }
  &__title {
    font-size: $base-font-size;
    font-weight: 600;
    padding: 5px 0;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  &__list {
    margin-bottom: 30px;
    @media (max-width: 768px) {
      p, h5 {
        text-align: center;
      }
    }
  }
}


a {
  text-decoration: none;
  color: $darkGrey;
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
