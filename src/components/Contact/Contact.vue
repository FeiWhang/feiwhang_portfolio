<template>
  <section id="contact" class="Contact">
    <div class="SectionContainer">
      <header class="Contact__header">
        <h2 class="SectionSubtitle" id="ContactSubtitle">Contact</h2>
        <h1 class="SectionTitle" id="ContactTitle">Get a quote</h1>
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
.Contact {
  max-width: var(--layoutWidth);
  margin: 0 auto;
  padding: 0 var(--layoutPadding);
}
</style>
