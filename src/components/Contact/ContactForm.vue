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
      id="text"
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
    <button
      class="ContactForm__submitButton"
      @click="onSubmit"
      :disabled="submitState.disabled"
      :style="{ cursor: submitState.disabled ? 'not-allowed' : 'pointer' }"
    >
      <transition name="fadeUp" mode="out-in">
        <div class="ButtonContainer" :key="submitState.status">
          <svg
            class="ContactForm__submitIcon"
            id="SendIcon"
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
            class="ContactForm__submitIcon"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="submitState.status == 'Message Sent'"
          >
            <g id="done">
              <g id="Group">
                <path
                  id="circle"
                  d="M16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32Z"
                  fill="black"
                />
                <path
                  id="tick"
                  d="M21.9399 9.93995C21.9257 9.95376 21.9123 9.96845 21.8999 9.98395L14.9539 18.834L10.7679 14.646C10.4836 14.381 10.1075 14.2367 9.7189 14.2436C9.3303 14.2505 8.95953 14.4079 8.6847 14.6827C8.40987 14.9575 8.25245 15.3283 8.2456 15.7169C8.23874 16.1055 8.38298 16.4816 8.64794 16.766L13.9399 22.0599C14.0825 22.2023 14.2523 22.3144 14.4391 22.3897C14.626 22.4649 14.826 22.5018 15.0274 22.4981C15.2288 22.4943 15.4274 22.4501 15.6113 22.3679C15.7953 22.2858 15.9608 22.1674 16.0979 22.02L24.0819 12.04C24.3538 11.7546 24.5024 11.3737 24.4957 10.9797C24.489 10.5856 24.3275 10.21 24.0461 9.93414C23.7646 9.65823 23.3859 9.50417 22.9918 9.50525C22.5977 9.50634 22.2198 9.66249 21.9399 9.93995Z"
                  fill="black"
                />
              </g>
            </g>
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
      const exeInt = end - start;
      setTimeout(
        () => {
          formData.name = "";
          formData.email = "";
          formData.message = "";
          isSubmitClicked.value = false;
          submitState.disabled = true;
          submitState.status = "Message Sent";
        },
        exeInt < 2222 ? 2222 - exeInt : 0
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
  &__submitIcon {
    width: 24px;
    path {
      fill: white;
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
#SendIcon {
  animation: hovering 2s ease-in-out infinite;
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
#done {
  #circle {
    transform-origin: 50% 50%;
    --len: 188.4960174560547;
    stroke-dasharray: var(--len);
    stroke-dashoffset: var(--len);
    animation: stroke 0.88s ease-in-out forwards;
    backface-visibility: hidden;
  }
  #tick {
    transform-origin: 50% 50%;
    --len: 49.18244171142578;
    stroke-dasharray: var(--len);
    stroke-dashoffset: var(--len);
    animation: stroke 0.88s ease-in-out 0.88s forwards;
    backface-visibility: hidden;
  }
}

// animations
.fadeUp-enter-active {
  animation: fadeUp 0.369s ease-in-out;
}
.fadeUp-leave-active {
  animation: fadeUpAway 0.369s ease-in-out;
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
