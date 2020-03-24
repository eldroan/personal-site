<template>
  <b-navbar type="is-dark shadow">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img alt="Vue logo" src="../assets/leandro.png" style="logo"/>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="https://github.com/eldroan">
        <b-button type="is-light" rounded icon-right="github">Github @eldroan</b-button>
      </b-navbar-item>
      <b-navbar-item href="https://www.linkedin.com/in/lemarillo/">
        <b-button type="is-light" rounded icon-right="linkedin">LinkedIn @lemarillo</b-button>
      </b-navbar-item>
      <b-navbar-item href="https://www.instagram.com/eldroan/">
        <b-button type="is-light" rounded icon-right="instagram">Instagram @eldroan</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.less-margin {
  margin-right: -20;
}
.logo{
  align-self: start;
  justify-content: flex-start;
}
</style>
