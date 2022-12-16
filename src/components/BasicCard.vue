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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: #a52626;
  border: 5px solid #13702d;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 0.5rem 3rem;

  &.p-vertical {
    padding: 1.5rem 1rem;
  }

  &.rounded-max {
    border-radius: 100px;
  }

  &.inactive {
    pointer-events: none;
    filter: grayscale(0.7);
    opacity: 0.5;
  }

  &.toggled {
    -webkit-box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.5);
  }
}
</style>
