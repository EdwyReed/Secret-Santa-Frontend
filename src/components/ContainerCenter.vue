<template>
  <div class="container-center">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-center {
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

.modal {
  bottom: unset;
  width: 100vw !important;
  height: 100vh !important;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

@media only screen and (max-width: 430px) {
  /* For mobile phones: */
  .container-center:not(.modal) {
    top: 20%;
  }
}
</style>
