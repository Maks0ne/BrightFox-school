'use client';

import { FC, useEffect, useState } from 'react';

import HeaderSlider from '@/components/HeaderSlider';
import AboutUsMain from '@/components/Main/AboutUsMain';
import ContactMain from '@/components/Main/ContactMain';
import ContactModal from '@/components/Main/ContactModal';
import CoursesMain from '@/components/Main/CoursesMain';
import FAQlist from '@/components/Main/FAQ';
import ParallaxMain from '@/components/Main/ParallaxMain';
import Reviews from '@/components/Main/Reviews';
import WelcomeTitle from '@/components/Main/WelcomeTitle';

const Home: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeaderSlider />
      <WelcomeTitle />
      <ContactMain />
      <AboutUsMain />
      <ParallaxMain onOpenModal={handleOpenModal} />
      <Reviews />
      <CoursesMain />
      <FAQlist />
      <ContactModal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default Home;
