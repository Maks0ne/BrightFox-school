'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { reviews } from './reviews';

import { Box, Typography } from '@mui/material';

import googleIcon from '@/assets/images/reviews/google.png';
import starsIcon from '@/assets/images/reviews/stars.png';
import theme from '@/theme';

SwiperCore.use([Autoplay]);

const Reviews: FC = () => {
  const t = useTranslations('Reviews');

  return (
    <Box
      sx={{
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto 5rem auto',
      }}
    >
      <Typography variant="h3">{t('title')}</Typography>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={15}
        autoplay={{ delay: 10000 }}
        slidesPerView={1}
        style={{ padding: '4rem 1rem', width: '100%', height: 'unset', alignItems: 'stretch' }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const color = theme.palette.secondary.main;
            return `<span class="${className}" style="background-color: ${color};"></span>`;
          },
        }}
        breakpoints={{
          900: {
            spaceBetween: 40,
            slidesPerView: 3,
          },
          450: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} style={{ display: 'flex', height: 'unset' }}>
            <Box
              sx={{
                borderRadius: '16px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)',
                padding: '1rem 2rem',
                backgroundColor: 'primary.main',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    alt="Google Icon"
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
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Reviews;
