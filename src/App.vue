<template>
  <router-view />
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  mounted() {
    const user = this.$store.getters["user"];
    if (user !== undefined && user !== null) {
      axios
        .get("http://santa.beariy.space:8005/get-sendings", {
          params: {
            sender_id: user[0],
          },
        })
        .then((response) => {
          this.$store.dispatch("setSendings", response.data.sendings);
          this.$store.dispatch(
            "setSendingsCards",
            response.data.sendings_cards
          );
        });
    } else {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Mountains of Christmas", sans-serif;
  src: url(./assets/fonts/MountainsofChristmasC-Regular_C.ttf),
    url(./assets/fonts/MountainsofChristmasC-Regular_C.woff),
    url(./assets/fonts/MountainsofChristmasC-Regular_C.woff2);
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
  font-family: "Mountains of Christmas", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.pointer {
  cursor: pointer;
}

.flex-row {
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
}
</style>
