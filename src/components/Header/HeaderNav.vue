<template>
  <a
    href="#home"
    class="NavLink"
    :class="hash == '' || hash == '#Home' ? 'active' : ''"
    @click="
      hash = '#Home';
      isMobileNavOpened = false;
    "
  >
    Home</a
  >
  <a
    href="#about"
    class="NavLink"
    :class="hash == '#About' ? 'active' : ''"
    @click="
      hash = '#About';
      isMobileNavOpened = false;
    "
  >
    About</a
  >
  <a
    href="#project"
    class="NavLink"
    :class="hash == '#Project' ? 'active' : ''"
    @click="
      hash = '#Project';
      isMobileNavOpened = false;
    "
  >
    Project</a
  >
  <a
    href="#contact"
    class="NavLink"
    :class="hash == '#Contact' ? 'active' : ''"
    @click="
      hash = '#Contact';
      isMobileNavOpened = false;
    "
  >
    Contact
  </a>
</template>

<script setup>
import { ref, inject } from "vue";

const hash = ref(location.hash);
const isMobileNavOpened = inject("isMobileNavOpened");
</script>

<style lang="scss" scoped>
.NavLink {
  text-align: center;
  font-weight: 500;
  color: var(--textColor);
  text-decoration: none;
  width: 6.9rem;
  padding: 8px 0;
  border-radius: 32px;
  &.active {
    color: var(--activeTextColor);
  }
}
</style>
