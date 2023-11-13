export type Locale = "en" | "ja";
export interface TranslationContextProps {
  t: (key: string) => string;
  locale: string;
}
