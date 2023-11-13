import TranslationContext from "@/contexts/TranslationContext";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "@/utils/languageSwitcher";
import Link from "next/link";

const Header = () => {
  const [translationContext, error] = useTranslation();
  if (error) {
    // Handle the error appropriately
    console.error("Translation context error:", error.message);
    return <div>Error loading translations</div>;
  }
  const { t, locale } = translationContext;

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">
        {/* Replace with your logo */}
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">{t("services_title")}</Link>
          </li>
          <li>
            <Link href="/about">{t("about_title")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("contact_title")}</Link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
