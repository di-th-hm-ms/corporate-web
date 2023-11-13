// pages/_app.tsx
import { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TranslationProvider from "@/contexts/TranslationProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TranslationProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </TranslationProvider>
    </>
  );
}

export default MyApp;
