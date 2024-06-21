import ja from 'locales/ja';
import en from 'locales/en';
import { useRouter } from 'next/router';

const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === "ja" ? ja : en; 
  return {locale, t}
}

export default useLocale;