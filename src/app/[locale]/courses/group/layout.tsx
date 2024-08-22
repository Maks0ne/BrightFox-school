'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC, useState } from 'react';

import AdultGroupTab from './Tabs/adultGroupTab';
import KidsGroupTab from './Tabs/kidsGroupTab';

import { Box, Fade, Tab, Tabs, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

import image from '@/assets/images/CoursesPage/Group.webp';
import Container from '@/components/Layout/Container';

const GroupCourse: FC = () => {
  const theme = useTheme();
  const t = useTranslations('coursePageGroup');
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          onChange={handleTabChange}
          sx={{
            margin: '3rem 0',
            '& .MuiTabs-indicator': {
              backgroundColor: 'transparent',
            },
            '& .MuiTab-root': {
              color: 'primary.main',
              padding: '1rem 0',
              width: '13vw',
              fontWeight: 900,
              backgroundColor: 'primary.light',
              border: 'solid 2px',
              borderColor: 'primary.main',
              '&:first-of-type': {
                borderRadius: '16px 0 0 16px',
              },
              '&:last-of-type': {
                borderRadius: '0 16px 16px 0',
              },
              '&.Mui-selected': {
                color: 'primary.light',
                backgroundColor: 'primary.main',
                fontWeight: 900,
              },
            },
          }}
        >
          <Tab label={t('adultTab')} />
          <Tab label={t('kidsTab')} />
        </Tabs>
        <Fade in={value === 0} timeout={800}>
          <div>{value === 0 && <AdultGroupTab />}</div>
        </Fade>
        <Fade in={value === 1} timeout={800}>
          <div>{value === 1 && <KidsGroupTab />}</div>
        </Fade>
      </Container>
    </Box>
  );
};

export default GroupCourse;
