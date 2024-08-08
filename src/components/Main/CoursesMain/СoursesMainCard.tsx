import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, BoxProps, Button, Typography } from '@mui/material';

import theme from '@/theme';

interface CoursesMainCardProps extends BoxProps {
  title: string;
  text: string;
}

const CoursesMainCard: FC<CoursesMainCardProps> = ({ title, text, ...props }) => {
  const t = useTranslations('CoursesMain');

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '12px',
        position: 'relative',
        padding: '2rem',
        textAlign: 'center',
        // height: '28vh',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        width: '40vw',
        border: '1px solid',
        borderColor: 'secondary.main',
        [theme.breakpoints.down('xl')]: {
          // height: '20vh',
        },
        [theme.breakpoints.down('sm')]: {
          width: '85vw',
          // height: '13vh',
        },
        [theme.breakpoints.down('xs')]: {
          // height: '10vh',
        },
        ...props.sx,
      }}
    >
      <Typography sx={{ color: 'secondary.main', fontWeight: 900 }} variant="subtitle2">
        {title}
      </Typography>
      <Typography sx={{ marginBottom: '4rem' }} variant="body1">
        {text}
      </Typography>
      <Button
        sx={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          backgroundColor: '#ff880075',
          borderRadius: '10px',
          transition: 'background-color 0.5s',
          '&:hover': {
            backgroundColor: 'secondary.main',
          },
        }}
      >
        {t('button')}
      </Button>
    </Box>
  );
};

export default CoursesMainCard;
