<template>
  <div id="app">
    <NavDrawer></NavDrawer>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>


<script>
import NavDrawer from "@/components/NavDrawer.vue";

export default {
  components: {
    NavDrawer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>