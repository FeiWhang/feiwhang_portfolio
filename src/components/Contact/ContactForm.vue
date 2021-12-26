<template>
  <form
    class="ContactForm"
    :class="screen.width.value < 669 ? 'ContactForm--mobile' : ''"
  >
    <label for="name" class="ContactForm__label">Name</label>
    <input type="text" id="name" class="ContactForm__input" />
    <br />
    <label for="email" class="ContactForm__label">Email</label>
    <input type="text" id="text" class="ContactForm__input" />
    <br />
    <label for="email" class="ContactForm__label">Message</label>
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="10"
      class="ContactForm__input"
    ></textarea>
    <br />
    <input type="submit" value="Send Message" id="submit" />
  </form>
</template>

<script setup>
import { inject } from "vue";

const screen = inject("screen");
</script>

<style lang="scss" scoped>
.ContactForm {
  display: flex;
  flex-direction: column;
  opacity: 0;
  &__label {
    margin-bottom: 6px;
    font-size: var(--fontXXS);
    font-family: "Lexend Deca";
    font-weight: 200;
  }
  &__input {
    width: clamp(280px, 30vw, 369px);
    padding: 8px 16px;
    border-radius: 8px;
    font-family: Nunito;
    font-size: var(--fontXS);
    background-color: var(--thirdBgColor);
    box-shadow: 0 0 6px transparent;
    color: var(--bodyTextColor);
    will-change: box-shadow;
    transition: box-shadow 0.2s ease-in-out;
    &:focus {
      box-shadow: 0 0 6px var(--shadowColor);
    }
  }
  #message {
    resize: none;
    padding: 12px 16px;
  }
  #submit {
    cursor: pointer;
    background-color: var(--purple);
    border-radius: 6px;
    padding: 12px;
    font-size: var(--fontXS);
    color: white;
    transition: var(--bgTransition);
    &:hover {
      background-color: var(--lightPurple);
    }
  }
  &--mobile {
    input,
    textarea {
      width: auto;
      flex: 1;
    }
  }
}
</style>
