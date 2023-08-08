import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

import Footer from "./components/UI/Generic/Footer";
import MDXSerializers from "./components/UI/Generic/Typgraphy/MDXSerializers";

import Logo from "./public/assets/medal-solid.svg";
import {
  defaultMetaDescriptionTranslations,
  titleSuffixTranslations,
} from "./lib/static/translations";

const dynamicHead = () => {
  const { asPath, defaultLocale, locale: activeLocale } = useRouter();
  const { frontMatter } = useConfig();

  const url =
    process.env.NODE_ENV === "production"
      ? "https://standards.haithamali.uk"
      : "http://localhost:3000" +
        (defaultLocale === activeLocale ? asPath : `/${activeLocale}${asPath}`);

  return (
    <>
      <meta
        property="description"
        content={
          frontMatter.description ||
          defaultMetaDescriptionTranslations[activeLocale]
        }
      />
      <meta property="og:url" content={url} />
      <meta
        property="og:title"
        content={frontMatter.title || titleSuffixTranslations[activeLocale]}
      />
      <meta
        property="og:description"
        content={
          frontMatter.description ||
          defaultMetaDescriptionTranslations[activeLocale]
        }
      />
    </>
  );
};

const config: DocsThemeConfig = {
  components: MDXSerializers,
  logo: <Image src={Logo} alt="" width={42} height={42} />,
  search: {
    placeholder: () => {
      const { locale: activeLocale } = useRouter();
      const placeholderTranslations = { en: "Search...", ar: "يبحث..." };

      return placeholderTranslations[activeLocale];
    },
  },
  project: {
    link: "https://github.com/drivelead/servicestandards.git",
  },
  head: dynamicHead,
  chat: {
    link: "https://discord.com",
  },
  primaryHue: 160,
  // docsRepositoryBase: 'https://github.com/drivelead/servicestandards.git',
  footer: {
    component: () => {
      return <Footer />;
    },
  },
  feedback: {
    content: () => {
      const { locale: activeLocale } = useRouter();
      const labelTranslations = {
        en: "Question? Give us feedback →",
        ar: "سؤال؟ أرسل لنا ملاحظاتك ←",
      };
      return labelTranslations[activeLocale];
    },
  },
  editLink: {
    component: () => {
      const { locale: activeLocale } = useRouter();
      const labelTranslations = {
        en: "Edit this page",
        ar: "قم بتحرير هذه الصفحة",
      };
      return (
        <div>
          <a
            className="font-medium text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-150"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            {labelTranslations[activeLocale]}
          </a>
        </div>
      );
    },
  },
  gitTimestamp: ({ timestamp }) => {
    const { locale: activeLocale } = useRouter();

    const formattedDate = new Intl.DateTimeFormat(activeLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(timestamp);

    const labelTranslations = { en: "Last updated on", ar: "آخر تحديث في" };
    return (
      <div>
        <span>{labelTranslations[activeLocale]} </span>
        {formattedDate}
      </div>
    );
  },
  useNextSeoProps() {
    const { asPath, locale: activeLocale } = useRouter();

    if (asPath !== "/") {
      return {
        titleTemplate: `%s | ${titleSuffixTranslations[activeLocale]}`,
      };
    }
  },
  toc: {
    title: () => {
      const { locale: activeLocale } = useRouter();
      const labelTranslations = { en: "On this page", ar: "على هذه الصفحة" };
      return labelTranslations[activeLocale];
    },
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ar", text: "العربية", direction: "rtl" },
  ],
};

export default config;
