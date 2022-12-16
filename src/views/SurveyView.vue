<template>
  <HeaderChristmas minimal />
  <ContainerCenter>
    Анкета
    <div class="survey">
      <BasicCard>
        <label for="name">1. Как к тебе обращаться?</label>
        <input type="text" id="name" v-model="survey.name" />
        <label for="hobbies">2. Какие у тебя увлечения и что нравится?</label>
        <input type="text" id="hobbies" v-model="survey.hobbies" />
        <label for="allergic">3. У тебя есть аллергии?</label>
        <input type="text" id="allergic" v-model="survey.allergic" />
        <label for="name">4. Что точно НЕ хочешь видеть в подарке?</label>
        <input type="text" id="dont_want" v-model="survey.dont_want" />
      </BasicCard>
      <div class="survey-ctrl">
        <BasicCard @click="survey.type = 0">Хочу посылку</BasicCard>
        <BasicCard @click="survey.type = 1">Хочу письмо</BasicCard>
        <BasicCard @click="submitSurvey" style="margin-top: auto"
          >Отправить</BasicCard
        >
      </div>
    </div>
  </ContainerCenter>
  <FooterChristmas />
</template>

<script>
import ContainerCenter from "@/components/ContainerCenter.vue";
import HeaderChristmas from "@/components/HeaderChristmas.vue";
import FooterChristmas from "@/components/FooterChristmas.vue";
import BasicCard from "@/components/BasicCard.vue";

export default {
  data() {
    return {
      survey: {
        name: "",
        hobbies: "",
        allergic: "",
        dont_want: "",
        type: 0,
      },
    };
  },
  components: { ContainerCenter, HeaderChristmas, FooterChristmas, BasicCard },
};
</script>

<style lang="scss" scoped>
.survey {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.survey-ctrl {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
