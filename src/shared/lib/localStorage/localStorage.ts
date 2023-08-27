export enum LOCAL_STORAGE_THEME_KEY {
  THEME = "theme",
}

export const setLocalStorageItem = (item: string, value: string) => {
  localStorage.setItem(item, value);
};

export const getLocalStorageItem = (item: string) => localStorage.getItem(item);
