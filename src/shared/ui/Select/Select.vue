<template>
  <div :class="$style.select" @click="listView = !listView">
    <span>{{ currentLabel }}</span>
    <div
        v-if="listView"
        :class="$style.options">
      <p
          v-for="{value,label} in options"
          :key="value"
          :class="$style.option"
          @click="$emit('selectOption',value,options)"
      >
        {{ label }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import {options} from "./selectType"

const {options, currentLabel} = defineProps<{
  options: options[],
  currentLabel: string
}>()

defineEmits<{
  selectOption: [value: string, options: options[]],
}>()
const listView = ref(false)
</script>

<style module>
.select {
  position: relative;
  min-width: 40px;
  text-transform: uppercase;
  min-height: 40px;
  width: max-content;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 5px;
  height: auto;
  border: 2px solid var(--bg-color);
  border-radius: 50px;
  cursor: pointer;
  color: var(--inverted-primary-color);
  font-weight: 600;
}

.option {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid #7c7575;
  padding: 5px;
  background: var(--inverted-bg-color);
}

.options {

  top: 0;
  position: absolute;
  display: flex;
  left: calc(100% + 10px);
  gap: 10px;
}

</style>