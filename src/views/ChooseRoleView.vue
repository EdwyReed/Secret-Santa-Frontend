<template>
  <HeaderChristmas />
  <ContainerCenter class="choose-role">
    <BasicCard class="rounded-max pointer" @click="passSurvey">
      Хочу написать анкету
    </BasicCard>
    <BasicCard class="rounded-max pointer inactive" @click="sendGift">
      Хочу получить адрес
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
  mounted() {},
  methods: {
    passSurvey() {
      this.$router.push({ path: "/pass-survey" });
    },
    sendGift() {
      this.$router.push({ name: "send-gift" });
    },
  },
};
</script>

<style lang="scss">
.choose-role {
  font-size: 3.5rem;
}

@media only screen and (max-width: 1040px) {
  /* For mobile phones: */
  .choose-role {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 738px) {
  /* For mobile phones: */
  .choose-role {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 430px) {
  /* For mobile phones: */
  .choose-role {
    font-size: 2rem;
  }
}
</style>
