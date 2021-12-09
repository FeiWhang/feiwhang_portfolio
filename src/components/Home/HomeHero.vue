<template>
  <div
    class="HomeHero"
    :class="'HomeHero--' + screen.type.value"
    :style="heroStyle"
  >
    <div class="HomeHero__left" :class="'HomeHero__left--' + screen.type.value">
      <img
        src="@/assets/hero_mobile.svg"
        alt=""
        class="HomeHero__imgMobile"
        :class="'HomeHero__imgMobile--' + screen.type.value"
        draggable="false"
      />
      <h2
        class="HomeHero__greet"
        :class="'HomeHero__greet--' + screen.type.value"
      >
        Hi, I
      </h2>
      <h1
        class="HomeHero__title"
        :class="'HomeHero__title--' + screen.type.value"
      >
        Design, <br />Develop & <br />Deliver great experience
      </h1>
      <p
        class="HomeHero__subtitle"
        :class="'HomeHero__subtitle--' + screen.type.value"
      >
        {{ "Computer Science student at MUIC" }}
        {{ screen.width.value >= 600 ? " based in Bangkok" : "" }}
      </p>
      <LinkGo
        to="/contact"
        title="Contact Me"
        bgColor="var(--purple)"
        hoverColor="var(--lightPurple)"
        padding="var(--pillPaddingM)"
        elemColor="white"
        fontSize="var(--fontS)"
        class="HomeHero__cta"
      />
    </div>
    <img
      src="@/assets/hero.svg"
      alt=""
      class="HomeHero__img"
      :class="'HomeHero__img--' + screen.type.value"
      draggable="false"
    />
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
import LinkGo from "@/components/Shared/LinkGo.vue";

const screen = inject("screen");
const heroStyle = computed(() => {
  return {
    "--screenWidth":
      Math.min(Math.max(parseInt(screen.width.value), 0), 1620) + "px",
  };
});
</script>

<style lang="scss" scoped>
.HomeHero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  &__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    &--sm,
    &--xs {
      align-items: center;
    }
  }
  &__imgMobile {
    display: none;
    margin: 0 auto;
    margin-bottom: 32px;
    animation: heroImgFrame 0.88s ease-in-out forwards;
    &--sm {
      display: block;
      width: calc(var(--screenWidth) / 1.75);
    }
    &--xs {
      display: block;
      width: calc(var(--screenWidth) / 1.8);
    }
  }
  &__greet {
    animation: heroTextFrame 0.7s ease-in-out forwards;
    font-weight: 400;
    &--xl {
      font-size: 36px;
    }
    &--lg {
      font-size: 32px;
    }
    &--md {
      font-size: 24px;
    }
    &--sm {
      font-size: 20px;
    }
    &--xs {
      font-size: 22px;
    }
  }
  &__title {
    animation: heroTextFrame 0.8s ease-in-out 0.1s forwards;
    opacity: 0;
    font-size: 64px;
    font-weight: 500;
    &--xl {
      font-size: 64px;
    }
    &--lg {
      font-size: 56px;
    }
    &--md {
      font-size: 40px;
    }
    &--sm {
      font-size: 48px;
      text-align: center;
    }
    &--xs {
      font-size: 28px;
      text-align: center;
    }
  }
  &__subtitle {
    animation: heroTextFrame 1.05s ease-in-out forwards;
    opacity: 0;
    font-size: 20px;
    margin-bottom: 32px;
    &--md {
      font-size: 18px;
    }
    &--sm {
      font-size: 18px;
    }
    &--xs {
      font-size: 16px;
    }
  }
  &__cta {
    animation: heroTextFrame 1.15s ease-in-out forwards;
    opacity: 0;
  }
  &__img {
    animation: heroImgFrame 0.88s ease-in-out forwards;
    &--xl {
      width: 90%;
    }
    &--lg {
      width: calc(var(--screenWidth) / 1.38);
    }
    &--md {
      width: calc(var(--screenWidth) / 2);
    }
    &--sm {
      display: none;
    }
    &--xs {
      display: none;
    }
  }
  // animation
  @keyframes heroImgFrame {
    0% {
      opacity: 0;
      transform: translateX(20vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes heroTextFrame {
    0% {
      opacity: 0;
      transform: translateY(15vh);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
