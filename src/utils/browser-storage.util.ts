export const setItem = (key: string | null | undefined, data: any) => {
  if (!key) {
    return null;
  }

  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = (key: string | null | undefined) => {
  if (!key) {
    return null;
  }

  let data;
  try {
    const value: any = localStorage.getItem(key);

    data = JSON.parse(value);
  } catch (error) {
    console.error(error);
  }

  return data;
};
