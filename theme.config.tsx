import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Service Standards</span>,
  search: { placeholder: "Search..." },
  project: {
    link: 'https://github.com/drivelead/servicestandards.git',
   },
   chat: {
    link: 'https://discord.com',
   },
  // docsRepositoryBase: 'https://github.com/drivelead/servicestandards.git',
  footer: {
    text: "Service Standards",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ar", text: "العربية", direction: "rtl" },
  ],
};

export default config;
