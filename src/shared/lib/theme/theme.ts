import {ref, watch} from "vue";
import {getLocalStorageItem, LOCAL_STORAGE_THEME_KEY} from "@/shared/lib";

export enum ThemeVariants {
    LIGHT = "light",
    DARK = "dark",
}

const LSTheme = getLocalStorageItem(LOCAL_STORAGE_THEME_KEY.THEME);
export const theme = ref(LSTheme || ThemeVariants.LIGHT);

export const themeHandler = () => {
    theme.value =
        theme.value === ThemeVariants.DARK
            ? ThemeVariants.LIGHT
            : ThemeVariants.DARK;
    localStorage.setItem("theme", theme.value);
};


watch(theme, async (newTheme, oldTheme) => {
    document.body.classList.add(theme.value || oldTheme);
    document.body.classList.replace(oldTheme, newTheme);
});
