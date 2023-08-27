<template>

  <Portal>
    <div :class="
    classNames($style.Modal,
    {
      [$style.opened]: isOpen.value,
      [$style.closing]: isClosing
      },
    [className,$style.theme])">
      <div :class="$style.overlay" @click.prevent="closeHandler">
        <div :class="$style.content" @click.stop>
          <slot/>
        </div>
      </div>
      <form @submit.prevent></form>
    </div>
  </Portal>
</template>

<script lang="ts" setup>
import {ref, useCssModule, watchEffect} from "vue"
import {Portal} from "@/shared/ui"
import {classNames} from "@/shared/lib";

const $style = useCssModule()

interface Props {
  className?: string,
  isOpen: {
    value: boolean
  }
}

const {className, isOpen} = withDefaults(defineProps<Props>(), {
  className: ""
})
const emits = defineEmits<{
  onClose: []
}>()
const isClosing = ref(false)
const timerRef = ref<ReturnType<typeof setTimeout>>();
const closeHandler = () => {
  isClosing.value = true
  timerRef.value = setTimeout(() => {
    emits('onClose')
    isClosing.value = false
    clearTimeout(timerRef.value);
  }, 300)
}
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeHandler()
  }
}
watchEffect(() => {
  if (isOpen.value) {
    window.addEventListener('keydown', onKeyDown)
  } else {
    window.removeEventListener('keydown', onKeyDown);
  }
})
</script>

<style lang="scss" module>
.Modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: var(--overlay-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  max-width: 60%;
  padding: 20px;
  border-radius: 12px;
  color: var(--primary-color);
  background-color: var(--bg-color);
  transition: 0.3s transform;
  transform: scale(0.5);
}

.opened {
  pointer-events: auto;
  opacity: 1;
  z-index: var(--modal-z-index);

  .content {
    transform: scale(1);
  }
}

.closing {
  .content {
    transform: scale(0.2);
  }
}

.theme {
  color: var(--primary-color);
  background-color: var(--overlay-color);
}

</style>