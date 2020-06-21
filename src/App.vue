<template>
  <v-app id="app">
    <v-main>
      <v-container class="fill-height" fluid>
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
$background-home: #b9b9b9;

::-webkit-scrollbar {
  width: 0px;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $background-home;
  color: #2c3e50;
}
</style>
