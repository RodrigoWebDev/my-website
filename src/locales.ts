const locales = {
  pt: {
    chooseYourLanguage: "Escolha seu idioma",
    frontEndDeveloper: "Desenvolvedor Frontend",
    country: "Brasil",
    company: "Empresa",
    phone: "Telefone",
    sendMessageWhatsApp: "Entre em contato por Whatsapp",
    model3Dby: "Modelo 3d criado por",
    iconsBy: "Ícones criados por",
    codeBy: "Código desenvolvido por",
    me: "mim",
  },
  en: {
    chooseYourLanguage: "Choose your language",
    frontEndDeveloper: "Frontend Developer",
    country: "Brazil",
    company: "Company",
    phone: "Phone",
    sendMessageWhatsApp: "Contact me by WhatsApp",
    model3Dby: "3D model by",
    iconsBy: "Icons by",
    codeBy: "Code by",
    me: "me",
  },
} as const;

export type TLocale = typeof locales;

export default locales;
