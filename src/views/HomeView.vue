<template>
  <HeaderChristmas />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <FooterChristmas />
</template>

<script>
import HeaderChristmas from "@/components/HeaderChristmas.vue";
import FooterChristmas from "@/components/FooterChristmas.vue";

export default {
  name: "HomeView",
  components: {
    HeaderChristmas,
    FooterChristmas,
  },
};
</script>
