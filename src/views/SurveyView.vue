<template>
  <HeaderChristmas minimal />
  <ContainerCenter style="gap: 2rem">
    <h1 style="margin: 0; font-size: 4rem; font-weight: initial">Анкета</h1>
    <span>
      Отправить анкету можно только заполнив все поля со звёздочкой.
    </span>
    <div class="survey">
      <BasicCard class="survey-content p-vertical">
        <label for="name">1. Как к тебе обращаться?*</label>
        <input type="text" id="name" v-model="survey.name" />
        <label for="hobbies">2. Какие у тебя увлечения и что нравится?*</label>
        <input type="text" id="hobbies" v-model="survey.hobbies" />
        <label for="allergic">3. У тебя есть аллергии?*</label>
        <input type="text" id="allergic" v-model="survey.allergic" />
        <label for="dont_want">4. Что точно НЕ хочешь видеть в подарке?</label>
        <input type="text" id="dont_want" v-model="survey.dont_want" />
        <label for="region">5. Введи свою область/край:*</label>
        <input type="text" id="region" v-model="region" />
        <label for="city">6. Введи свой город:*</label>
        <input type="text" id="city" v-model="city" />
        <label for="street">7. Введи свою улицу:*</label>
        <input type="text" id="street" v-model="street" />
        <label for="building">8. Введи свой дом:*</label>
        <input type="text" id="building" v-model="building" />
        <label for="appartment">9. Введи свою квартиру:*</label>
        <input type="text" id="appartment" v-model="appartment" />
        <label for="zipcode">10. Введи свой индекс:*</label>
        <input type="text" id="zipcode" v-model="zipcode" />
        <label for="phone">11. Введи свой номер телефона:</label>
        <input type="text" id="phone" v-model="phone" />
      </BasicCard>
      <div class="survey-ctrl">
        <BasicCard class="pointer" :class="isGift" @click="survey.type = 0"
          >Хочу посылку</BasicCard
        >
        <BasicCard class="pointer" :class="isLetter" @click="survey.type = 1"
          >Хочу письмо</BasicCard
        >
        <BasicCard v-if="submitting" class="pointer submit inactive">
          Идёт отправка...
        </BasicCard>
        <BasicCard
          v-else
          class="pointer submit"
          :class="canSubmit"
          @click="submitSurvey"
        >
          Отправить
        </BasicCard>
      </div>
    </div>
  </ContainerCenter>
</template>

<script>
import ContainerCenter from "@/components/ContainerCenter.vue";
import HeaderChristmas from "@/components/HeaderChristmas.vue";
import BasicCard from "@/components/BasicCard.vue";

import axios from "axios";

export default {
  data() {
    return {
      user: this.$store.getters["user"],
      survey: {
        name: "",
        hobbies: "",
        allergic: " - ",
        dont_want: " - ",
        type: 0,
        address: "",
      },
      region: "",
      city: "",
      street: "",
      building: "",
      appartment: "",
      zipcode: "",
      phone: " - ",
      submitting: false,
    };
  },
  components: { ContainerCenter, HeaderChristmas, BasicCard },
  computed: {
    canSubmit() {
      if (
        this.survey.name.length >= 1 &&
        this.survey.hobbies.length >= 1 &&
        this.survey.allergic.length >= 1 &&
        this.region.length > 0 &&
        this.city.length > 0 &&
        this.street.length > 0 &&
        this.building.length > 0 &&
        this.appartment.length > 0 &&
        this.zipcode.length > 0
      ) {
        return " ";
      } else {
        return "inactive";
      }
    },
    isLetter() {
      if (this.survey.type === 1) {
        return "toggled";
      } else {
        return "";
      }
    },
    isGift() {
      if (this.survey.type === 0) {
        return "toggled";
      } else {
        return "";
      }
    },
  },
  methods: {
    submitSurvey() {
      this.submitting = true;
      axios
        .post("http://santa.beariy.space:8005/save-survey", this.user, {
          params: {
            name: this.survey.name,
            hobbies: this.survey.hobbies,
            allergic: this.survey.allergic,
            dont_want: this.survey.dont_want,
            type: this.survey.type,
            address: `${this.region}, ${this.city}, ${this.street} ${this.building}, кв.${this.appartment}, индекс: ${this.zipcode}, номер телефона: ${this.phone}`,
          },
        })
        .then(() => {
          this.$router.push({ path: "/survey-success" });
        });
    },
  },
};
</script>

<style lang="scss">
.survey {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  font-size: 2rem;

  label {
    color: black;
  }

  input {
    all: unset;
    width: 100%;
    border-bottom: 1px solid black;
  }
}

.survey-content {
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;

  overflow-y: auto;
  max-height: 50vh;

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

.survey-ctrl {
  display: flex;
  flex-direction: column;
  max-width: 30%;
  gap: 1rem;

  div {
    padding: 0.5rem 2.5rem;
  }

  .submit {
    margin-top: auto;
  }
}

@media only screen and (max-width: 1040px) {
  /* For mobile phones: */
  .survey {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 738px) {
  /* For mobile phones: */
  .survey {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 430px) {
  /* For mobile phones: */
  .survey {
    font-size: 1rem;
    flex-direction: column;
  }

  .survey-content {
    max-height: 40vh;
  }

  .survey-ctrl {
    justify-content: center;
    flex-direction: row;
    align-items: center;
    max-height: 5rem;
    max-width: 100%;

    div {
      padding: 5px 15px;
      height: 100%;
      margin: 0 !important;
    }
  }
}
</style>
