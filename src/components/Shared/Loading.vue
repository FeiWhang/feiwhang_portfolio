<template>
  <div id="loading" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Logo">
        <g id="F">
          <path
            id="F1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37 18C37 22.4183 33.4183 26 29 26C24.5817 26 21 22.4183 21 18L21 51.9951C21.0027 47.5791 24.5834 44 29 44C33.4183 44 37 47.5817 37 52C37 56.4183 33.4183 60 29 60C24.5834 60 21.0027 56.4209 21 52.0049L21 81C21 85.4183 24.5817 89 29 89C33.4183 89 37 85.4183 37 81L37 52V18Z"
            fill="#8E6FE2"
          />
          <path
            id="F3"
            d="M57 52H29"
            stroke="#8E6FE2"
            stroke-width="16"
            stroke-linecap="round"
          />
          <path
            id="F2"
            d="M65 18L29 18"
            stroke="#8E6FE2"
            stroke-width="16"
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
$duration: 0.55s;

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
    animation: zoomFadeAway $duration ease-in-out 1.75s forwards;
    backface-visibility: hidden;
  }
}

// animation
#F {
  animation: zoomFadeIn $duration ease-in-out forwards;
  transform-origin: center;
  backface-visibility: hidden;
}
#F2 {
  --offset: 8.2px;
  transform: translate3d(0, 0, 0);
  animation: stickOut $duration ease-in-out $duration forwards;
  backface-visibility: hidden;
}
#F3 {
  --offset: 5px;
  transform: translate3d(0, 0, 0);
  animation: stickOut $duration ease-in-out calc($duration * 2) forwards;
  backface-visibility: hidden;
}
@keyframes stickOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  75% {
    transform: translate3d(calc(var(--offset) + 3px), 0, 0);
  }
  100% {
    transform: translate3d(var(--offset), 0, 0);
  }
}
@keyframes zoomFadeIn {
  from {
    opacity: 0;
    transform: scale(0.69) translateZ(0);
  }
  to {
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
    transform: scale(0.123) translateZ(0);
  }
}
</style>
