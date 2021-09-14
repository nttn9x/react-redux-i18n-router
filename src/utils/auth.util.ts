import { STORAGE } from "app-constants/common.constant";

import { getItem, setItem } from "./browser-storage.util";

export const getUser = () => {
  try {
    return getItem(STORAGE.AUTH);
  } catch (error) {
    console.error(error);
  }
};

export const setUser = (user: any) => {
  try {
    return setItem(STORAGE.AUTH, user);
  } catch (error) {
    console.error(error);
  }
};
