<template>
  <Button theme="clear" @click="themeHandler">
    <component :is="currentComponent"></component>
  </Button>
</template>

<script lang="ts" setup>
import {computed, onMounted} from "vue";
import {theme, themeHandler, ThemeVariants} from "@/shared/lib";
import {Button} from "@/shared/ui";
import DarkIcon from "@/shared/assets/icons/moon.svg?component";
import LightIcon from "@/shared/assets/icons/sun.svg?component";

const currentComponent = computed(() => {
  switch (theme.value) {
    case ThemeVariants.DARK: {
      return DarkIcon
    }
    case ThemeVariants.LIGHT: {
      return LightIcon
    }
  }
})

onMounted(() => {
  document.body.classList.add(theme.value);
})

</script>

<style lang="scss" scoped></style>
