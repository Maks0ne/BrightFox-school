import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import CoursePageCard from '@/components/CoursesPage/CoursePageCards/CoursePageCard';
import CoursePageStandartCard from '@/components/CoursesPage/CoursePageCards/CoursePageStandartCard';
import CoursePageTab from '@/components/CoursesPage/CoursePageTab';
import ContactModal from '@/components/Main/ContactModal';

const PremiumIndividualTab: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('premiumIndividualTab');
  const courses = [
    {
      totalLessons: 4,
      title: `${t('offerPremiumCourse')}`,
      standartPrice: 699,
      price: 680,
    },
    {
      totalLessons: 6,
      title: `${t('offerPremiumCourse')}`,
      standartPrice: 699,
      price: 650,
    },
    {
      totalLessons: 8,
      title: `${t('offerPremiumCourse')}`,
      standartPrice: 699,
      price: 600,
    },
    {
      totalLessons: 12,
      title: `${t('offerPremiumCourse')}`,
      standartPrice: 699,
      price: 580,
    },
    {
      totalLessons: 24,
      title: `${t('offerPremiumCourse')}`,
      standartPrice: 699,
      price: 550,
    },
    {
      totalLessons: 36,
      title: `${t('offerPremiumCourse')}`,
      standartPrice: 699,
      price: 530,
    },
    {
      totalLessons: 48,
      title: `${t('offerPremiumCourse')}`,
      standartPrice: 699,
      price: 500,
    },
    {
      totalLessons: 72,
      title: `${t('anotherPremiumCourse')}`,
      standartPrice: 699,
      price: 280,
    },
    {
      totalLessons: 100,
      title: `${t('offerPremiumCourse')}`,
      standartPrice: 699,
      price: 260,
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
        title={t('standartPremiumCourse')}
        price={699}
        onCardClick={() => handleOpenModal()}
      />
      {courses.map((course, index) => (
        <CoursePageCard key={index} {...course} onCardClick={() => handleOpenModal()} />
      ))}
      <ContactModal open={isModalOpen} onClose={handleCloseModal} />
    </CoursePageTab>
  );
};

export default PremiumIndividualTab;
