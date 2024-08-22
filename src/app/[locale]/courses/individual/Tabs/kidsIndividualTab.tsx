import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import CoursePageCard from '@/components/CoursesPage/CoursePageCards/CoursePageCard';
import CoursePageStandartCard from '@/components/CoursesPage/CoursePageCards/CoursePageStandartCard';
import CoursePageTab from '@/components/CoursesPage/CoursePageTab';
import ContactModal from '@/components/Main/ContactModal';

const KidsIndividualTab: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('kidsIndividualTab');
  const courses = [
    {
      totalLessons: 4,
      title: `${t('offerKidsCourse')}`,
      standartPrice: 350,
      price: 330,
    },
    {
      totalLessons: 6,
      title: `${t('offerKidsCourse')}`,
      standartPrice: 350,
      price: 320,
    },
    {
      totalLessons: 8,
      title: `${t('offerKidsCourse')}`,
      standartPrice: 350,
      price: 300,
    },
    {
      totalLessons: 12,
      title: `${t('offerKidsCourse')}`,
      standartPrice: 350,
      price: 280,
    },
    {
      totalLessons: 24,
      title: `${t('offerKidsCourse')}`,
      standartPrice: 350,
      price: 260,
    },
    {
      totalLessons: 36,
      title: `${t('offerKidsCourse')}`,
      standartPrice: 350,
      price: 230,
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
        title={t('standartKidsCourse')}
        price={350}
        onCardClick={() => handleOpenModal()}
      />
      {courses.map((course, index) => (
        <CoursePageCard key={index} {...course} onCardClick={() => handleOpenModal()} />
      ))}
      <ContactModal open={isModalOpen} onClose={handleCloseModal} />
    </CoursePageTab>
  );
};

export default KidsIndividualTab;
