<template>
  <Select
      :currentLabel="$i18n.locale"
      :options="[{value:'en',label:'en'},{value:'ru',label:'ru'}]"
      @selectOption="selectOption"/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import {Select} from "@/shared/ui"
import {options} from "@/shared/ui/Select/selectType.ts"

const {locale} = useI18n({
  useScope: "global"
})
const selectedLang = ref(locale.value)
const selectOption = (value: string, options: options[]) => {
  const currentElem = options.find(el => el.value === value)?.value
  selectedLang.value = currentElem || "RU"
  locale.value = value
}

interface Props {
  options: {
    label: string,
    value: string
  }[]
}

defineProps<Props>()
</script>

<style lang="scss" module>
.select {
  width: 50px;
  border: none;
  background: none;
  color: var(--inverted-primary-color);
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }
}

.option {
  border-radius: 0;
  color: var(--primary-color)
}
</style>