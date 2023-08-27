<template>
  <div :class="classNames($style.Sidebar,{[$style.collapsed]:collapsed},[className])">
    <Button :class-name="$style.btn" size="size_l" theme="backgroundInverted" type="button" @click="onToggle">
      {{ collapsed ? ">" : "<" }}
    </Button>
    <div :class="$style.links">
      <AppLink :class-name="$style.link" to="/">
        <span :class="$style.icon">
          <MainPageIcon/>
        </span>
        {{ collapsed === true ? '' : t('Main') }}
      </AppLink>
      <AppLink :class-name="$style.link" to="/about">
           <span :class="$style.icon">
            <AboutPageIcon/>
           </span>
        {{ collapsed === true ? '' : t('About') }}
      </AppLink>
    </div>
    <div :class="classNames($style.switchers,{[$style.collapsed]:collapsed},[])">
      <ThemeSwitcher/>

      <LanguageSwitcher :options="[{
      label:'RU',
      value:'ru'
    },{
      label:'EN',
      value:'en'
    }]"/>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import {LanguageSwitcher, ThemeSwitcher} from "@/features/ui";
import {classNames} from '@/shared/lib'
import {Button, AppLink} from "@/shared/ui/";
import MainPageIcon from "@/shared/assets/icons/home-icon.svg"
import AboutPageIcon from "@/shared/assets/icons/info-icon.svg"


const {t} = useI18n()
withDefaults(defineProps<{
  className?: string
}>(), {
  className: ""
})
const collapsed = ref(false);
const onToggle = () => {
  collapsed.value = !collapsed.value
}

</script>

<i18n>
{
  "en": {
    "Main": "Main",
    "About": "About"
  },
  "ru": {
    "Main": "Главная",
    "About": "О сайте"
  }
}
</i18n>

<style lang="scss" module>
.Sidebar {
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width);
  background: var(--inverted-bg-color);
  position: relative;
  transition: width 0.3s;
}

.links {

  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 30px;
}

.link {
  color: var(--inverted-primary-color);
  max-width: max-content;
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.icon {
  fill: var(--inverted-primary-color);
}

.btn {
  position: absolute;
  left: 100%;
  top: 91%;
}

.switchers {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
}

.collapsed {
  width: var(--sidebar-width-collapsed);

  .switchers {
    flex-direction: column;
  }
}
</style>