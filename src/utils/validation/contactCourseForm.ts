import { useTranslations } from 'next-intl';
import * as Yup from 'yup';

export const useContactCourseFormValidation = () => {
  const t = useTranslations('validation');

  return Yup.object({
    name: Yup.string().required(t('nameRequired')).min(2, t('nameMinLength')),
    email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
    course: Yup.string().required(t('courseRequired')),
  });
};
