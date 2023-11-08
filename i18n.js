import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr', // Langue de secours en cas de traduction manquante
    debug: process.env.NODE_ENV === 'development', // Activez les messages de débogage en mode développement

    // Chemin vers vos fichiers de traduction (ajustez-les en conséquence)
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Liste des langues prises en charge
    supportedLngs: ['fr', 'en'],

    // Les clés de traduction sont définies dans ces fichiers JSON
    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false, // Ne pas échapper les valeurs HTML
    },

    react: {
      wait: true, // Activez le chargement de la langue avant le rendu de votre composant
    },
  });

export default i18n;
