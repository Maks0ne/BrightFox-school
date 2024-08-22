'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import ContactCourseForm from '@/components/Forms/ContactCourseForm';
import Container from '@/components/Layout/Container';
import theme from '@/theme';

const ContactMain: FC = () => {
  const t = useTranslations('contactMain');

  return (
    <Container>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          maxWidth: '100%',
          padding: '4rem',
          borderRadius: '16px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
          display: 'flex',
          gap: '1rem',
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '95vw',
            padding: '3rem',
          },
        }}
      >
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            flex: 1,
          }}
        >
          <Typography variant="h3" sx={{ color: 'secondary.main' }}>
            {t('freeLesson')}
          </Typography>
          <Typography variant="body1">{t('contactPrompt')}</Typography>
        </Box>
        <Box
          sx={{
            borderRadius: '16px',
            padding: '2rem',
            backgroundColor: 'primary.light',
            width: '50%',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
            },
          }}
        >
          <ContactCourseForm />
        </Box>
      </Box>
    </Container>
  );
};
export default ContactMain;
