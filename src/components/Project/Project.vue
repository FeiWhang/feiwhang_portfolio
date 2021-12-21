<template>
  <section id="project" class="Project">
    <div class="ProjectContainer">
      <header class="Project__header">
        <h2 class="Project__subtitle">Project</h2>
        <h1 class="Project__title">Things I've built</h1>
      </header>
      <div class="Project__body">
        <div
          class="ProjectItem"
          v-for="(project, index) in projects"
          :key="index"
        >
          <img src="" alt="" class="ProjectItem__image" />
          <div class="ProjectItem__content">
            <p class="ProjectItem__category">{{ project.category }}</p>
            <h2 class="ProjectItem__title">{{ project.title }}</h2>
            <p class="ProjectItem__tag">{{ project.tag.join(" ") }}</p>
            <p class="ProjectItem__description">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { observeProject } from "@/components/Shared/observer.js";

onMounted(() => observeProject());

const projects = [
  {
    category: "Side project",
    title: "Blockchain Visual",
    tag: ["HTML", "CSS", "Vue.js"],
    description:
      "A visualisation website for blockchain. You can see the building block of the blockchain and how are all the blocks chained together to create a secure and immutable distributed database.",
  },
  {
    category: "College project",
    title: "Code340",
    tag: ["Vue.js", "Firebase Auth", "Cloud Firestore"],
    description:
      "A web platform prototype for an online marketplace for all kinds of code. An itemcode, voucher, giftcards. Register or login to post your product for sell or buy from other sellers.",
  },
];
</script>

<style lang="scss" scoped>
.ProjectContainer {
  margin: 0 auto;
  padding: var(--sectionSpace) 0;
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
