import { StaticImageData } from 'next/image';
import { FC, useState } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SlideContent from '../SlideContent';

import theme from '@/theme';

SwiperCore.use([Autoplay]);

interface ISlideData {
  title: string;
  backgroundImage: StaticImageData;
}

interface IWrapperProps {
  slides: ISlideData[];
}

const SliderWrapper: FC<IWrapperProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <Swiper
      modules={[A11y, Pagination, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect={'fade'}
      autoplay={{ delay: 6000 }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          const color = theme.palette.secondary.main;
          return `<span class="${className}" style="background-color: ${color};"></span>`;
        },
      }}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideContent
            title={slide.title}
            backgroundImage={slide.backgroundImage}
            // activeIndex={activeIndex}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderWrapper;
