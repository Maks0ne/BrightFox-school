import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import CoursePageCard from '@/components/CoursesPage/CoursePageCards/CoursePageCard';
import CoursePageStandartCard from '@/components/CoursesPage/CoursePageCards/CoursePageStandartCard';
import CoursePageTab from '@/components/CoursesPage/CoursePageTab';
import ContactModal from '@/components/Main/ContactModal';

const StandartIndividualTab: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('standartIndividualTab');
  const courses = [
    {
      totalLessons: 4,
      title: `${t('offerStandartCourse')}`,
      standartPrice: 420,
      price: 399,
    },
    {
      totalLessons: 8,
      title: `${t('offerStandartCourse')}`,
      standartPrice: 420,
      price: 370,
    },
    {
      totalLessons: 12,
      title: `${t('offerStandartCourse')}`,
      standartPrice: 420,
      price: 350,
    },
    {
      totalLessons: 24,
      title: `${t('offerStandartCourse')}`,
      standartPrice: 420,
      price: 320,
    },
    {
      totalLessons: 36,
      title: `${t('offerStandartCourse')}`,
      standartPrice: 420,
      price: 310,
    },
    {
      totalLessons: 48,
      title: `${t('offerStandartCourse')}`,
      standartPrice: 420,
      price: 300,
    },
  ];
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <CoursePageTab title={t('title')} description={t('description')}>
      <CoursePageStandartCard
        title={t('standartStandartCourse')}
        price={420}
        onCardClick={() => handleOpenModal()}
      />
      {courses.map((course, index) => (
        <CoursePageCard key={index} {...course} onCardClick={() => handleOpenModal()} />
      ))}
      <ContactModal open={isModalOpen} onClose={handleCloseModal} />
    </CoursePageTab>
  );
};

export default StandartIndividualTab;
