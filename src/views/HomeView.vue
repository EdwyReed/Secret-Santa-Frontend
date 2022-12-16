<template>
  <HeaderChristmas />
  <ContainerCenter style="gap: 0">
    <div class="secret-santa-logo">
      <img src="../assets/secret.png" alt="Secret" />
      <img src="../assets/santa.png" alt="Santa" />
    </div>
    <BasicCard
      class="rounded-max pointer"
      @click="goAuth"
      style="font-size: 4.3rem"
    >
      Начать
    </BasicCard>
  </ContainerCenter>
  <FooterChristmas />
</template>

<script>
import ContainerCenter from "@/components/ContainerCenter.vue";
import HeaderChristmas from "@/components/HeaderChristmas.vue";
import FooterChristmas from "@/components/FooterChristmas.vue";
import BasicCard from "@/components/BasicCard.vue";

export default {
  name: "HomeView",
  components: {
    ContainerCenter,
    HeaderChristmas,
    FooterChristmas,
    BasicCard,
  },
  methods: {
    goAuth() {
      const user = this.$store.getters["user"];
      if (user === undefined || user === null) {
        this.$router.push({ name: "sign-in" });
      } else {
        this.$router.push({ name: "choose-role" });
      }
    },
  },
};
</script>

<style lang="scss">
.secret-santa-logo {
  > img {
    display: inline-block;
    max-width: 30vw;
  }
}
</style>
