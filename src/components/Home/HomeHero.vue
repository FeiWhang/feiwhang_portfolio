<template>
  <div class="HomeHero">
    <div class="HomeHero__left">
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
        Computer Science student at MUIC based in Bangkok
      </p>
      <LinkGo
        to="/contact"
        title="Contact Me"
        bgColor="var(--purple)"
        hoverColor="var(--lightPurple)"
        padding="var(--pillPaddingM)"
        elemColor="white"
        fontSize="var(--fontS)"
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
import { inject } from "vue";
import LinkGo from "@/components/Shared/LinkGo.vue";

const screen = inject("screen");
</script>

<style lang="scss" scoped>
.HomeHero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  padding-bottom: 128px;
  &__left {
    display: flex;
    flex-direction: column;
  }
  &__imgMobile {
    display: none;
    margin: 0 auto;
    margin-bottom: 32px;
    &--sm {
      display: block;
      width: 450px;
    }
    &--xs {
      display: block;
      width: 250px;
    }
  }
  &__greet {
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
    font-size: 64px;
    font-weight: 500;
    &--xl {
      font-size: 64px;
    }
    &--lg {
      font-size: 48px;
    }
    &--md {
      font-size: 40px;
    }
    &--sm {
      font-size: 48px;
    }
    &--xs {
      font-size: 28px;
    }
  }
  &__subtitle {
    font-size: 20px;
    margin-bottom: 32px;
    &--md {
      font-size: 18px;
    }
    &--sm {
      font-size: 18px;
    }
    &--xs {
      font-size: 18px;
    }
  }
  &__img {
    &--xl {
      width: 800px;
    }
    &--lg {
      width: 666px;
    }
    &--md {
      width: 475px;
    }
    &--sm {
      display: none;
    }
    &--xs {
      display: none;
    }
  }
}
</style>
