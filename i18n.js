// i18n.js
const NextI18Next = require("next-i18next").default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fr", "de"],
});

module.exports = NextI18NextInstance;

module.exports = {
  appWithTranslation,
  useTranslation,
  withTranslation,
  i18n,
};
