<template>
  <div class="Header">
    <router-link class="Header__navItem" exact to="/">
      <h1 class="Header__logo">feiwhang</h1>
    </router-link>
    <div class="Header__nav">
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
    <button class="Header__cta">Download CV</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  &__logo {
    font-size: var(--fontL);
    font-weight: 600;
  }
  &__nav {
    display: flex;
    justify-content: center;
    column-gap: 50px;
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
    transition: background-color 0.2s ease-in-out;
  }
  &__cta:hover {
    background-color: var(--lightPurple);
  }
}
</style>
