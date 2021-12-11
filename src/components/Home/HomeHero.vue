<template>
  <div class="HomeHero" :class="'HomeHero--' + screen.type.value">
    <div class="HomeHero__left" :class="'HomeHero__left--' + screen.type.value">
      <HeroImg v-if="['xs', 'sm'].includes(screen.type.value)" />
      <h1
        class="HomeHero__title"
        :class="'HomeHero__title--' + screen.type.value"
      >
        Design, <br v-if="!['xs', 'sm'].includes(screen.type.value)" />Develop &
        <br />Deliver great experience
      </h1>
      <p
        class="HomeHero__subtitle"
        :class="'HomeHero__subtitle--' + screen.type.value"
      >
        {{ "Computer Science student at MUIC" }}
        {{ screen.width.value >= 600 ? " based in Bangkok" : "" }}
      </p>
      <div class="HomeHero__ctaContainer">
        <LinkGo
          to="/portfolio"
          title="My projects"
          bgColor="var(--purple)"
          hoverColor="var(--lightPurple)"
          padding="var(--pillPaddingS)"
          elemColor="var(--textColorLight)"
          fontSize="var(--fontXS)"
          class="HomeHero__cta"
        />
        <LinkGo
          to="/contact"
          title="Contact me"
          bgColor="transparent"
          hoverColor="transparent"
          padding="var(--pillPaddingS)"
          elemColor="var(--textColor)"
          fontSize="var(--fontXS)"
          class="HomeHero__cta"
        />
      </div>
    </div>
    <HeroImg v-if="['md', 'lg', 'xl'].includes(screen.type.value)" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import LinkGo from "@/components/Shared/LinkGo.vue";
import HeroImg from "@/components/Home/HeroImg.vue";

const screen = inject("screen");
</script>

<style lang="scss" scoped>
.HomeHero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  color: var(--textColor);
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
  &__title {
    animation: fromBelow 0.75s ease-in-out 0.1s forwards;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    opacity: 0;
    font-size: 64px;
    font-weight: 600;
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
    animation: fromBelow 1s ease-in-out forwards;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    opacity: 0;
    font-size: var(--fontS);
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
  &__ctaContainer {
    display: flex;
    column-gap: 8px;
  }
  &__cta {
    animation: fromBelow 1.15s ease-in-out forwards;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    opacity: 0;
  }

  // animation
  @keyframes fromBelow {
    0% {
      opacity: 0;
      transform: translate3d(0, 15vh, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>
