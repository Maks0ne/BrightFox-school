import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import ActionButton from '@/components/ui/ActionButton';
import theme from '@/theme';

interface ICourseMainCardProps {
  title: string;
  description: string;
  price: number;
  redirectUrl: string;
}

const CoursesMainCard: FC<ICourseMainCardProps> = ({ title, description, price, redirectUrl }) => {
  const t = useTranslations('CoursesMain');

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '30%',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
          width: '45%',
        },
        [theme.breakpoints.down('sm')]: {
          width: '65%',
        },
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      }}
    >
      <Typography color={'secondary.main'} variant="subtitle2">
        {title}
      </Typography>
      <Typography fontWeight={700} variant="body2">
        {description}
      </Typography>
      <Typography fontSize={'1.2rem'} fontWeight={900}>
        {`${t('PriceFrom')}: ${price} ${t('Currency')}`}
      </Typography>
      <Link href={redirectUrl} passHref>
        <ActionButton sx={{ marginTop: 'auto', maxWidth: '100%' }}>{t('MoreDetails')}</ActionButton>
      </Link>
    </Box>
  );
};

export default CoursesMainCard;
