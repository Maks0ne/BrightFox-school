import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import ActionButton from '@/components/ui/ActionButton';
import theme from '@/theme';

interface ICoursePageStandartCardProps {
  title: string;
  price: number;
  onCardClick: () => void;
}
const CoursePageStandartCard: FC<ICoursePageStandartCardProps> = ({
  title,
  price,
  onCardClick,
}) => {
  const t = useTranslations('coursePageCard');
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '30%',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
        borderRadius: '16px',
        padding: '2rem',
        gap: '1rem',
        [theme.breakpoints.down('md')]: {
          width: '45%',
        },
        [theme.breakpoints.down('sm')]: {
          width: '70%',
        },
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '1.4rem',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'secondary.main',
          fontWeight: 700,
          fontSize: '2rem',
        }}
      >
        {`${price} ${t('pricePerLesson')}`}
      </Typography>

      <ActionButton onClick={onCardClick} sx={{ maxWidth: '100%', marginTop: 'auto' }}>
        {t('button')}
      </ActionButton>
    </Box>
  );
};

export default CoursePageStandartCard;
