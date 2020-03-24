<template>
  <div id="app">
    <div id="background">
      <vue-particles
        color="#fafafa"
        particleSize=3
        moveSpeed=1
        :lineLinked="false"
        particleOpacity="0.1"
        particlesNumber="240"
        :hoverEffect="false"
        class="particles"
      ></vue-particles>
    </div>
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: #363636;
}
#background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.particles {
  height: 50rem;
}
</style>
