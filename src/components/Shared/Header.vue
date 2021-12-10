<template>
  <div class="Header" :style="headerStyle">
    <div class="Header__container">
      <a href="#Home" class="Header__logo">fw</a>
      <div class="Header__nav" :class="'Header__nav--' + screen.type.value">
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
      </div>
      <div class="Header__actionContainer">
        <button
          class="Header__cta"
          :class="'Header__cta--' + screen.type.value"
        >
          Download CV
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed, ref } from "vue";

const hash = ref(location.hash);
const screen = inject("screen");
const headerStyle = computed(() => {
  return {
    "--bgOpacity": screen.scroll.value > window.innerHeight * 0.1 ? 0.98 : 0,
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
  transition: background-color 0.5s ease-in-out;
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
    padding: var(--pillPaddingM);
    border-radius: 32px;
    transition: background-color 0.3s ease-in-out;
    &--sm,
    &--xs {
      font-size: 16px;
      padding: var(--pillPaddingS);
    }
  }
  &__cta:hover {
    background-color: var(--lightPurple);
  }
  // animation
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
}
</style>
