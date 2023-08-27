<template>
  <Teleport :to="currentElement">
    <slot/>
  </Teleport>
</template>

<script lang="ts" setup>
const {element} = defineProps<{
  element?: HTMLElement
}>()

const currentElement = element || document.body
</script>

