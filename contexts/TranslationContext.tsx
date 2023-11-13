// context/TranslationContext.tsx
import { TranslationContextProps } from "@/types/translationTypes";
import React from "react";

const TranslationContext = React.createContext<TranslationContextProps | null>(
  null
);

export default TranslationContext;
