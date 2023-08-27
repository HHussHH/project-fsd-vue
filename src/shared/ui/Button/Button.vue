<template>
  <button
      :class="classNames($style.Button, mods, additional)"
      type="button"
      @click="clickHandler"
  >
    <slot/>
  </button>
</template>

<script lang="ts" setup>
import {useCssModule} from "vue";
import {classNames} from "@/shared/lib";
import {Props} from "./ButtonTypes";

const $style = useCssModule();

const {theme, size, square, className} = withDefaults(defineProps<Props>(), {
  theme: "outline",
  size: "size_m",
  square: false,
  className: "",
});

const emits = defineEmits<{
  click: [];
}>();
const mods = {
  [$style.square]: square,
};
const additional = [$style[theme], className, $style[size]];

const clickHandler = () => {
  emits("click");
};
</script>

<style lang="scss" module>
.Button {
  cursor: pointer;
  padding: 6px 15px;
  color: var(--primary-color);
}

.clear,
.clearInverted {
  padding: 0;
  border: none;
  background: none;
  outline: none;
}

.clearInverted {
  color: var(--inverted-primary-color);
}

.square {
  padding: 0;
}

.square.size_m {
  width: var(--font-line-m);
  height: var(--font-line-m);
}

.square.size_l {
  width: var(--font-line-l);
  height: var(--font-line-l);
}

.square.size_xl {
  width: var(--font-line-xl);
  height: var(--font-line-xl);
}

.size_m {
  font: var(--font-m);
}

.size_l {
  font: var(--font-l);
}

.size_xl {
  font: var(--font-xl);
}

.background {
  background-color: var(--bg-color);
  color: var(--primary-color);
  border: none;
}

.backgroundInverted {
  background-color: var(--inverted-bg-color);
  color: var(--inverted-primary-color);
  border: none;
}

.outline {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  background: none;
}
</style>
