<template>
  <a
    href="#home"
    class="NavLink"
    :class="hash == '' || hash == '#home' ? 'active' : ''"
    @click="
      hash = '#home';
      isMobileNavOpened = false;
    "
  >
    Home</a
  >
  <a
    href="#about"
    class="NavLink"
    :class="hash == '#about' ? 'active' : ''"
    @click="
      hash = '#about';
      isMobileNavOpened = false;
    "
  >
    About</a
  >
  <a
    href="#project"
    class="NavLink"
    :class="hash == '#project' ? 'active' : ''"
    @click="
      hash = '#project';
      isMobileNavOpened = false;
    "
  >
    Project</a
  >
  <a
    href="#contact"
    class="NavLink"
    :class="hash == '#contact' ? 'active' : ''"
    @click="
      hash = '#contact';
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
