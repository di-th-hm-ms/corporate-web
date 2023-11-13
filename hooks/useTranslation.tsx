import TranslationContext from "@/contexts/TranslationContext";
import { TranslationContextProps } from "@/types/translationTypes";
import { useContext } from "react";

export const useTranslation = ():
  | [TranslationContextProps, null]
  | [null, Error] => {
  try {
    const context = useContext(TranslationContext);

    if (!context) {
      throw new Error(
        "useTranslation must be used within a TranslationProvider"
      );
    }
    return [context, null];
  } catch (error) {
    return [null, error as Error];
  }
};
