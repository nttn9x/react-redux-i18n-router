const APP_ID: string = "HELLO";

export const BROWSER_STORAGE_LANGUAGE: string = `${APP_ID}_lng`;

export enum LANGUAGES {
  Vietnamese = "vi",
  English = "en",
}

export enum STORAGE {
  AUTH = "nttn9x",
}

export enum HTTP_CODE {
  ERROR = 404,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}
