<template>
  <section id="project" class="Project">
    <div class="ProjectContainer">
      <header class="Project__header">
        <h2 class="Project__subtitle">Project</h2>
        <h1 class="Project__title">Things I've built</h1>
      </header>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { observeProject } from "@/components/Shared/observer.js";

onMounted(() => observeProject());
</script>

<style lang="scss" scoped>
.ProjectContainer {
  margin: var(--sectionSpace) auto;
  min-width: 300px;
  max-width: var(--secondLayoutWidth);
}
.Project {
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
