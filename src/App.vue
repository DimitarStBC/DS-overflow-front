<template>
  <div id="app">
    <div class="controlSearch">
      <b-input-group class="controlSearchWidth" prepend="Search">
        <b-form-input></b-form-input>
      </b-input-group>
    </div>
    <div class="d-flex controlMain flex-row justify-content-around">
      <AccountInfo class="controlWindow" />
      <router-view />
      <Articles class="controlWindow" />
    </div>
  </div>
</template>

<script>
import AccountInfo from "./components/AccountInfo";
import Articles from "./components/Articles";

export default {
  name: "App",
  components: {
    AccountInfo,
    Articles,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
</style>

<style scoped>
.controlSearch {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #2c3e50;
  position: fixed;
  top: 0;

  padding: 20px 150px;
}
.controlSearch .controlSearchWidth {
  width: 300px;
}
.controlMain {
  margin-top: 150px;
}
.controlWindow {
  width: 300px;
}
</style>