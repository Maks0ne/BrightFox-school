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
    name: 'Анна',
    text: 'Я задоволена своїм досвідом навчання тут. Програма курсу адаптована під будь-який рівень, а уроки проводяться у дружній атмосфері. Порадаю всім!',
  },
  {
    id: 2,
    name: 'Olena Glyshko',
    text: 'Навчання в цій школі перевершило мої очікування. Курс добре структурований, а підхід до кожного учня індивідуальний. Дуже вдячний за якісне навчання.',
  },
  {
    id: 3,
    name: 'Marina Alexeeva',
    text: 'Чудова школа з привітним колективом! Заняття проходять цікаво та ефективно, результати помітні вже після кількох занять.',
  },
  {
    id: 4,
    name: 'Mikhail',
    text: 'Рекомендую эту школу всем, кто хочет качественное образование.',
  },
  {
    id: 5,
    name: 'Dmitry',
    text: 'Мой сын обожает занятия для детей. Он всегда с радостью идет на уроки и уже заметно улучшил свой английский. Спасибо школе за такой подход.',
  },
  {
    id: 6,
    name: 'Ольга Кузнецова',
    text: 'Вивчення англійської в цій школі стало для мене справжнім задоволенням. Преподавателі досвідчені та уважні. Рекомендую всім.',
  },
];
SwiperCore.use([Autoplay]);

const Reviews: FC = () => {
  return (
    <Box sx={{ marginBottom: '10rem', textAlign: 'center' }}>
      <Typography variant="h3" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
        Видгуки
      </Typography>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={10}
        autoplay={{ delay: 10000 }}
        slidesPerView={3}
        style={{ padding: '4rem 1rem', width: '100%' }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const color = theme.palette.secondary.main;
            return `<span class="${className}" style="background-color: ${color};"></span>`;
          },
        }}
        breakpoints={{
          650: {
            spaceBetween: 50,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Card
              sx={{
                display: 'flex',
                borderRadius: '16px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
                height: '14rem',
                [theme.breakpoints.down('md')]: {
                  height: '18rem',
                },
              }}
            >
              <CardContent sx={{ height: '100%', flex: 1, padding: '1rem 2rem' }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Typography variant="subtitle2">{review.name}</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      width: '50px',
                      height: '50px',
                      position: 'relative',
                      [theme.breakpoints.down('xl')]: {
                        width: '30px',
                        height: '30px',
                      },
                      [theme.breakpoints.down('sm')]: {
                        width: '20px',
                        height: '20px',
                      },
                    }}
                  >
                    <Image
                      src={googleIcon}
                      priority
                      fill
                      alt="FiveStars"
                      sizes="(max-width: 1700px) 50px"
                    />
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      width: '110px',
                      height: '32px',
                      position: 'relative',
                      [theme.breakpoints.down('xl')]: {
                        width: '65px',
                        height: '20px',
                      },
                      [theme.breakpoints.down('sm')]: {
                        width: '40px',
                        height: '10px',
                      },
                    }}
                  >
                    <Image
                      src={starsIcon}
                      priority
                      fill
                      alt="five stars"
                      sizes="(max-width: 1700px) 110px"
                    />
                  </Box>
                  <Typography variant="body1" sx={{ marginTop: '1rem' }}>
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
