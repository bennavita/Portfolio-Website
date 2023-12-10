import { ui, defaultLang } from './ui';

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

export function getWordForLanguage(lang: 'en' | 'fr' | 'it'): string {
    const languageMap: { [key in 'en' | 'fr' | 'it']: string } = {
        'en': 'work',
        'fr': 'travail',
        'it': 'lavoro'
    };

    return languageMap[lang] || 'Unknown';
}
