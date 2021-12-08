<template>
  <div class="Header">
    <div class="Header__container">
      <router-link class="Header__navItem" exact to="/">
        <h1 class="Header__logo">fw</h1>
      </router-link>
      <div class="Header__nav" :class="'Header__nav--' + screen.type.value">
        <router-link class="Header__navItem" active-class="active" exact to="/">
          <span>Home</span>
        </router-link>
        <router-link
          class="Header__navItem"
          active-class="active"
          exact
          to="/about"
        >
          <span>About</span>
        </router-link>
        <router-link
          class="Header__navItem"
          active-class="active"
          exact
          to="/portfolio"
        >
          <span>Portfolio</span>
        </router-link>
        <router-link
          class="Header__navItem"
          active-class="active"
          exact
          to="/tools"
        >
          <span>Tools</span>
        </router-link>
        <router-link
          class="Header__navItem"
          active-class="active"
          exact
          to="/contact"
        >
          <span>Contact</span>
        </router-link>
      </div>
      <button class="Header__cta" :class="'Header__cta--' + screen.type.value">
        Download CV
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const screen = inject("screen");
</script>

<style lang="scss" scoped>
.Header {
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  padding: 32px 0;
  &__container {
    max-width: var(--layoutWidth);
    padding: 0 var(--layoutPadding);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    font-size: var(--fontL);
    font-weight: 600;
  }
  &__nav {
    display: flex;
    justify-content: center;
    column-gap: 50px;
    &--sm,
    &--xs {
      display: none;
    }
  }
  &__navItem {
    font-size: var(--fontS);
    color: var(--textColor);
    text-decoration: none;
    &.active {
      color: var(--purple);
    }
  }
  &__cta {
    cursor: pointer;
    border: none;
    background-color: var(--purple);
    color: white;
    font-size: var(--fontS);
    padding: var(--pillPaddingL);
    border-radius: 32px;
    transition: background-color 0.3s ease-in-out;
    &--sm,
    &--xs {
      padding: var(--pillPaddingM);
    }
  }
  &__cta:hover {
    background-color: var(--lightPurple);
  }
}
</style>
