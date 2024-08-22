import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import CoursePageCard from '@/components/CoursesPage/CoursePageCards/CoursePageCard';
import CoursePageStandartCard from '@/components/CoursesPage/CoursePageCards/CoursePageStandartCard';
import CoursePageTab from '@/components/CoursesPage/CoursePageTab';
import ContactModal from '@/components/Main/ContactModal';

const AdultGroupTab: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('adultsGroupTab');
  const courses = [
    {
      totalLessons: 4,
      title: `${t('offerAdultsCourse')}`,
      standartPrice: 300,
      price: 280,
    },
    {
      totalLessons: 6,
      title: `${t('offerAdultsCourse')}`,
      standartPrice: 300,
      price: 260,
    },
    {
      totalLessons: 8,
      title: `${t('offerAdultsCourse')}`,
      standartPrice: 300,
      price: 250,
    },
    {
      totalLessons: 12,
      title: `${t('offerAdultsCourse')}`,
      standartPrice: 300,
      price: 230,
    },
    {
      totalLessons: 24,
      title: `${t('offerAdultsCourse')}`,
      standartPrice: 300,
      price: 210,
    },
    {
      totalLessons: 36,
      title: `${t('offerAdultsCourse')}`,
      standartPrice: 300,
      price: 200,
    },
    {
      totalLessons: 48,
      title: `${t('offerAdultsCourse')}`,
      standartPrice: 300,
      price: 180,
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
        title={t('standartAdultsCourse')}
        price={300}
        onCardClick={() => handleOpenModal()}
      />
      {courses.map((course, index) => (
        <CoursePageCard key={index} {...course} onCardClick={() => handleOpenModal()} />
      ))}
      <ContactModal open={isModalOpen} onClose={handleCloseModal} />
    </CoursePageTab>
  );
};

export default AdultGroupTab;
