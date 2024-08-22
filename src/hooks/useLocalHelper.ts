import { usePathname } from 'next/navigation';

export const useLocalizedPath = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'uk';
  return { locale, localizedPath: `/${locale}` };
};
