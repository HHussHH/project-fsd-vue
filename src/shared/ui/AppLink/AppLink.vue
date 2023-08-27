<template>
  <RouterLink :class="classNames($style.AppLink,{},[className,$style[theme]])" :to="to">
    <slot/>
  </RouterLink>
</template>

<script lang="ts" setup>

import {RouterLinkProps} from "vue-router";
import {classNames} from "@/shared/lib";

enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface Props extends RouterLinkProps {
  className?: string,
  theme?: AppLinkTheme
}

const {theme, className, to} = withDefaults(defineProps<Props>(), {
  theme: AppLinkTheme.SECONDARY,
  className: ""
});

</script>

<style lang="scss" module>
.AppLink {
  text-decoration: none;
  font-size: var(--font-size-m);
}

.primary {
  color: var(--inverted-primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}

</style>