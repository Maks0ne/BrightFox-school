'use client';

import Image from 'next/image';
import { FC } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Card, CardContent, Typography } from '@mui/material';

import googleIcon from '@/assets/images/reviews/google.png';
import starsIcon from '@/assets/images/reviews/stars.png';
import theme from '@/theme';

const reviews = [
  {
    id: 1,
    name: 'Александр Иванов',
    text: 'Отличная школа! Прекрасные преподаватели и современное оборудование.',
  },
  {
    id: 2,
    name: 'Мария Петрова',
    text: 'Очень довольна учебным процессом. Курс был интересным и полезным.',
  },
  {
    id: 3,
    name: 'Игорь Смирнов',
    text: 'Школа предоставила отличные условия для обучения и развития.',
  },
  {
    id: 4,
    name: 'Ольга Кузнецова',
    text: 'Рекомендую эту школу всем, кто хочет качественное образование.',
  },
  {
    id: 5,
    name: 'Игорь Смирнов',
    text: 'Школа предоставила отличные условия для обучения и развития.',
  },
  {
    id: 6,
    name: 'Ольга Кузнецова',
    text: 'Рекомендую эту школу всем, кто хочет качественное образование.',
  },
];
SwiperCore.use([Autoplay]);

const Reviews: FC = () => {
  return (
    <Box sx={{ padding: '10rem 2rem', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        Видгуки
      </Typography>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        // autoplay={{ delay: 10000 }}
        slidesPerView={3}
        style={{ padding: '3rem 1rem', width: '100%' }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const color = theme.palette.secondary.main;
            return `<span class="${className}" style="background-color: ${color};"></span>`;
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Card
              sx={{
                display: 'flex',
                padding: '1rem',
                borderRadius: '16px',
                height: '15vw',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
              }}
            >
              <CardContent sx={{ height: '100%', flex: 1 }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography variant="subtitle2">{review.name}</Typography>
                  <Image src={googleIcon} height={48} width={48} alt="FiveStars" />
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Image src={starsIcon} height={32} width={120} alt="five stars" />
                  </Box>
                  <Typography variant="body1" sx={{ mt: 5 }}>
                    {review.text}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Reviews;
