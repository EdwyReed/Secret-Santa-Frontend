<template>
  <HeaderChristmas />
  <ContainerCenter>
    <BasicCard>
      <span style="font-size: 3rem">
        Вы успешно подали свою анкету на участие! <br />
        Теперь можно расслабиться и праздновать, Тайный Санта придёт к вам!
      </span>
    </BasicCard>
    <BasicCard
      class="rounded-max pointer"
      style="font-size: 3rem"
      @click="backToMain"
    >
      В начало
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
  name: "SignInView",
  components: {
    ContainerCenter,
    HeaderChristmas,
    FooterChristmas,
    BasicCard,
  },
  methods: {
    backToMain() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss">
.card-christmas {
  padding: 1rem;
  max-width: 55rem;
}
</style>
