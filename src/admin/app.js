import logo from "./extensions/logo.png";

const config = {
  locales: ['ar'],
  auth: {
    logo,
  },
  // Replace the favicon
  head: {
    favicon: logo,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Riyadh Holding",
      "app.components.LeftMenu.navbrand.workplace": "Landing Page",
      "Auth.form.welcome.title": "Welcome!",
      "Auth.form.welcome.subtitle": "Log in to admin dashboard",
      "Settings.profile.form.section.experience.interfaceLanguageHelp": "Preference changes will apply only to you.",
      // "Settings.application.link-pricing": " ",
      // "Settings.application.link-upgrade": " ",
      "Auth.form.register.subtitle": "Credentials are only used to authenticate in admin panel",
      "Auth.form.register.news.label": "Keep me updated about new features"

    },
    tutorials: false,
    notifications: {
      releases: false,
    }
    
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
