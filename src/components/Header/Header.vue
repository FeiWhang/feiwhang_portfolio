<template>
  <header class="Header">
    <div class="Header__container">
      <a href="#Home" class="Header__logo">{f/w}</a>
      <nav class="Header__nav" v-if="!['sm', 'xs'].includes(screen.type.value)">
        <HeaderNav />
      </nav>
      <div class="Header__action">
        <div
          class="Header__toggle"
          :class="isDark ? 'Header__toggle--active' : ''"
          @click="isDark = !isDark"
          title="Toggle dark mode"
        >
          <i></i>
        </div>
        <button
          class="Header__cta"
          :class="'Header__cta--' + screen.type.value"
          v-if="!['sm', 'xs'].includes(screen.type.value)"
        >
          Download CV
        </button>
        <a
          class="Header__navButton"
          v-if="['sm', 'xs'].includes(screen.type.value)"
          @click="isMobileNavOpened = !isMobileNavOpened"
        >
          <svg width="16" height="10" viewBox="0 0 16 10">
            <title>Open mobile navigation</title>
            <g fill="var(--textColor)" fill-rule="evenodd">
              <rect y="8" width="16" height="2" rx="1"></rect>
              <rect y="4" width="16" height="2" rx="1"></rect>
              <rect width="16" height="2" rx="1"></rect>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <transition name="fadeScale">
      <nav
        class="Header__mobileNav"
        v-if="isMobileNavOpened"
        :class="'opened' ? isMobileNavOpened : ''"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <div class="Header__mobileCard">
          <a
            class="Header__mobileClose"
            @click="isMobileNavOpened = !isMobileNavOpened"
          >
            <svg width="16" height="10" viewBox="0 0 16 10">
              <title>Close mobile navigation</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4283 0.248461C12.5772 0.400341 12.6606 0.604537 12.6606 0.817211C12.6606 1.02989 12.5772 1.23408 12.4283 1.38596L8.98332 4.83909L12.4364 8.28409C12.5894 8.43708 12.6754 8.64459 12.6754 8.86096C12.6754 9.07733 12.5894 9.28484 12.4364 9.43784C12.2835 9.59083 12.0759 9.67678 11.8596 9.67678C11.6432 9.67678 11.4357 9.59083 11.2827 9.43784L7.8377 5.98471L4.3927 9.43784C4.2397 9.59083 4.03219 9.67678 3.81582 9.67678C3.59945 9.67678 3.39195 9.59083 3.23895 9.43784C3.08595 9.28484 3 9.07733 3 8.86096C3 8.64459 3.08595 8.43708 3.23895 8.28409L6.69207 4.83909L3.23895 1.39409C3.08595 1.24109 3 1.03358 3 0.817211C3 0.600841 3.08595 0.393333 3.23895 0.240336C3.39195 0.0873394 3.59945 0.001387 3.81582 0.001387C4.03219 0.001387 4.2397 0.0873394 4.3927 0.240336L7.8377 3.69346L11.2827 0.240336C11.3582 0.164182 11.4481 0.103737 11.5471 0.0624871C11.6461 0.0212375 11.7523 0 11.8596 0C11.9668 0 12.073 0.0212375 12.172 0.0624871C12.2711 0.103737 12.3609 0.164182 12.4364 0.240336L12.4283 0.248461Z"
                fill="var(--textColor)"
              />
            </svg>
          </a>
          <nav class="Header__mobileLink">
            <HeaderNav />
            <br />
            <button
              class="Header__cta"
              :class="'Header__cta--' + screen.type.value"
            >
              Download CV
            </button>
          </nav>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { inject, ref, provide } from "vue";
import HeaderNav from "./HeaderNav.vue";

const screen = inject("screen");
const isMobileNavOpened = ref(false);
const isDark = inject("isDark");
provide("isMobileNavOpened", isMobileNavOpened);
</script>

<style lang="scss">
.Header {
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 1.23vh 0;
  animation: moveDown 0.88s ease-in-out forwards;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  background-color: var(--bgColor);
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
  }
  &__action {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__toggle {
    position: relative;
    background-color: rgba($color: #222, $alpha: 0.3);
    width: 48px;
    height: 24px;
    border-radius: 24px;
    box-shadow: inset 0 0 4px rgba($color: #222, $alpha: 0.18);
    margin-right: 16px;
    i {
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(to bottom, #eaeaea, #f9f9f9);
      width: 24px;
      height: 24px;
      border-radius: 24px;
      transform: scale(0.8);
      transition: all 0.25s ease-in-out;
      box-shadow: inset 0 0 4px rgba($color: #fff, $alpha: 1);
    }
    &--active {
      box-shadow: inset 0 0 4px rgba($color: #fff, $alpha: 0.088);
      background-color: var(--lightPurple);
      i {
        left: 24px;
      }
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
    &:hover {
      background-color: rgba($color: #000, $alpha: 0.039);
    }
  }
  &__mobileNav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
  }
  &__mobileCard {
    display: flex;
    flex-direction: column;
    height: 95%;
    background: var(--bgColor);
    border-radius: 12px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3);
    padding: 16px;
    padding-bottom: 36px;
  }
  &__mobileClose {
    position: fixed;
    top: 22px;
    right: 16px;
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
  &__mobileLink {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 12px;
    height: 100%;
    a {
      font-size: var(--fontM);
    }
  }
}
// animation
.fadeScale-enter-active {
  animation: moveIn 0.25s ease-in-out;
  backface-visibility: hidden;
}
.fadeScale-leave-active {
  animation: moveOut 0.25s ease-in-out;
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
@keyframes moveIn {
  0% {
    opacity: 0;
    transform: translate3d(100vw, 0, 0);
    transform-origin: right;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transform-origin: right;
  }
}
@keyframes moveOut {
  0% {
    transform: translate3d(0, 0, 0);
    transform-origin: right;
  }
  100% {
    transform: translate3d(100vw, 0, 0);
    transform-origin: right;
  }
}
</style>
