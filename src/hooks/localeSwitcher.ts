import { usePathname } from 'next/navigation';

export const useLocaleSwitcher = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const otherLocale = isEnglish ? 'uk' : 'en';
  const switchLocalePath = `/${otherLocale}${pathname.replace(/^\/(en|uk)/, '')}`;

  return { isEnglish, switchLocalePath, currentLocale: isEnglish ? 'en' : 'uk', otherLocale };
};
