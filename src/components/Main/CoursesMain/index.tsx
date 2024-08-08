'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import CoursesMainCard from './СoursesMainCard';

import { Box } from '@mui/material';

import bg from '@/assets/images/courses-main.webp';
import theme from '@/theme';

const CoursesMain: FC = () => {
  const t = useTranslations('CoursesMain');

  return (
    <Box
      sx={{
        minHeight: '140vh',
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
        padding: '2rem',
        [theme.breakpoints.down('xl')]: {
          minHeight: '130vh',
        },
        [theme.breakpoints.down('lg')]: {
          minHeight: '80vh',
        },
        [theme.breakpoints.down('md')]: {
          minHeight: '90vh',
        },
        [theme.breakpoints.down('sm')]: {
          minHeight: '140vh',
        },
      }}
    >
      <ParallaxProvider>
        <Parallax translateY={[5, 70]}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '1700px',
              gap: '20px',
              justifyContent: 'center',
              margin: '0 auto',
              padding: '2rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                width: '90%',
                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column',
                },
              }}
            >
              <CoursesMainCard title={t('course1_title')} text={t('course1_description')} />

              <CoursesMainCard title={t('course2_title')} text={t('course2_description')} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                width: '90%',
                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column',
                },
              }}
            >
              <CoursesMainCard title={t('course3_title')} text={t('course3_description')} />
              <CoursesMainCard title={t('course4_title')} text={t('course4_description')} />
            </Box>
          </Box>
        </Parallax>
      </ParallaxProvider>
    </Box>
  );
};

export default CoursesMain;
