<template>
  <img v-if="minimal" class="header back" src="../assets/milkless-header.png" />
  <img v-else class="header back" src="../assets/milk-header.png" />
  <img class="header left" src="../assets/header-left.png" alt="" />
  <img class="header right" src="../assets/header-right.png" alt="" />
</template>

<script>
export default {
  name: "HeaderChristmas",
  props: {
    minimal: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 40vw;
  top: 0;

  &.back {
    left: 0;
    width: 100%;
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
