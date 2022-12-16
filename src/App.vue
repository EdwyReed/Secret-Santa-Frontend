<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Mountains of Christmas", sans-serif;
  src: url(./assets/fonts/MountainsofChristmasC-Regular_C.ttf);
}

body {
  background-color: #a52626;
  background-image: url(./assets/snow03.gif);
  background-position: center;
  background-size: contain;
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#app {
  font-family: "Mountains of Christmas", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.pointer {
  cursor: pointer;
}
</style>
