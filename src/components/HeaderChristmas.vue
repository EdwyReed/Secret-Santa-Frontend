<template>
  <!-- <img v-if="minimal" class="header" src="../assets/milkless-header.png" /> -->
  <!-- <img v-else class="header" src="../assets/milk-header.png" /> -->
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
  position: absolute;
  width: 40vw;
  top: 0;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}
</style>
