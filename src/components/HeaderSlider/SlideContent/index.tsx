import { animated, useSpring } from '@react-spring/web';
// import { useTranslations } from 'next-intl';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { FC, useEffect } from 'react';

// import { Link } from 'react-scroll';
import { Box, Typography } from '@mui/material';

// import ActionButton from '@/components/ui/ActionButton';
import theme from '@/theme';

interface ITextPart {
  text: string;
  color?: string;
}
interface ISlideContentProps {
  title: ITextPart[];
  backgroundImage: StaticImageData;
  activeIndex: boolean;
  priority?: boolean;
}

const SlideContent: FC<ISlideContentProps> = ({
  title,
  backgroundImage,
  activeIndex,
  priority,
}) => {
  // const t = useTranslations('Slider');

  // const getOffset = () => {
  //   const vh = window.innerHeight;
  //   return -vh * 0.2;
  // };
  const [springProps, api] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-50px)',
  }));

  useEffect(() => {
    api.start({
      opacity: activeIndex ? 1 : 0,
      transform: activeIndex ? 'translateX(0)' : 'translateX(-50px)',
      config: { duration: 1500 },
    });
  }, [activeIndex]);

  return (
    <Box
      sx={{
        height: '93vh',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
          height: '500px',
        },
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: '-1',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          },
        }}
      >
        <Image
          src={backgroundImage}
          fill
          priority={priority}
          quality={100}
          alt={'Створіть яскраве майбутнє із BrightFox School!'}
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Title */}
      <Box
        sx={{
          position: 'absolute',
          top: '30vh',
          left: '7vw',
          width: '52vw',
          padding: '10px',
          [theme.breakpoints.down('md')]: {
            width: '90vw',
          },
          [theme.breakpoints.down('xs')]: {
            top: '100px',
          },
        }}
      >
        {activeIndex &&
          title.map((item, index) => (
            <animated.div
              key={index}
              style={{
                ...springProps,
              }}
            >
              <Typography
                variant="h1"
                sx={{ color: item.color, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
              >
                {item.text}
              </Typography>
            </animated.div>
          ))}

        {/* Button */}
        {activeIndex && (
          <animated.div
            style={{
              ...springProps,
            }}
          >
            {/* <Link to="contact-section" smooth={true} duration={500} offset={getOffset()}>
              <ActionButton sx={{ margin: '2rem 0 0 3rem' }}>{t('button')}</ActionButton>
            </Link> */}
          </animated.div>
        )}
      </Box>
    </Box>
  );
};

export default SlideContent;
