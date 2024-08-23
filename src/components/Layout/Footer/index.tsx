'use client';

import { FC } from 'react';

import { Instagram, Telegram } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        display: 'flex',
        padding: '3rem 2rem',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <Box>
        <Typography sx={{ color: 'secondary.main', fontWeight: 550, fontSize: '1.2rem' }}>
          BrightFoxSchool
        </Typography>
        <Typography variant="caption" color="primary.light">
          © {new Date().getFullYear()} Bright Fox School. Усі права захищені.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Box sx={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>
          <a
            href={'https://www.instagram.com/bright.fox.school?igsh=MWVxcmY1ZGg4c2U4MA=='}
            target="_blank"
            aria-label="instagram"
          >
            <Instagram sx={{ color: 'secondary.main' }} />
          </a>

          <a href={'https://t.me/brightfoxschool'} target="_blank" aria-label="telegram">
            <Telegram sx={{ color: 'secondary.main' }} />
          </a>
        </Box>

        <Typography variant="body1" color="primary.light">
          <a href={'tel:+380637406798'}>+380 63 740 67 98</a>
        </Typography>

        <Typography variant="body1" color="primary.light">
          <a href={'mailto:Bright.fox.school24@gmail.com'}>Bright.fox.school24@gmail.com</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
