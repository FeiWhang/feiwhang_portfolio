<template>
  <div id="loading" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <svg viewBox="0 0 64 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Logo">
        <g id="F">
          <path
            id="F1"
            d="M4 6V30"
            stroke="#8E6FE2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="F2"
            d="M10 6H23"
            stroke="#8E6FE2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="F3"
            d="M10 17H14.5H19"
            stroke="#8E6FE2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g id="W">
          <path
            id="W1"
            d="M32 6L35.5 18"
            stroke="#8E6FE2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="W2"
            d="M39 30L46 6"
            stroke="#8E6FE2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="W3"
            d="M46 6L49.5 18"
            stroke="#8E6FE2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="W4"
            d="M53 30L60 6"
            stroke="#8E6FE2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup></script>

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
    animation: zoomFadeAway 0.5s ease-in-out 2.1s forwards;
  }
}

// animation
$duration: 0.5s;
$delay: 0.25s;
#F1 {
  --len: 24;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  animation: dash $duration ease-in-out forwards;
  backface-visibility: hidden;
}
#F2 {
  --len: 13;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  animation: dash $duration ease-in-out calc($delay * 1) forwards;
  backface-visibility: hidden;
}
#F3 {
  --len: 9;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  animation: dash $duration ease-in-out calc($delay * 2) forwards;
  backface-visibility: hidden;
}
#W1 {
  --len: 12.5;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  animation: dash $duration ease-in-out calc($delay * 3) forwards;
  backface-visibility: hidden;
}
#W2 {
  --len: 25;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  animation: dash $duration ease-in-out calc($delay * 4) forwards;
  backface-visibility: hidden;
}
#W3 {
  --len: 12.5;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  animation: dash $duration ease-in-out calc($delay * 5) forwards;
  backface-visibility: hidden;
}
#W4 {
  --len: 25;
  stroke-dashoffset: var(--len);
  stroke-dasharray: var(--len);
  animation: dash $duration ease-in-out calc($delay * 6) forwards;
  backface-visibility: hidden;
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
