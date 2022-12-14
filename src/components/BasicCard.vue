<template>
  <div class="card-christmas">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-christmas {
  background: #a52626;
  border: 5px solid #13702d;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5);
  border-radius: 30px;

  padding: 0.5rem 3rem;

  &.rounded-max {
    border-radius: 100px;
  }
}
</style>
