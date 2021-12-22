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
          :id="'ProjectItem_' + index"
          :key="index"
        >
          <img
            :src="project.imgSrc"
            alt=""
            class="ProjectItem__image"
            v-if="index % 2 != 0"
          />
          <div class="ProjectItem__content" id="ProjectItemContent">
            <p class="ProjectItem__category">{{ project.category }}</p>
            <h2 class="ProjectItem__title">{{ project.title }}</h2>
            <p class="ProjectItem__description">{{ project.description }}</p>
            <p class="ProjectItem__tag">{{ project.tag.join(" ") }}</p>
          </div>
          <img
            :src="project.imgSrc"
            alt=""
            class="ProjectItem__image"
            v-if="index % 2 == 0"
          />
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
    description:
      "A visualisation website for blockchain. You can see the building block of the blockchain and how are all the blocks chained together to create a secure and immutable distributed database.",
    tag: ["HTML", "CSS", "Vue.js"],
    // imgSrc: require("@/assets/project_0.png"),
  },
  {
    category: "College project",
    title: "Code340",
    description:
      "A web platform prototype for an online marketplace for all kinds of code. An itemcode, voucher, giftcards. Register or login to post your product for sell or buy from other sellers.",
    tag: ["HTML", "CSS", "Vue.js", "FirebaseAuth", "Firestore"],
    imgSrc: require("@/assets/project_1.png"),
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
  &__body {
    display: flex;
    flex-direction: column;
    margin: var(--subsectionSpace) 0;
    row-gap: calc(var(--subsectionSpace) * 1.69);
  }
}
.ProjectItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    z-index: 5;
  }
  &__image {
    z-index: 1;
    width: 650px;
    border-radius: 8px;
    filter: saturate(0.088) opacity(0.188)
      drop-shadow(0 0 4px var(--shadowColor));
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transition: all 0.345s ease-in-out;
    &:hover {
      animation: moveLeft 0.69s ease-in-out;
      z-index: 6;
      filter: saturate(1) opacity(1) drop-shadow(0 0 4px var(--shadowColor));
    }
  }
  &__category {
    font-size: var(--fontXXXS);
    color: var(--activeTextColor);
    margin-bottom: 4px;
  }
  &__title {
    font-size: var(--fontM);
    font-family: "Lexend Deca";
    font-weight: 600;
  }
  &__description {
    font-size: var(--fontXS);
    color: var(--bodyTextColor);
    margin: var(--componentSpace) 0;
    padding: var(--componentSpace);
    width: 500px;
    background-color: var(--secondBgColor);
    border-radius: 8px;
  }
  &__tag {
    font-size: var(--fontXXS);
    word-spacing: 16px;
  }
}

#ProjectItem_1 {
  #ProjectItemContent {
    align-items: flex-end;
    text-align: right;
    margin-left: -156px;
  }
}

// animations
@keyframes moveLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(-32px, 0, 0) rotateY(10deg) rotateZ(-1deg);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
