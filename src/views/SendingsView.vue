<template>
  <HeaderChristmas minimal />
  <ContainerCenter style="gap: 1.3rem">
    <h1 style="margin: 0; font-size: 3.5rem; font-weight: initial">
      Мои отправления
    </h1>
    <div
      class="cards-list flex-row"
      style="
        gap: 1rem;
        justify-content: start;
        overflow-x: auto;
        max-width: 80%;
      "
    >
      <BasicCard
        class="address-card"
        :class="isActiveCard(sending[0])"
        v-for="sending in sendings"
        :key="sending[0]"
        @click="chooseCard(sending)"
        style="width: 7em"
      >
        {{ getGiftType(sending) }}
      </BasicCard>
    </div>
    <div class="btn-choose flex-row" style="justify-content: space-around">
      <BasicCard class="pointer" :class="canControl" @click="goToConfirmation">
        Ввести трек-код
      </BasicCard>
    </div>
    <div class="btn-choose flex-row">
      <BasicCard class="pointer" :class="canControl" @click="revokeSending">
        Отказаться
      </BasicCard>
      <BasicCard class="pointer" @click="goToAddresses">Добавить</BasicCard>
    </div>
  </ContainerCenter>

  <ContainerCenter id="tutorial" class="modal" v-if="tutorial">
    <BasicCard
      style="position: relative; padding: 2.3rem 1rem; font-size: 2rem"
    >
      <h4
        class="pointer"
        @click="tutorial = false"
        style="
          margin: 0;
          position: absolute;
          top: 0.3em;
          right: 0.8em;
          color: black;
        "
      >
        X
      </h4>
      Здесь ты можешь просматривать выбранных адресатов. Если ты решишь
      обрадовать нескольких людей, нажми на кнопочку “добавить”. Если хочешь
      отказаться от какого-то адресата, выбери его, а затем кнопочку
      “отказаться”. Когда ты отправишь письмо/посылку, будь добр, нажми кнопку
      “отправлено” и предоставь нам трек-код отправления.
    </BasicCard>
  </ContainerCenter>

  <ContainerCenter id="activeCard" class="modal" v-if="openCard">
    <BasicCard
      class="address-full-card"
      style="
        position: relative;
        font-size: 2rem;
        padding: 2.3rem 1rem;
        aspect-ratio: 1/1;
      "
    >
      <h1
        class="pointer"
        @click="openCard = false"
        style="
          margin: 0;
          position: absolute;
          top: 0.3em;
          right: 0.8em;
          color: black;
        "
      >
        X
      </h1>
      <div class="card-details" style="overflow-y: scroll">
        <label for="name">1. ФИО:</label>
        <p>{{ activeCard[1] }}</p>
        <label for="hobbies">2. Какие у тебя увлечения и что нравится?</label>
        <p>{{ activeCard[2] }}</p>
        <label for="allergic">3. У тебя есть аллергии?</label>
        <p>{{ activeCard[3] }}</p>
        <label for="dont_want">4. Что точно НЕ хочешь видеть в подарке?</label>
        <p>{{ activeCard[4] === "" ? " - " : activeCard[4] }}</p>
        <label for="region">5. Адрес и номер:</label>
        <p>{{ activeCard[6] }}</p>
      </div>
    </BasicCard>
  </ContainerCenter>
</template>

<script>
import axios from "axios";
import HeaderChristmas from "@/components/HeaderChristmas.vue";
import ContainerCenter from "@/components/ContainerCenter.vue";
import BasicCard from "@/components/BasicCard.vue";

export default {
  name: "SendGiftView",
  components: { BasicCard, ContainerCenter, HeaderChristmas },
  data() {
    return {
      sendings: [],
      activeCard: null,
      tutorial: false,
      openCard: false,
    };
  },
  created() {
    this.fetchSendings();
  },
  methods: {
    fetchSendings() {
      axios
        .get("http://santa.beariy.space:8010/get-sendings", {
          params: {
            sender_id: this.$store.getters["user"][0],
          },
        })
        .then((response) => {
          console.log(response);
          this.$store.dispatch("setSendings", response.data.sendings);
          this.$store.dispatch(
            "setSendingsCards",
            response.data.sendings_cards
          );
          this.sendings = response.data.sendings_cards;
        });
    },
    addSending() {
      const sending = {
        sender_id: this.$store.getters["user"][0],
        receiver_id: this.activeCard[0],
        track_code: "",
      };
      axios
        .post(
          "http://santa.beariy.space:8010/add-sending",
          {},
          {
            params: {
              sender_id: sending.sender_id,
              receiver_id: sending.receiver_id,
            },
          }
        )
        .then(() => {
          this.$store.dispatch("putSending", sending);
        });
    },
    revokeSending() {
      axios
        .post(
          "http://santa.beariy.space:8010/revoke-sending",
          {},
          {
            params: {
              sender_id: this.$store.getters["user"][0],
              receiver_id: this.activeCard[0],
            },
          }
        )
        .then(() => {
          this.fetchSendings();
          this.activeCard = null;
        });
    },
    chooseCard(card) {
      this.activeCard = card;
      this.openCard = true;
    },
    isActiveCard(id) {
      if (this.activeCard && id === this.activeCard[0]) {
        return "active";
      }
    },
    getGiftType(gift) {
      return gift[5] === 0 ? "ПОСЫЛКА" : "ПИСЬМО";
    },
    goToAddresses() {
      this.$router.push({ path: "/send-gift" });
    },
    goToConfirmation() {
      this.$router.push({
        path: "/confirm-sending",
        query: {
          sender_id: this.$store.getters["user"][0],
          receiver_id: this.activeCard[0],
        },
      });
    },
  },
  computed: {
    canControl() {
      return this.activeCard ? "" : "inactive";
    },
  },
};
</script>

<style lang="scss" scoped>
.cards-list {
  padding: 0 3rem;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d17777;
    padding: 0 3rem;
    border-radius: 5px;
  }

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    margin: 1.5rem 0;
    background-color: #f5f5f500;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #13702d;
    border-radius: 5px;
  }
}

.address-card {
  display: grid;
  place-items: center;
  aspect-ratio: 1/1;
  width: 7em;
  font-size: 2em;
  padding: 0;

  &.active {
    background-color: #7b2121;
  }
}

.modal > div:not(.address-full-card) {
  width: 50%;
}

@media only screen and (max-width: 769px) {
  /* For mobile phones: */
  .container-center > div {
    width: 80%;
  }
}

@media only screen and (max-width: 450px) {
  .container-center {
    font-size: 0.4rem;
    height: 60%;

    div {
      font-size: 1rem !important;
      width: 90%;
    }
  }

  .btn-choose div {
    padding-left: initial;
    padding-right: initial;
  }
}

.address-full-card {
  padding: 0;
  max-height: 70%;
  text-align: start;

  label {
    color: black;
  }

  p {
    margin: 0.3em 0.5em;
    text-decoration: underline black;
    text-decoration-thickness: 2px;
  }

  div {
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #d17777;
      margin: 1.5rem 0;
      border-radius: 5px;
    }

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #f5f5f500;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #13702d;
      border-radius: 5px;
    }
  }
}

.btn-choose {
  gap: 1rem;
  font-size: 2em;
}
</style>
