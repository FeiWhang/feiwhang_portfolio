<template>
  <form
    class="ContactForm"
    :class="screen.width.value < 669 ? 'ContactForm--mobile' : ''"
    @submit.prevent="onSubmit"
  >
    <label for="name" class="ContactForm__label">Name</label>
    <input
      type="text"
      id="name"
      v-model="formData.name"
      class="ContactForm__input"
    />
    <p
      class="ContactForm__error"
      :style="{ opacity: !validation.name && isSubmitClicked ? 1 : 0 }"
    >
      * Name cannot be empty
    </p>
    <label for="email" class="ContactForm__label">Email</label>
    <input
      type="text"
      id="text"
      v-model="formData.email"
      class="ContactForm__input"
    />
    <p
      class="ContactForm__error"
      :style="{ opacity: !validation.email && isSubmitClicked ? 1 : 0 }"
    >
      * Email format is invalid
    </p>
    <label for="email" class="ContactForm__label">Message</label>
    <textarea
      name="message"
      id="message"
      v-model="formData.message"
      cols="30"
      rows="10"
      class="ContactForm__input"
    ></textarea>
    <p
      class="ContactForm__error"
      :style="{ opacity: !validation.message && isSubmitClicked ? 1 : 0 }"
    >
      * Message cannot be empty
    </p>
    <input type="submit" value="Send Message" id="submit" />
  </form>
</template>

<script setup>
import { inject, reactive, computed, ref } from "vue";

const screen = inject("screen");
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const emailRE =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validation = computed(() => {
  return {
    name: !!formData.name.trim(),
    email: emailRE.test(formData.email),
    message: !!formData.message.trim(),
  };
});

const isSubmitClicked = ref(false);

function onSubmit() {
  isSubmitClicked.value = true;
  const isValid = Object.keys(validation.value).every((key) => {
    return validation.value[key];
  });
  if (isValid) {
    console.log("valid!");
  }
}
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
  &__error {
    color: var(--redError);
    margin: 4px 0 16px 8px;
    font-size: var(--fontXXXS);
    transition: opacity 0.2s ease-in-out;
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
    margin-top: 8px;
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
