<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  #app {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .timeBar {
    position: absolute;
    width: 400px;
    height: 20px;
    left: 0px;
    top: 0px;

    background: linear-gradient(90deg, #ff8001 0%, #ffcc0d 100%);
    border-radius: 0px 100px 100px 0px;
  }

  .borderBoxDashed {
    background: #ffffff;
    border: 1px dashed #a4a4a4;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
  }

  .boxSucces {
    background: #ffffff;
    /* green-outline */

    border: 3px dashed #52e1c9;
    box-shadow: 0px 30px 30px rgba(0, 234, 194, 0.3);
    border-radius: 20px;
  }
</style>
