import { useLanguage } from './LanguageContext';
import { translations } from './translations';

type NestedKeyOf<T> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
    : `${K}`;
}[keyof T & (string | number)];

type TranslationKey = NestedKeyOf<typeof translations.de>;

export function useTranslations() {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value === undefined || value[k] === undefined) {
        console.warn(`Translation key not found: ${key} (${language})`);
        return key;
      }
      value = value[k];
    }

    return value;
  };

  return { t };
} 