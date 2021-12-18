<template>
  <div id="loading" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Logo">
        <rect id="outer" width="96" height="96" rx="22" fill="#7253C6" />
        <g id="F">
          <path
            id="F1"
            d="M29 18L29 81"
            stroke="white"
            stroke-width="16"
            stroke-linecap="round"
          />
          <circle id="E1" cx="29" cy="19" r="8" fill="#7253C6" />
          <circle id="E2" cx="29" cy="52" r="8" fill="#7253C6" />
          <path
            id="F3"
            d="M62 52H34"
            stroke="white"
            stroke-width="16"
            stroke-linecap="round"
          />
          <path
            ref="path"
            id="F2"
            d="M73 19L37 19"
            stroke="white"
            stroke-width="16"
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue";

// const path = ref(null);
// onMounted(() => {
//   console.log(path.value.getTotalLength());
// });
</script>

<style lang="scss" scoped>
#loading {
  position: absolute;
  z-index: 1000;
  background-color: var(--bgColor);
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
  svg {
    margin: auto;
    width: min(25vw, 256px);
    animation: zoomFadeAway 0.5s ease-in-out 2.22s forwards;
    backface-visibility: hidden;
  }
}

// animation
$duration: 0.69s;
#outer {
  opacity: 0;
  animation: zoomFadeIn $duration ease-in-out forwards;
  transform-origin: center;
}
#F1 {
  --len: 63;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  animation: dash $duration ease-in-out forwards;
  backface-visibility: hidden;
}
#F2 {
  --len: 36;
  --offset: -8.2px;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  transform: translate3d(var(--offset), 0, 0);
  animation: dashMoveOut $duration ease-in-out $duration forwards;
  backface-visibility: hidden;
}
#F3 {
  --len: 28;
  --offset: -5px;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  transform: translate3d(var(--offset), 0, 0);
  animation: dashMoveOut $duration ease-in-out calc($duration * 2) forwards;
  backface-visibility: hidden;
}
#E1 {
  opacity: 0;
  animation: show calc($duration / 2) ease-in-out 1s forwards;
}
#E2 {
  opacity: 0;
  animation: show calc($duration / 2) ease-in-out 1.88s forwards;
}

@keyframes dash {
  from {
    opacity: 0;
    stroke-dashoffset: var(--len);
  }
  to {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}

@keyframes dashMoveOut {
  0% {
    opacity: 0;
    stroke-dashoffset: var(--len);
    transform: translate3d(var(--offset), 0, 0);
  }
  50% {
    opacity: 1;
    stroke-dashoffset: 0;
    transform: translate3d(var(--offset), 0, 0);
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.88) translateZ(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
}

@keyframes zoomFadeAway {
  0% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
  30% {
    opacity: 0.88;
    transform: scale(1.069) translateZ(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.69) translateZ(0);
  }
}
</style>
