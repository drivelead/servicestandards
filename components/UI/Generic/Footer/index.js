import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

import Logo from "@/public/assets/medal-solid.svg";
import {
  defaultMetaDescriptionTranslations,
  titleSuffixTranslations,
} from "@/lib/static/translations";

const Footer = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;

  return (
    <footer className="footer w-full bg-gray-50 dark:bg-gray-800 py-10 px-4 2xl:px-24 mt-10">
      <div className="footer-content-container">
        <div className="footer-content">
          <div>
            <div className="flex items-center justify-start space-x-4 rtl:space-x-reverse">
              <div>
                <Image src={Logo} alt="" width={42} height={42} />
              </div>
              <h3 className="font-bold">
                {titleSuffixTranslations[activeLocale]}
              </h3>
            </div>

            <div className="mt-4">
              <p className="max-w-lg text-sm text-gray-600 dark:text-gray-300">
                {defaultMetaDescriptionTranslations[activeLocale]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
