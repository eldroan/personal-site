<template>
  <div class="main">
    <link
      rel="stylesheet"
      href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    />
    <Header />
    <div class="columns container">
      <div class="column column-left">
        <div class="image-container">
          <div class="background" visible="is-hidden-mobile">
            <img alt="My profile picture" src="../assets/profile.jpg" class="image" />
          </div>
        </div>
      </div>
      <div class="column column-right">
        <h1>Leandro Nicolás Amarillo</h1>
        <h2>Full-Stack developer</h2>
        <br />
        <div class="rows button-container">
          <div class="row">
            <b-button
              type="is-light"
              class="button-social"
              icon-right="github"
              @click="redirectToSite('https://github.com/eldroan')"
            >Github @eldroan</b-button>
          </div>
          <div class="row">
            <b-button
              type="is-info"
              class="button-social center"
              icon-right="linkedin"
              @click="redirectToSite('https://www.linkedin.com/in/lemarillo/')"
            >LinkedIn @lemarillo</b-button>
          </div>
          <div class="row">
            <!-- <b-button
              type="is-info"
              class="button-social last"
              icon-right="linkedin"
              @click="redirectToSite('https://www.linkedin.com/in/lemarillo/')"
            >LinkedIn @lemarillo</b-button> -->
            leandroamarillo@outlook.com
              <b-icon
                icon="email"
                size="is-small"
                type="is-light">
            </b-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Main",
  props: {},
  components: {
    Header
  },
  methods: {
    redirectToSite(url) {
      window.location.href = url;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #363636;
}
.container {
  margin: 0 auto;
  margin-top: -1rem;
  width: 80%;
  justify-content: center;
}
.column-left {
  align-self: center;
}
.column-right {
  color: #fafafa;
  align-self: center;
  justify-content: center;
}
h1 {
  margin-top: -1em;
  font-weight: bold;
  font-size: xx-large;
}
h2 {
  font-size: large;
}
.image-container .image {
  clip-path: circle(46% at 50% 50%);
  animation-name: radius-animation;
  animation-duration: 2.2s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.image-container {
  background-color: transparent;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.image-container .background {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  box-shadow: 0 0 2.5rem 0 rgba(255, 255, 255, 0.1);
}

.button-social {
  width: 15em;
}
.center {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.last {
  margin-bottom: 1rem;
}
.button-container {
  margin-top: -1rem;
}
@keyframes radius-animation {
  from {
    clip-path: circle(46% at 50% 50%);
  }
  to {
    clip-path: circle(50% at 50% 50%);
  }
}
</style>
