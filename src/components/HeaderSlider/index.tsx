'use client';

import { FC } from 'react';

import SliderWrapper from './SliderWrapper';

import img1 from '@/assets/images/headerSlider/1.webp';
import img2 from '@/assets/images/headerSlider/2.webp';
import img3 from '@/assets/images/headerSlider/3.webp';
import img4 from '@/assets/images/headerSlider/4.webp';

const HeaderSlider: FC = () => {
  const slides = [
    {
      title: 'В BrightFox School изучение английского становится ярким и увлекательным!',
      backgroundImage: img1,
    },
    { title: 'Создайте яркое будущее с BrightFox School!', backgroundImage: img2 },
    { title: 'Ваш путь к совершенному английскому начинается здесь!', backgroundImage: img3 },
    { title: 'Учите английский легко и весело с BrightFox School!', backgroundImage: img4 },
  ];

  return (
    <div>
      <SliderWrapper slides={slides} />
    </div>
  );
};

export default HeaderSlider;
