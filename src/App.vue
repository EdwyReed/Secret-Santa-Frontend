<template>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: #a52626;
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.footer {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
