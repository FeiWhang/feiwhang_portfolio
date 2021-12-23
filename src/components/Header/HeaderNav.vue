<template>
  <a
    class="NavLink"
    :class="hash == '' || hash == '#home' ? 'active' : ''"
    @click="onNavClicked('home')"
  >
    Home</a
  >
  <a
    class="NavLink"
    :class="hash == '#about' ? 'active' : ''"
    @click="onNavClicked('about')"
  >
    About</a
  >
  <a
    class="NavLink"
    :class="hash == '#project' ? 'active' : ''"
    @click="onNavClicked('project')"
  >
    Project</a
  >
  <a
    class="NavLink"
    :class="hash == '#contact' ? 'active' : ''"
    @click="onNavClicked('contact')"
  >
    Contact
  </a>
</template>

<script setup>
import { ref, inject } from "vue";

const hash = ref(location.hash);
const isMobileNavOpened = inject("isMobileNavOpened");

function onNavClicked(id) {
  hash.value = "#" + id;
  isMobileNavOpened.value = false;

  const navEl = document.getElementById(id);
  navEl.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
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
