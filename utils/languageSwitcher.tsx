import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select onChange={changeLanguage} defaultValue={router.locale}>
      {router.locales &&
        router.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
    </select>
  );
};

export default LanguageSwitcher;
