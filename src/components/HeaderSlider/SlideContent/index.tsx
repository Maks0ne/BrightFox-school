import { animated, useTrail } from '@react-spring/web';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

interface ISlideContentProps {
  title: string;
  backgroundImage: StaticImageData;
  // activeIndex: number;
}

const SlideContent: FC<ISlideContentProps> = ({ title, backgroundImage }) => {
  const letters = title.split('');
  const [trailTrigger, setTrailTrigger] = useState(false);

  const trail = useTrail(letters.length, {
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 50 },
    reset: true,
  });
  useEffect(() => {
    setTrailTrigger(true);
  }, []);
  return (
    <Box
      sx={{
        height: '93vh',
        position: 'relative',
      }}
    >
      <Image src={backgroundImage} fill alt={title} style={{ objectFit: 'cover', zIndex: '-1' }} />
      <Box
        style={{
          position: 'absolute',
          top: '25vh',
          left: '0',
          width: '20vw',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <Typography variant="h1" component="div">
          {trail.map((style, index) => (
            <animated.span key={index} style={style}>
              {letters[index]}
            </animated.span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};

export default SlideContent;
