'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';

import SliderWrapper from './SliderWrapper';

import img1 from '@/assets/images/headerSlider/1.webp';
import img2 from '@/assets/images/headerSlider/2.webp';
import img3 from '@/assets/images/headerSlider/3.webp';
import img4 from '@/assets/images/headerSlider/4.webp';
import theme from '@/theme';

const HeaderSlider: FC = () => {
  const t = useTranslations('Slider');

  const slides = [
    {
      title: [
        { text: t('slide1_title1') },
        { text: t('slide1_title2'), color: theme.palette.secondary.main },
      ],
      backgroundImage: img2,
      priority: true,
    },
    {
      title: [
        { text: t('slide2_title1') },
        { text: t('slide2_title2'), color: theme.palette.secondary.main },
      ],
      backgroundImage: img3,
      priority: false,
    },
    {
      title: [
        { text: t('slide3_title1') },
        { text: t('slide3_title2'), color: theme.palette.secondary.main },
      ],
      backgroundImage: img1,
      priority: false,
    },
    {
      title: [
        { text: t('slide4_title1') },
        { text: t('slide4_title2'), color: theme.palette.secondary.main },
      ],
      backgroundImage: img4,
      priority: false,
    },
  ];

  return (
    <div>
      <SliderWrapper slides={slides} />
    </div>
  );
};

export default HeaderSlider;
