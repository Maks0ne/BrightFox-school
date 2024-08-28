'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Instagram, Telegram } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import ContactForm from '@/components/Forms/ContactForm';
import theme from '@/theme';

const ContactsLayout: FC = () => {
  const t = useTranslations('contactPage');
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        width: '100vw',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'primary.light',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'grey.800',
            margin: '2rem 0',
          }}
        >
          {t('contactInformation')}
        </Typography>
        <Typography
          variant="subtitle2"
          marginBottom={2}
          sx={{
            color: 'grey.800',
          }}
        >
          <a href={'tel:+380637406798'} style={{ marginRight: '1rem' }}>
            +380 63 740 67 98
          </a>
          <a href={'tel:+380938738943'}>+380 93 873 89 43</a>
        </Typography>
        <Typography
          variant="subtitle2"
          marginBottom={2}
          sx={{
            color: 'grey.800',
          }}
        >
          <a href={'mailto:Bright.fox.school24@gmail.com'}>Bright.fox.school24@gmail.com</a>
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: 2 }}>
          <Instagram sx={{ color: 'primary.main' }} />
          <a
            href={'https://www.instagram.com/bright.fox.school?igsh=MWVxcmY1ZGg4c2U4MA=='}
            target="_blank"
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: 'grey.800',
                ':hover': {
                  color: 'secondary.main',
                },
                transition: 'transform 0.2s, color 0.2s',
              }}
            >
              Bright.fox.school
            </Typography>
          </a>
        </Box>
        <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: 2 }}>
          <Telegram sx={{ color: 'primary.main' }} />
          <a href={'https://t.me/brightfoxschool'} target="_blank">
            <Typography
              variant="subtitle2"
              sx={{
                color: 'grey.800',
                ':hover': {
                  color: 'secondary.main',
                },
                transition: 'transform 0.2s, color 0.2s',
              }}
            >
              Bright.fox.school
            </Typography>
          </a>
        </Box>
      </Box>

      {/* Contact Form */}
      <Box
        sx={{
          width: '70%',
          backgroundColor: 'primary.main',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          flexDirection: 'column',
          [theme.breakpoints.down('md')]: {
            width: '100%',
          },
        }}
      >
        <Typography
          variant="h4"
          marginBottom={2}
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
          }}
        >
          {t('contactUs')}
        </Typography>
        <Typography variant="body2" marginBottom={2} sx={{ textAlign: 'center' }}>
          {t('contactDescription')}
        </Typography>
        <Box
          sx={{
            backgroundColor: 'primary.light',
            padding: '2rem',
            borderRadius: '16px',
            width: '50%',
            [theme.breakpoints.down('lg')]: {
              width: '60%',
            },
            [theme.breakpoints.down('md')]: {
              width: '70%',
            },
            [theme.breakpoints.down('sm')]: {
              width: '90%',
            },
          }}
        >
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactsLayout;
