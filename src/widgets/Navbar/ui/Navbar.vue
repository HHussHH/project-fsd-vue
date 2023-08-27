<template>
  <div :class="$style.Navbar">
    <Button theme="clearInverted" @click="onToggleModal">
      {{ t('Open') }}
    </Button>
    <Modal :is-open="isAuth" @on-close="onToggleModal">
      {{ t('Lorem ipsum dolor sit amet, consectetur adipisicing elit.') }}
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import {Button} from "@/shared/ui";
import {Modal} from "@/shared/ui";
import {reactive} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n({
  inheritLocale: true
})
const isAuth = reactive({
  value: false
});

const onToggleModal = () => {
  isAuth.value = !isAuth.value
}
</script>

<style module>
.Navbar {
  width: 100%;
  height: var(--navbar-height);
  background: var(--inverted-bg-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
}

</style>

<i18n>
{
  "en": {
    "Open": "Open",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  "ru": {
    "Open": "Войти",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.": "ПХПХПХХП...я не буду все это переводить :)"
  }
}
</i18n>