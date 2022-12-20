<template>
  <img v-if="minimal" class="header back" src="../assets/milkless-header.png" />
  <BasicCard
    class="home-btn pointer"
    v-if="minimal"
    @click="this.$router.push({ name: 'choose-role' })"
  >
    Домой
  </BasicCard>
  <img v-else class="header back" src="../assets/milk-header.png" />
  <img class="header left" src="../assets/header-left.png" alt="" />
  <img class="header right" src="../assets/header-right.png" alt="" />
</template>

<script>
import BasicCard from "@/components/BasicCard.vue";

export default {
  name: "HeaderChristmas",
  components: { BasicCard },
  props: {
    minimal: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.home-btn {
  position: fixed;
  top: 5%;
  left: 10%;
  z-index: 10;
  padding: 0.5rem 1rem !important;
  width: fit-content !important;
  font-size: 1.5rem;
}

.header {
  position: fixed;
  width: 40vw;
  top: 0;

  &.back {
    left: 0;
    width: 100vw;
    max-height: 25vw;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}

@media only screen and (max-width: 430px) {
  /* For mobile phones: */
  .header {
    width: 50vw;

    &.back {
      max-height: 40vw;
    }
  }
}
</style>
