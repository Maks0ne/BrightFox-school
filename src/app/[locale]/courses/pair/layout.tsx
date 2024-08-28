'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

import AdultPairTab from './Tabs/adultPairTab';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

import image from '@/assets/images/CoursesPage/Pair.webp';
import Container from '@/components/Layout/Container';

const PairCourseLayout: FC = () => {
  const theme = useTheme();
  const t = useTranslations('coursePagePair');

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '50vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: '3rem',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              zIndex: 1,
            },
          }}
        >
          <Image
            src={image}
            fill
            alt="Student"
            quality={100}
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            margin: '0 3rem',
            width: '40%',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            [theme.breakpoints.down('sm')]: {
              width: '80%',
              margin: '0 auto',
            },
          }}
        >
          <Typography variant="h1" sx={{ color: 'secondary.main' }}>
            {t('title')}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#FFF' }}>
            {t('description')}{' '}
            <Typography
              sx={{ fontSize: '1.3rem', color: 'secondary.main', fontWeight: 900 }}
              component={'span'}
            >
              BrigtFox
            </Typography>
            !
          </Typography>
        </Box>
      </Box>
      <Container>
        <AdultPairTab />
      </Container>
    </Box>
  );
};

export default PairCourseLayout;
