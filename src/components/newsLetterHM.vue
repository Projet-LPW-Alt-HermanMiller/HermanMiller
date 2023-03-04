<template>
  <div class="newsLetter-HM">
    <div class="newsLetter-HM__content">
      <div class="newsLetter-HM__title">
        <h2>
          <span>Newsletter</span><br />
          Restez au courant des dernières
          nouveautés
        </h2>
      </div>
      <div class="newsLetter-HM__form">
        <form action="">
          <input type="text" placeholder="Your email address" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsLetterHM",
};
</script>

<style lang="scss" scoped>
@import "../scss/foundations/variables.scss";

.newsLetter-HM {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 50px 0;
  }

  &__title {
    font-size: 45px;
    font-weight: 700;
    color: black;
    text-align: center;
    margin-bottom: 50px;

    h2 {
      span {
        color: #3b7fcc;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;

    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;

      input {
        width: 100%;
        height: 50px;
        border: 1px solid $HMColor;
        border-radius: 5px 0 0 5px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: 400;
        color: black;
        margin-right: 0;

        &::placeholder {
          color: $HMColor;
        }
      }

      button {
        width: 150px;
        height: 50px;
        border: 1px solid $HMColor;
        border-radius: 0 5px 5px 0;
        background-color: $HMColor;
        color: white;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          background-color: white;
          color: $HMColor;
        }
      }
    }
  }
}
</style>
