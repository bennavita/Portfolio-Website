import { ui, defaultLang, pathTranslation } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) {
        return lang as keyof typeof ui;
    }
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

type TranslationMap = {
  [lang in 'en' | 'fr' | 'it']: {
      [key: string]: string;
  };
};

const translationMap: TranslationMap = {
  'fr': { 'parcours': 'about', 'travail': 'work' },
  'en': { 'about': 'parcours', 'work': 'travail' },
  'it': { /* Vos traductions pour l'italien ici */ }
};

export function translatePath(segment: string, fromLang: 'en' | 'fr' | 'it', toLang: 'en' | 'fr' | 'it'): string {
  const langMap = translationMap[fromLang];
  return langMap[segment] || segment;
}

export function getWordForLanguage(lang: 'en' | 'fr' | 'it'): string {
    const languageMap: { [key in 'en' | 'fr' | 'it']: string } = {
        'en': 'work',
        'fr': 'travail',
        'it': 'lavoro'
    };

    return languageMap[lang] || 'Unknown';
}
