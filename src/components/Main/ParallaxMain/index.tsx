'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Parallax } from 'react-parallax';

import { Box, Typography } from '@mui/material';

import parallaxImage from '@/assets/images/parallax/parallax.webp';
import ActionButton from '@/components/ui/ActionButton';
import theme from '@/theme';

const ParallaxMain: FC = () => {
  const t = useTranslations('ParallaxMain');

  return (
    <Box
      sx={{
        minHeight: '60vh',
        marginBottom: '5rem',
        [theme.breakpoints.down('xl')]: {
          minHeight: '40vh',
        },
        [theme.breakpoints.down('md')]: {
          minHeight: '32dvh',
        },
      }}
    >
      <Box
        display="flex"
        sx={{
          minHeight: '60vh',
          maxWidth: '100%',
          boxShadow: '0px 2px 15px rgba(0, 0, 0, 1)',
          [theme.breakpoints.down('xl')]: {
            minHeight: '40vh',
          },
          [theme.breakpoints.down('md')]: {
            minHeight: '32dvh',
          },
        }}
      >
        <Parallax
          bgImage={parallaxImage.src}
          bgImageAlt="Child"
          strength={200}
          style={{
            height: '100%',
            width: '65%',
          }}
        >
          {' '}
          <div style={{ minHeight: '35dvh' }} />
        </Parallax>
        <Box
          sx={{
            flex: 1,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.main',
          }}
        >
          <Typography variant="body1">{t('paragraph')}</Typography>
          <ActionButton sx={{ width: '12rem', mt: '2rem' }}>{t('button')}</ActionButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ParallaxMain;
