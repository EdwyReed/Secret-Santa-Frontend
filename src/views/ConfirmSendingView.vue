<template>
  <HeaderChristmas minimal />
  <ContainerCenter>
    <BasicCard class="flex-row" style="gap: 1rem">
      <input type="text" v-model="track_code" />
      <span>
        Введи в этом поле трек-номер для отслеживания отправления. Спасибо тебе
        за участие!❤️🍐
      </span>
    </BasicCard>
    <BasicCard class="pointer" @click="saveTrackCode">Сохранить</BasicCard>
  </ContainerCenter>
</template>

<script>
import ContainerCenter from "@/components/ContainerCenter.vue";
import HeaderChristmas from "@/components/HeaderChristmas.vue";
import BasicCard from "@/components/BasicCard.vue";

import axios from "axios";

export default {
  name: "SignInView",
  data() {
    return {
      sender_id: this.$route.query.sender_id,
      receiver_id: this.$route.query.receiver_id,
      track_code: "",
    };
  },
  components: {
    ContainerCenter,
    HeaderChristmas,
    BasicCard,
  },
  methods: {
    saveTrackCode() {
      axios
        .post(
          "http://santa.beariy.space:8005/confirm-sending",
          {},
          {
            params: {
              sender_id: this.sender_id,
              receiver_id: this.receiver_id,
              track_code: this.track_code,
            },
          }
        )
        .then(() => {
          this.$router.push({ name: "my-sendings" });
        });
    },
  },
};
</script>

<style lang="scss">
.card-christmas {
  padding: 1rem;
  max-width: 80%;
  font-size: 2.5rem;
  width: 20em;

  input {
    background-color: #7b2121;
    border-radius: 30px;
    border: none;
    font-size: inherit;
    width: 100%;
    padding: 2px 8px;
    color: white;
    text-align: center;
  }
}

@media only screen and (max-width: 769px) {
  .card-christmas {
    flex-direction: column !important;
    padding: 1rem;
    max-width: 80%;
    width: 25rem;
  }
}

@media only screen and (max-width: 450px) {
  .card-christmas {
    font-size: 2rem;
  }
}
</style>
