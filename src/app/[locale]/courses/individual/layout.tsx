'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC, useState } from 'react';

import ItIndividualTab from './Tabs/itIndividualTab';
import KidsIndividualTab from './Tabs/kidsIndividualTab';
import NativeIndividualTab from './Tabs/nativeIndividualTab';
import PremiumIndividualTab from './Tabs/premiumIndividualTab';
import StandartIndividualTab from './Tabs/standartIndividualTab';

import {
  Box,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

import image from '@/assets/images/CoursesPage/Individual.webp';
import Container from '@/components/Layout/Container';

const IndividualCourseLayout: FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const t = useTranslations('coursePageIndividual');
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    setSelectedTab(event.target.value as number);
    setValue(event.target.value as number);
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
        {isSmallScreen ? (
          <FormControl sx={{ width: '70vw', margin: '3rem 0' }}>
            <InputLabel>{t('mobileTab')}</InputLabel>
            <Select
              value={selectedTab}
              onChange={handleSelectChange}
              label="Choose a tab"
              sx={{
                '& .MuiSelect-select': {
                  color: 'primary.main',
                },
              }}
            >
              <MenuItem value={0}>{t('standardTab')}</MenuItem>
              <MenuItem value={1}>{t('itTab')}</MenuItem>
              <MenuItem value={2}>{t('premiumTab')}</MenuItem>
              <MenuItem value={3}>{t('nativeTab')}</MenuItem>
              <MenuItem value={4}>{t('kidsTab')}</MenuItem>
            </Select>
          </FormControl>
        ) : (
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
            <Tab label={t('standardTab')} />
            <Tab label={t('itTab')} />
            <Tab label={t('premiumTab')} />
            <Tab label={t('nativeTab')} />
            <Tab label={t('kidsTab')} />
          </Tabs>
        )}
        <Fade in={value === 0} timeout={800}>
          <div>{value === 0 && <StandartIndividualTab />}</div>
        </Fade>
        <Fade in={value === 1} timeout={800}>
          <div>{value === 1 && <ItIndividualTab />}</div>
        </Fade>
        <Fade in={value === 2} timeout={800}>
          <div>{value === 2 && <PremiumIndividualTab />}</div>
        </Fade>
        <Fade in={value === 3} timeout={800}>
          <div>{value === 3 && <NativeIndividualTab />}</div>
        </Fade>
        <Fade in={value === 4} timeout={800}>
          <div>{value === 4 && <KidsIndividualTab />}</div>
        </Fade>
      </Container>
    </Box>
  );
};

export default IndividualCourseLayout;
