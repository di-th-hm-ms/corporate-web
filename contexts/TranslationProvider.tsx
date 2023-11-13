// context/TranslationProvider.tsx
import React, { ReactNode, FC } from "react";
import { useRouter } from "next/router";
import TranslationContext from "./TranslationContext";
import en from "../locales/en.json";
import ja from "../locales/ja.json";
import { Locale } from "@/types/translationTypes";

// Define a type for the translations object
type TranslationsType = {
  [key in Locale]: { [key: string]: string };
};

const translations: TranslationsType = { en, ja };

interface TranslationProviderProps {
  children: ReactNode;
}

const TranslationProvider: FC<TranslationProviderProps> = ({ children }) => {
  const router = useRouter();

  // Ensure that currentLocale is always a valid Locale type
  const currentLocale: Locale = router.locale === "ja" ? "ja" : "en";

  console.log(router.locales);
  console.log(router.locale);
  console.log(currentLocale);
  // Function to get the translation
  const t = (key: string): string => {
    const translation = translations[currentLocale][key];
    return translation !== undefined ? translation : key;
  };

  return (
    <TranslationContext.Provider value={{ t, locale: currentLocale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
