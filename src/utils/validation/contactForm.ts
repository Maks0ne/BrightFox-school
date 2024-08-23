import { useTranslations } from 'next-intl';
import * as Yup from 'yup';

export const useContactFormValidation = () => {
  const t = useTranslations('validation');

  return Yup.object({
    name: Yup.string().required(t('nameRequired')).min(2, t('nameMinLength')),
    email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
  });
};
