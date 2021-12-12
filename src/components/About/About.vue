<template>
  <div id="About">
    <AboutCard />
  </div>
</template>

<script setup>
import AboutCard from "@/components/About/AboutCard.vue";
</script>

<style lang="scss" scoped>
#About {
  min-height: 50vh;
  max-width: var(--layoutWidth);
  margin: 2rem auto;
  padding: 0 var(--layoutPadding);
}
</style>
