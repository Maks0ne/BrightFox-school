'use client';

import { FC } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import CoursesMainCard from './СoursesMainCard';

import { Box } from '@mui/material';

import bg from '@/assets/images/courses-main.webp';

const CoursesMain: FC = () => {
  return (
    <Box
      sx={{
        marginTop: '5rem',
        height: '130vh',
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '0 2rem',
      }}
    >
      <ParallaxProvider>
        <Parallax translateY={[-20, 40]}>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '20rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                justifyContent: 'center',
                maxWidth: '1200px',
              }}
            >
              <CoursesMainCard
                title="lorem"
                text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore deserunt,
                    blanditiis cupiditate ipsum, et laudantium possimus nostrum unde, quam debitis
                    nihil. Delectus exercitationem quam architecto eos corporis, quasi accusamus."
              />

              <CoursesMainCard
                title="lorem"
                text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore deserunt,
                    blanditiis cupiditate ipsum, et laudantium possimus nostrum unde, quam debitis
                    nihil. Delectus exercitationem quam architecto eos corporis, quasi accusamus."
              />

              <CoursesMainCard
                title="lorem"
                text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore deserunt,
                    blanditiis cupiditate ipsum, et laudantium possimus nostrum unde, quam debitis
                    nihil. Delectus exercitationem quam architecto eos corporis, quasi accusamus."
              />

              <CoursesMainCard
                title="lorem"
                text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore deserunt,
                    blanditiis cupiditate ipsum, et laudantium possimus nostrum unde, quam debitis
                    nihil. Delectus exercitationem quam architecto eos corporis, quasi accusamus."
              />
            </Box>
          </Box>
        </Parallax>
      </ParallaxProvider>
    </Box>
  );
};

export default CoursesMain;
