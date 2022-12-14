<template>
  <HeaderChristmas />
  <ContainerCenter>
    <BasicCard>
      <span style="font-size: 3rem">
        Чтобы продолжить, мы должны знать, кто вы.<br />Пожалуйста, войдите
        через свой телеграм!
      </span>
      <telegram-login-temp
        mode="callback"
        telegram-login="beariy_santa_bot"
        @callback="onTelegramAuth"
      />
    </BasicCard>
  </ContainerCenter>
  <FooterChristmas />
</template>

<script>
import { telegramLoginTemp } from "vue3-telegram-login";

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
    telegramLoginTemp,
  },
  methods: {
    onTelegramAuth(thing) {
      console.log(thing);
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
