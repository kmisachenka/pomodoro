import NextI18Next, { InitConfig } from 'next-i18next';
import path from 'path';

const config: InitConfig = {
  localePath: path.resolve('./public/static/locales'),
  strictMode: false,
  defaultLanguage: 'en',
  otherLanguages: ['ru'],
};

const i18next = new NextI18Next(config);

export default i18next;

export const i18n = i18next.i18n;
export const appWithTranslation = i18next.appWithTranslation;
export const useTranslation = i18next.useTranslation;
export const withTranslation = i18next.withTranslation;
export const Link = i18next.Link;
