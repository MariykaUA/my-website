<template>
  <Teleport to="body">
    <div class="cursor" ref="cursorEl" />
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorEl = ref(null)

const mouse = { x: -300, y: -300 }
const pos = { x: -300, y: -300 }
let rafId = null

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function onEnter() { cursorEl.value?.classList.add('cursor--hover') }
function onLeave() { cursorEl.value?.classList.remove('cursor--hover') }

function attachListeners() {
  document.querySelectorAll('a, button, [role="button"], input, textarea, select, label').forEach(el => {
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
  })
}

const observer = new MutationObserver(attachListeners)

function loop() {
  pos.x += (mouse.x - pos.x) * 0.12
  pos.y += (mouse.y - pos.y) * 0.12

  if (cursorEl.value) {
    cursorEl.value.style.transform = `translate(${pos.x}px, ${pos.y}px)`
  }

  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  attachListeners()
  observer.observe(document.body, { childList: true, subtree: true })
  rafId = requestAnimationFrame(loop)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  observer.disconnect()
  cancelAnimationFrame(rafId)
})
</script>

<style lang="scss">
@media (pointer: fine) {
  * { cursor: none !important; }
}

.cursor {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  border-radius: 50%;
  background: $color-primary-light;
  box-shadow:
    0 0 8px  4px  rgba($color-primary-light, 0.8),
    0 0 22px 10px rgba($color-primary, 0.4),
    0 0 50px 22px rgba($color-primary, 0.15);
  transition: width 200ms ease, height 200ms ease, margin 200ms ease, box-shadow 200ms ease;
  will-change: transform;

  &--hover {
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    box-shadow:
      0 0 10px 5px  rgba($color-primary-light, 1),
      0 0 28px 14px rgba($color-primary, 0.55),
      0 0 60px 28px rgba($color-primary, 0.2);
  }
}
</style>
