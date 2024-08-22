'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Parallax } from 'react-parallax';

import { Box, Typography } from '@mui/material';

import parallaxImage from '@/assets/images/parallax/parallax.webp';
import ActionButton from '@/components/ui/ActionButton';
import theme from '@/theme';

interface ParallaxMainProps {
  onOpenModal: () => void;
}
const ParallaxMain: FC<ParallaxMainProps> = ({ onOpenModal }) => {
  const t = useTranslations('ParallaxMain');

  return (
    <Box
      display="flex"
      sx={{
        minHeight: '50lvh',
        maxWidth: '100%',
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 1)',
        position: 'relative',
        marginBottom: '5rem',
      }}
    >
      <Box
        sx={{
          width: '60%',
          minHeight: '50lvh',
          position: 'relative',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
            zIndex: 1,
          },
        }}
      >
        <Parallax
          bgImage={parallaxImage.src}
          bgImageAlt="Child"
          strength={150}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              minHeight: '60lvh',
              width: '100%',
            }}
          />
        </Parallax>
      </Box>

      <Box
        sx={{
          flex: 2,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          backgroundColor: 'primary.main',
          zIndex: 1,
          [theme.breakpoints.down('sm')]: {
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4rem 2rem',
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            [theme.breakpoints.down('sm')]: {
              textAlign: 'center',
              fontWeight: 800,
              color: 'grey.200',
            },
          }}
        >
          {t('paragraph')}
        </Typography>
        <ActionButton
          onClick={() => {
            onOpenModal();
          }}
          sx={{
            width: '12rem',
            mt: '2rem',
            [theme.breakpoints.down('sm')]: {
              marginTop: '1rem',
            },
          }}
        >
          {t('button')}
        </ActionButton>
      </Box>
    </Box>
  );
};

export default ParallaxMain;
