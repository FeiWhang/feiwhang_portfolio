<template>
  <div class="AboutBody">
    <AboutCard />
  </div>
</template>

<script setup>
import AboutCard from "@/components/About/AboutCard.vue";
</script>

<style lang="scss" scoped>
.AboutBody {
  min-height: 100vh;
  max-width: var(--layoutWidth);
  margin: 0 auto;
  padding: 0 var(--layoutPadding);
}
</style>
