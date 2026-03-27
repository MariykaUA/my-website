<template>
  <footer class="footer">
    <div class="footer__inner container">
      <p class="footer__copy">© {{ year }} Mariia — UX/UI Designer & Frontend Developer</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
  background: $color-bg-alt;
  border-top: 1px solid $color-border;
  padding: 18px;

  &__inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__copy {
    font-size: $font-size-sm;
    color: $color-text-muted;
    margin: 0;
  }
}
</style>
