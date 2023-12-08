export const languages = {
    en: 'English',
    fr: 'Français',
  };
  
  export const defaultLang = 'en';
  
  export const ui = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.travail': 'Work',
      'nav.travailPath': 'work',
      'nav.parcoursPath': 'about'
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'Parcours',
      'nav.travail': 'Mon Travail',
      'nav.travailPath': 'travail',
      'nav.parcoursPath': 'parcours'
    },
  } as const;

  export const pathTranslation = {
    'work': 'travail',
    'about': 'parcours',
    'travail': 'work',
    'parcours': 'travail',
  } as const;