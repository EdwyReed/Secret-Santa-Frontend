<template>
  <HeaderChristmas />
  <ContainerCenter>
    <BasicCard class="rounded-max" style="font-size: 3.5rem">
      Хочу написать анкету
    </BasicCard>
    <BasicCard class="rounded-max" style="font-size: 3.5rem">
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
  methods: {},
};
</script>

<style lang="scss"></style>
