<template>
  <div class="containter-center">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.containter-center {
  position: absolute;
  width: 100%;
  height: 70%;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 3.3rem;
}

@media only screen and (max-width: 430px) {
  /* For mobile phones: */
  .container-center {
    top: 20%;
  }
}
</style>
