<template>
  <div class="AboutCard">
    <h2 class="AboutCard__header">About me</h2>
    <hr class="AboutCard__hr" />
    <div class="AboutCard__body">
      <img
        src="../../assets/profile.webp"
        alt=""
        class="AboutCard__profileImg"
      />
      <div class="AboutCard__profile">
        <ul class="AboutCard__info">
          <li class="AboutCard__infoItem">
            <label>NAME</label>
            <span>KANTINAN WHANGSUPHADILOK</span>
          </li>
          <li class="AboutCard__infoItem">
            <label>MAJOR</label>
            <span>Computer Science (Third-year)</span>
          </li>
          <li class="AboutCard__infoItem">
            <label>AT</label>
            <span>Mahidol University Internatonal College</span>
          </li>
        </ul>
        <p class="AboutCard__text">
          I’d like to go by the name ‘feiwhang’. Fei is my nickname and whang
          come from my lastname which in Thai means hope.
        </p>
        <p class="AboutCard__text">
          I’m a passionate and enthusiast front-end developer. I am excited to
          use my creativity to deliver a delightful experience to the user.
        </p>
      </div>
    </div>
    <p class="AboutCard__text">
      I develop websites with HTML, CSS and JavaScript. I also use frameworks
      like Vue.js and React.js in order to get the job done faster. I develop
      mobile applications with a cross-platform kit like Flutter. I design
      prototypes on figma to create the best looking UI.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.AboutCard {
  display: flex;
  flex-direction: column;
  max-width: 680px;
  &__header {
    font-size: var(--fontM);
  }
  &__hr {
    height: 2px;
    background-color: #ece4ff;
    border: none;
    border-radius: 4px;
  }
  &__body {
    display: flex;
    align-items: center;
  }
  &__profileImg {
    width: 128px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    list-style: none;
    li {
      float: left;
      margin-bottom: 12px;
    }
    label {
      width: 69px;
      float: left;
      text-align: left;
      font-weight: 600;
    }
    span {
      float: left;
      text-align: left;
      position: relative;
    }
  }
}
</style>
