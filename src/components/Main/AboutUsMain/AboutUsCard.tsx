import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import { Box, BoxProps, Typography } from '@mui/material';

import theme from '@/theme';

interface ICardProps extends BoxProps {
  title: string;
  image: StaticImageData;
  paragraph: string;
  altText: string;
}
const AboutUsCard: FC<ICardProps> = ({ title, image, altText, paragraph, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        flexDirection: 'row',
        backgroundColor: 'primary.main',
        borderRadius: '16px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
        ...props.sx,
      }}
    >
      <Box
        sx={{
          width: '300px',
          height: '300px',
          position: 'relative',
          [theme.breakpoints.down('xl')]: {
            width: '200px',
            height: '200px',
          },
          [theme.breakpoints.down('lg')]: {
            width: '150px',
            height: '150px',
          },
          [theme.breakpoints.down('sm')]: {
            marginBottom: '0.5rem',
          },
        }}
      >
        <Image
          src={image}
          alt={altText}
          style={{
            objectFit: 'cover',
            borderRadius: '10px',
          }}
          fill
          priority
          sizes="(max-width: 1700px) 300px"
        />
      </Box>

      <Box sx={{ marginLeft: '1rem', textAlign: 'center', width: '80%' }}>
        <Typography sx={{ color: 'secondary.main' }} variant="subtitle2">
          {title}
        </Typography>
        <Typography variant="body1">{paragraph}</Typography>
      </Box>
    </Box>
  );
};

export default AboutUsCard;
