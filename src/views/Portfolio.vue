<template>
  <div id="Project">
    <ProjectBody />
  </div>
</template>
<script setup>
import ProjectBody from "@/components/Project/ProjectBody.vue";
</script>

<style lang="scss" scoped>
#Project {
  min-height: calc(var(--vh) * 100);
}
</style>
