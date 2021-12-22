<template>
  <section id="contact" class="Contact">
    <div class="ContactContainer">
      <header class="Contact__header">
        <h2 class="Contact__subtitle">Contact</h2>
        <h1 class="Contact__title">Talk with me</h1>
      </header>
      <div class="Contact__body"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { observeContact } from "@/components/Shared/observer.js";

onMounted(() => observeContact());

// const screen = inject("screen");
</script>

<style lang="scss" scoped>
.ContactContainer {
  margin: 0 auto;
  padding: var(--sectionSpace) 0;
  min-width: 300px;
  max-width: var(--secondLayoutWidth);
}
.Contact {
  max-width: var(--layoutWidth);
  margin: 0 auto;
  padding: 0 var(--layoutPadding);
  &__subtitle {
    font-size: var(--fontS);
    font-weight: 600;
    color: var(--lightPurple);
    margin-bottom: 20px;
    opacity: 0;
  }
  &__title {
    font-family: "Lexend Deca";
    font-weight: 500;
    font-size: var(--fontL);
    opacity: 0;
  }
}
</style>
