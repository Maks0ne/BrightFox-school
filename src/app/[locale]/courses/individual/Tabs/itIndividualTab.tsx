import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import CoursePageStandartCard from '@/components/CoursesPage/CoursePageCards/CoursePageStandartCard';
import CoursePageTab from '@/components/CoursesPage/CoursePageTab';
import ContactModal from '@/components/Main/ContactModal';

const ItIndividualTab: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('itIndividualTab');
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <CoursePageTab title={t('title')} description={t('description')}>
      <CoursePageStandartCard
        title={t('standartItCourse')}
        price={500}
        onCardClick={() => handleOpenModal()}
      />
      <ContactModal open={isModalOpen} onClose={handleCloseModal} />
    </CoursePageTab>
  );
};

export default ItIndividualTab;
