<template>
  <footer class="footer">
    <div class="footer__inner container">
      <p class="footer__copy">© {{ year }} Maria — UX/UI Designer & Frontend Developer</p>
      <div class="footer__links">
        <a href="https://github.com" target="_blank" rel="noopener" class="footer__link">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer__link">LinkedIn</a>
        <a href="mailto:hello@example.com" class="footer__link">Email</a>
      </div>
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
  padding-block: $space-8;

  &__inner {
    @include flex-between;
    flex-wrap: wrap;
    gap: $space-4;
  }

  &__copy {
    font-size: $font-size-sm;
    color: $color-text-muted;
    margin: 0;
  }

  &__links {
    display: flex;
    gap: $space-6;
  }

  &__link {
    font-size: $font-size-sm;
    color: $color-text-muted;
    transition: color $transition-fast;

    &:hover { color: $color-primary; }
  }
}
</style>
