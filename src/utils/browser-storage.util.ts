export const setItem = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = (key: string) => {
  let data;
  try {
    const value: any = localStorage.getItem(key);

    data = JSON.parse(value);
  } catch (error) {
    console.error(error);
  }

  return data;
};
