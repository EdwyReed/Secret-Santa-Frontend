<template>
  <img class="footer left" src="../assets/footer-left.png" />
  <img class="footer right" src="../assets/footer-right.png" />
</template>

<script>
export default {
  name: "FooterChristmas",
};
</script>

<style lang="scss">
.footer {
  position: absolute;
  width: 30vw;
  bottom: 0;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}
</style>
