<template>
  <form
    class="ContactForm"
    :class="screen.width.value < 669 ? 'ContactForm--mobile' : ''"
    @submit.prevent
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
      id="email"
      v-model="formData.email"
      class="ContactForm__input"
    />
    <p
      class="ContactForm__error"
      :style="{
        opacity: !validation.email && isSubmitClicked ? 1 : 0,
      }"
    >
      * Email format is invalid
    </p>
    <label for="message" class="ContactForm__label">Message</label>
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
    <button
      class="ContactForm__submitButton"
      @click="onSubmit"
      :disabled="submitState.disabled"
      :style="{ cursor: submitState.disabled ? 'not-allowed' : 'pointer' }"
    >
      <transition name="fadeUp" mode="out-in">
        <div class="ButtonContainer" :key="submitState.status">
          <svg
            class="SendIcon"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="submitState.status == 'Send Message'"
          >
            <path
              d="M28.568 14.7933L5.90134 4.12666C5.6731 4.01926 5.41907 3.97881 5.16876 4.01001C4.91844 4.04121 4.68211 4.14277 4.48721 4.30291C4.29231 4.46304 4.14683 4.67518 4.06767 4.91469C3.98852 5.1542 3.97892 5.41125 4.04001 5.65599L5.65601 12.1213L16 16L5.65601 19.8787L4.04001 26.344C3.97777 26.5889 3.98657 26.8465 4.06536 27.0866C4.14415 27.3267 4.28969 27.5394 4.48494 27.6998C4.68019 27.8603 4.91709 27.9618 5.16792 27.9925C5.41875 28.0232 5.67314 27.9819 5.90134 27.8733L28.568 17.2067C28.7971 17.099 28.9908 16.9283 29.1264 16.7147C29.2621 16.501 29.3341 16.2531 29.3341 16C29.3341 15.7469 29.2621 15.499 29.1264 15.2853C28.9908 15.0717 28.7971 14.901 28.568 14.7933V14.7933Z"
              fill="black"
            />
          </svg>
          <div class="LoadingIcon" v-if="submitState.status == 'Sending'">
            <div class="LoadingIcon__circle LoadingIcon__circle--1"></div>
            <div class="LoadingIcon__circle LoadingIcon__circle--2"></div>
          </div>
          <svg
            class="DoneIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            v-if="submitState.status == 'Message Sent'"
          >
            <circle
              class="DoneIcon__circle"
              cx="26"
              cy="26"
              r="23"
              fill="none"
            />
            <path
              class="DoneIcon__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <p class="ContactForm__submitStatus">
            {{ submitState.status }}
          </p>
        </div>
      </transition>
    </button>
  </form>
</template>

<script setup>
import { db } from "@/main";
import { inject, reactive, computed, ref } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

const submitState = reactive({
  status: "Send Message",
  disabled: false,
});

const isSubmitClicked = ref(false);

function onSubmit() {
  isSubmitClicked.value = true;
  const isValid = Object.keys(validation.value).every((key) => {
    return validation.value[key];
  });
  if (isValid) {
    (async () => {
      // start timer
      const start = window.performance.now();
      submitState.status = "Sending";
      // add message to store
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      }).catch((e) => {
        console.log(e);
      });
      const end = window.performance.now();
      // find interval of time
      const exeInt = end - start;
      // set timeout if timer is less than 2.5s
      // to show loading animation
      setTimeout(
        () => {
          formData.name = "";
          formData.email = "";
          formData.message = "";
          isSubmitClicked.value = false;
          submitState.disabled = true;
          submitState.status = "Message Sent";
        },
        exeInt < 2500 ? 2500 - exeInt : 0
      );
    })();
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
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 6px transparent;
    color: var(--bodyTextColor);
    will-change: box-shadow;
    transition: box-shadow 0.2s ease-in-out;
    &:focus {
      -webkit-box-shadow: 0 0 6px var(--shadowColor);
      box-shadow: 0 0 6px var(--shadowColor);
    }
  }
  &__error {
    color: var(--redError);
    margin: 4px 0 16px 8px;
    font-size: var(--fontXXXS);
    transition: opacity 0.2s ease-in-out;
  }
  &__submitButton {
    width: 100%;
    cursor: pointer;
    background-color: var(--purple);
    border-radius: 6px;
    padding: 12px;
    margin-top: 8px;
    font-size: var(--fontXS);
    font-weight: 500;
    color: white;
    transition: var(--bgTransition);
    &:hover {
      background-color: var(--lightPurple);
    }
  }

  #message {
    resize: none;
    padding: 12px 16px;
  }
  &--mobile {
    input,
    textarea {
      width: auto;
      flex: 1;
    }
  }
}
.ButtonContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
}
.SendIcon {
  width: 24px;
  animation: hovering 2s ease-in-out infinite;
  path {
    fill: white;
  }
}
.LoadingIcon,
.LoadingIcon * {
  box-sizing: border-box;
}
.LoadingIcon {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  position: relative;
  &__circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(24px / 10) solid transparent;
    &--1 {
      border-top-color: white;
      animation: spinning 1.69s ease-in-out infinite;
    }
    &--2 {
      border-bottom-color: white;
      animation: spinning 1.69s ease-in-out infinite alternate;
    }
  }
}
.DoneIcon {
  width: 24px;
  display: block;
  stroke-width: 4;
  stroke: #fff;
  stroke-miterlimit: 10;
  &__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 4;
    stroke-miterlimit: 10;
    stroke: white;
    fill: none;
    animation: stroke 0.88s ease-in-out forwards;
  }
  &__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.44s ease-in-out 0.99s forwards;
  }
}

// animations
.fadeUp-enter-active {
  animation: fadeUp 0.3s ease-in-out;
}
.fadeUp-leave-active {
  animation: fadeUpAway 0.3s ease-in-out;
}
@keyframes hovering {
  0% {
    transform: translate3d(-4px, 0, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-4px, 0, 0);
  }
}
@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 8px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeUpAway {
  0% {
    opacity: 1;
    transform: translate3d(0, 8px, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
</style>
