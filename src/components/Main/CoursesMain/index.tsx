'use client';

import { animated, useSpring } from '@react-spring/web';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import GroupMainTab from './CourseMainTabs/GroupMainTab';
import IndividualMainTab from './CourseMainTabs/IndividualMainTab';
import PairMainTab from './CourseMainTabs/PairMainTab';

import { Fade, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Container from '@/components/Layout/Container';

const CoursesMain: FC = () => {
  const t = useTranslations('CoursesMain');
  const [value, setValue] = useState<number>(0);

  const CustomTab = styled(Tab)(({ theme }) => ({
    width: '20vw',
    fontWeight: 900,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
      width: '30vw',
    },
  }));

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const springProps = useSpring({
    transform: inView ? 'translateY(0)' : 'translateY(7%)',
    opacity: inView ? 1 : 0,
    config: { tension: 60, friction: 10 },
  });

  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: '4rem' }}>
        {t('CoursesMainTitle')}
      </Typography>
      <Tabs
        value={value}
        onChange={handleTabChange}
        sx={{
          marginBottom: '2rem',
          '& .MuiTabs-indicator': {
            backgroundColor: 'transparent',
          },
          '& .MuiTab-root': {
            color: 'primary.main',
            padding: '0.2rem',
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
        <CustomTab label={t('TabSingle')} />
        <CustomTab label={t('TabGroup')} />
        <CustomTab label={t('TabPair')} />
      </Tabs>
      <animated.div style={springProps} ref={ref}>
        <Fade in={value === 0} timeout={800}>
          <div>{value === 0 && <IndividualMainTab />}</div>
        </Fade>
      </animated.div>
      <Fade in={value === 1} timeout={800}>
        <div>{value === 1 && <GroupMainTab />}</div>
      </Fade>
      <Fade in={value === 2} timeout={800}>
        <div>{value === 2 && <PairMainTab />}</div>
      </Fade>
    </Container>
  );
};

export default CoursesMain;
