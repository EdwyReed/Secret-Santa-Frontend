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

import axios from "axios";

export default {
  name: "SignInView",
  components: {
    ContainerCenter,
    HeaderChristmas,
    FooterChristmas,
    BasicCard,
    telegramLoginTemp,
  },
  mounted() {
    const user = this.$store.getters["user"];
    if (user != undefined) {
      this.$router.push({ name: "choose-role" });
    }
  },
  methods: {
    onTelegramAuth(user) {
      axios
        .post("http://127.0.0.1:8005/auth", {
          id: user.id,
          firstname: user.first_name,
          username: user.username,
        })
        .then((response) => {
          this.$store.dispatch("setUser", response.data.user);
          this.$router.push({ name: "choose-role" });
        });
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
