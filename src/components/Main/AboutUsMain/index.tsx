'use client';

import { animated, useSpring } from '@react-spring/web';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import AboutUsCard from './AboutUsCard';

import { Box, useMediaQuery } from '@mui/material';

import img1 from '@/assets/images/aboutUs/1.webp';
import img2 from '@/assets/images/aboutUs/2.webp';
import img3 from '@/assets/images/aboutUs/3.webp';
import theme from '@/theme';

const AboutUsMain: FC = () => {
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [bottomRef, bottomInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const t = useTranslations('AboutUsMain');

  const leftAnimation = useSpring({
    opacity: leftInView ? 1 : 0,
    transform: leftInView ? 'translateX(0)' : 'translateX(-50%)',
    config: { tension: 60, friction: 10 },
  });

  const rightAnimation = useSpring({
    opacity: rightInView ? 1 : 0,
    transform: rightInView ? 'translateX(0)' : 'translateX(50%)',
    config: { tension: 60, friction: 10 },
  });

  const bottomAnimation = useSpring({
    opacity: bottomInView ? 1 : 0,
    transform: bottomInView ? 'translateY(0)' : 'translateY(50%)',
    config: { tension: 60, friction: 10 },
  });

  const rightStyle = {
    ...rightAnimation,
    width: isMd ? '70%' : '45%',
  };
  const leftStyle = {
    ...leftAnimation,
    width: isMd ? '70%' : '45%',
  };
  const bottomStyle = {
    ...bottomAnimation,
    width: isMd ? '70%' : '65%',
  };
  return (
    <Box
      sx={{
        position: 'relative',
        padding: '0 2rem',
        marginBottom: '7rem',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5rem',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap: '3rem',
          },
        }}
      >
        <animated.div ref={leftRef} style={leftStyle}>
          <AboutUsCard
            title={t('card1_title')}
            paragraph={t('card1_paragraph')}
            image={img1}
            altText="Girl"
          />
        </animated.div>

        {/* Right Section */}
        <animated.div ref={rightRef} style={rightStyle}>
          <AboutUsCard
            title={t('card2_title')}
            paragraph={t('card2_paragraph')}
            altText="Girl"
            image={img2}
          />
        </animated.div>
      </Box>

      {/* Bottom Section */}
      <animated.div ref={bottomRef} style={bottomStyle}>
        <AboutUsCard
          title={t('card3_title')}
          paragraph={t('card3_paragraph')}
          altText="Child"
          image={img3}
          sx={{ mt: '3rem' }}
        />
      </animated.div>
    </Box>
  );
};

export default AboutUsMain;
