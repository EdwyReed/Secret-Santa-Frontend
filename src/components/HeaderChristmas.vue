<template>
  <img v-if="minimal" class="header" src="../assets/milkless-header.png" />
  <img v-else class="header" src="../assets/milk-header.png" />
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
