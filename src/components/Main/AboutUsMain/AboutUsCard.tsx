import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import { Box, BoxProps, Typography } from '@mui/material';

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
        padding: '2rem',
        flexDirection: 'row',
        backgroundColor: 'primary.main',
        margin: '1rem',
        borderRadius: '16px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
        height: '90%',
        ...props.sx,
      }}
    >
      <Image
        src={image}
        alt={altText}
        style={{
          objectFit: 'cover',
          borderRadius: '10px',
        }}
        width={300}
        height={300}
      />

      <Box sx={{ marginLeft: '1rem', textAlign: 'center' }}>
        <Typography sx={{ color: 'secondary.main' }} variant="subtitle2">
          {title}
        </Typography>
        <Typography variant="body1">{paragraph}</Typography>
      </Box>
    </Box>
  );
};

export default AboutUsCard;
