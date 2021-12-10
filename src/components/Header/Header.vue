<template>
  <header class="Header" :style="headerStyle">
    <div class="Header__container">
      <a href="#Home" class="Header__logo">{f/w}</a>
      <nav class="Header__nav" :class="'Header__nav--' + screen.type.value">
        <a
          href="#Home"
          class="Header__navItem"
          :class="hash == '' || hash == '#Home' ? 'active' : ''"
          @click="hash = '#Home'"
          >Home</a
        >
        <a
          href="#About"
          class="Header__navItem"
          :class="hash == '#About' ? 'active' : ''"
          @click="hash = '#About'"
          >About</a
        >
        <a
          href="#Portfolio"
          class="Header__navItem"
          :class="hash == '#Portfolio' ? 'active' : ''"
          @click="hash = '#Portfolio'"
          >Portfolio</a
        >
        <a
          href="#Contact"
          class="Header__navItem"
          :class="hash == '#Contact' ? 'active' : ''"
          @click="hash = '#Contact'"
          >Contact</a
        >
      </nav>
      <div class="Header__actionContainer">
        <button
          class="Header__cta"
          :class="'Header__cta--' + screen.type.value"
        >
          Download CV
        </button>
        <a
          class="Header__navButton"
          v-if="['sm', 'xs'].includes(screen.type.value)"
          @click="isMobileNavOpened = !isMobileNavOpened"
        >
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            v-if="!isMobileNavOpened"
          >
            <title>Open mobile navigation</title>
            <g fill="var(--textColor)" fill-rule="evenodd">
              <rect y="8" width="16" height="2" rx="1"></rect>
              <rect y="4" width="16" height="2" rx="1"></rect>
              <rect width="16" height="2" rx="1"></rect>
            </g>
          </svg>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            v-if="isMobileNavOpened"
          >
            <title>Close mobile navigation</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4283 0.248461C12.5772 0.400341 12.6606 0.604537 12.6606 0.817211C12.6606 1.02989 12.5772 1.23408 12.4283 1.38596L8.98332 4.83909L12.4364 8.28409C12.5894 8.43708 12.6754 8.64459 12.6754 8.86096C12.6754 9.07733 12.5894 9.28484 12.4364 9.43784C12.2835 9.59083 12.0759 9.67678 11.8596 9.67678C11.6432 9.67678 11.4357 9.59083 11.2827 9.43784L7.8377 5.98471L4.3927 9.43784C4.2397 9.59083 4.03219 9.67678 3.81582 9.67678C3.59945 9.67678 3.39195 9.59083 3.23895 9.43784C3.08595 9.28484 3 9.07733 3 8.86096C3 8.64459 3.08595 8.43708 3.23895 8.28409L6.69207 4.83909L3.23895 1.39409C3.08595 1.24109 3 1.03358 3 0.817211C3 0.600841 3.08595 0.393333 3.23895 0.240336C3.39195 0.0873394 3.59945 0.001387 3.81582 0.001387C4.03219 0.001387 4.2397 0.0873394 4.3927 0.240336L7.8377 3.69346L11.2827 0.240336C11.3582 0.164182 11.4481 0.103737 11.5471 0.0624871C11.6461 0.0212375 11.7523 0 11.8596 0C11.9668 0 12.073 0.0212375 12.172 0.0624871C12.2711 0.103737 12.3609 0.164182 12.4364 0.240336L12.4283 0.248461Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
    <transition name="fadeScale">
      <nav
        class="Header__mobileNav"
        v-if="isMobileNavOpened"
        :class="'opened' ? isMobileNavOpened : ''"
      >
        <div class="Header__mobileCard">
          <div class="Header__mobileLink">
            <a
              href="#Home"
              class="Header__navItem"
              :class="hash == '' || hash == '#Home' ? 'active' : ''"
              @click="
                hash = '#Home';
                isMobileNavOpened = false;
              "
            >
              Home</a
            >
            <a
              href="#About"
              class="Header__navItem"
              :class="hash == '#About' ? 'active' : ''"
              @click="
                hash = '#About';
                isMobileNavOpened = false;
              "
            >
              About</a
            >
            <a
              href="#Portfolio"
              class="Header__navItem"
              :class="hash == '#Portfolio' ? 'active' : ''"
              @click="
                hash = '#Portfolio';
                isMobileNavOpened = false;
              "
            >
              Portfolio</a
            >
            <a
              href="#Contact"
              class="Header__navItem"
              :class="hash == '#Contact' ? 'active' : ''"
              @click="
                hash = '#Contact';
                isMobileNavOpened = false;
              "
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { inject, computed, ref } from "vue";

const hash = ref(location.hash);
const screen = inject("screen");
const isMobileNavOpened = ref(false);
const headerStyle = computed(() => {
  return {
    "--bgOpacity": screen.scroll.value > window.innerHeight * 0.1 ? 0.97 : 0,
  };
});
</script>

<style lang="scss" scoped>
.Header {
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 1.88vh 0;
  animation: moveDown 0.88s ease-in-out forwards;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  background-color: rgba($color: #fdfdff, $alpha: var(--bgOpacity));
  transition: var(--bgTransition);
  &__container {
    max-width: var(--layoutWidth);
    padding: 0 var(--layoutPadding);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  &__logo {
    color: var(--textColor);
    font-size: var(--fontL);
    font-weight: 600;
  }
  &__nav {
    display: flex;
    justify-content: center;
    &--sm,
    &--xs {
      display: none;
    }
  }
  &__navItem {
    text-align: center;
    font-size: var(--fontXS);
    font-weight: 500;
    color: var(--textColor);
    text-decoration: none;
    width: 8rem;
    padding: 8px 0;
    border-radius: 32px;
    &.active {
      color: var(--purple);
    }
  }
  &__cta {
    cursor: pointer;
    border: none;
    background-color: var(--purple);
    color: var(--textColorLight);
    font-size: var(--fontXS);
    font-weight: 500;
    padding: var(--pillPaddingM);
    border-radius: 32px;
    transition: var(--bgTransition);
    &--sm,
    &--xs {
      font-size: var(--fontXXS);
      padding: var(--pillPaddingS);
    }
    &:hover {
      background-color: var(--lightPurple);
    }
  }
  &__navButton {
    cursor: pointer;
    padding: 6px 16px;
    border-radius: 16px;
    background-color: rgba($color: #000, $alpha: 0.069);
    transition: var(--bgTransition);
    margin-left: 12px;
    &:hover {
      background-color: rgba($color: #000, $alpha: 0.039);
    }
  }
  &__mobileNav {
    position: fixed;
    top: 10vh;
    right: 0;
    margin: 12px;
    z-index: 10;
  }
  &__mobileNavItemIcon {
    width: var(--fontM);
    padding-right: 16px;
    fill: var(--lighterPurple);
  }
  &__mobileCard {
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: 50vh;
    background: #f2f0f6;
    border-radius: 12px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3);
    padding: 16px;
    padding-bottom: 36px;
  }
  &__mobileLink {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 12px;
    height: 100%;
    a {
      font-size: var(--fontS);
    }
  }
}
// animation
.fadeScale-enter-active {
  animation: fadeScale-in 0.25s ease-in-out;
  backface-visibility: hidden;
}
.fadeScale-leave-active {
  animation: fadeScale-out 0.25s ease-in-out;
  backface-visibility: hidden;
}
@keyframes moveDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -8vh, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeScale-in {
  0% {
    opacity: 0;
    transform: scale(0.95) translate3d(50vw, 0, 0);
    transform-origin: right;
  }
  100% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
    transform-origin: right;
  }
}
@keyframes fadeScale-out {
  0% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
    transform-origin: right;
  }
  100% {
    opacity: 0;
    transform: scale(0.95) translate3d(50vw, 0, 0);
    transform-origin: right;
  }
}
</style>
