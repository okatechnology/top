import { locales } from 'src/types/utilTypes.d';

export const intoTypedLocale = (locale: string | undefined) =>
  locale != undefined && (locales as readonly string[]).includes(locale)
    ? (locale as LocaleName)
    : 'en';
