import { animated, useSpring } from '@react-spring/web';
import { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';
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

interface ITextPart {
  text: string;
  color?: string;
}

interface ISlideData {
  title: ITextPart[];
  backgroundImage: StaticImageData;
}

interface IWrapperProps {
  slides: ISlideData[];
}

const SliderWrapper: FC<IWrapperProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [springProps, api] = useSpring(() => ({
    opacity: 0.4,
  }));

  useEffect(() => {
    api.start({
      opacity: 1,
      config: { duration: 500 },
    });
  }, []);

  return (
    <animated.div style={springProps}>
      <Swiper
        modules={[A11y, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        effect={'fade'}
        autoplay={{ delay: 10000 }}
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
              activeIndex={activeIndex === index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </animated.div>
  );
};

export default SliderWrapper;
