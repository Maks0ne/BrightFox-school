import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import saleImg1 from '@/assets/images/CoursesPage/sale1.png';
import saleImg2 from '@/assets/images/CoursesPage/sale2.png';
import saleImg3 from '@/assets/images/CoursesPage/sale3.png';
import saleImg4 from '@/assets/images/CoursesPage/sale4.png';
import saleImg5 from '@/assets/images/CoursesPage/sale5.png';
import ActionButton from '@/components/ui/ActionButton';
import theme from '@/theme';

const saleImages: StaticImageData[] = [saleImg1, saleImg2, saleImg3, saleImg4, saleImg5];

interface ICoursePageCardProps {
  totalLessons: number;
  title: string;
  standartPrice: number;
  price: number;
  onCardClick: () => void;
}
const CoursePageCard: FC<ICoursePageCardProps> = ({
  totalLessons,
  title,
  standartPrice,
  price,
  onCardClick,
}) => {
  const oldTotalPrice = totalLessons * standartPrice;
  const totalPrice = totalLessons * price;
  const discount = oldTotalPrice - totalPrice;
  const t = useTranslations('coursePageCard');
  const [randomSaleImg, setRandomSaleImg] = useState<StaticImageData>(saleImages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * saleImages.length);
    setRandomSaleImg(saleImages[randomIndex]);
  }, []);
  return (
    <Box
      sx={{
        position: 'relative',
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
      <Image
        src={randomSaleImg}
        width={64}
        height={64}
        style={{ position: 'absolute', left: '85%', top: '-5%' }}
        alt="sale"
      />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '1.4rem',
        }}
      >
        {`${totalLessons} ${title}`}
      </Typography>
      <Typography
        sx={{
          textDecoration: 'line-through',
          fontWeight: 700,
          fontSize: '1.4rem',
        }}
      >{`${oldTotalPrice} ${t('currency')}`}</Typography>
      <Typography variant="subtitle2">{`${totalPrice} ${t('currency')}`}</Typography>
      <Typography
        sx={{
          color: 'secondary.main',
          fontWeight: 700,
          fontSize: '2rem',
        }}
      >
        {`${price} ${t('pricePerLesson')}`}
      </Typography>
      <Typography variant="subtitle2">{t('packageBenefit')}</Typography>
      <Typography color={'secondary.main'} fontWeight={700} variant="body2">
        {`${t('discount')} ${discount} ${t('currency')}`}
      </Typography>
      <ActionButton onClick={onCardClick} sx={{ maxWidth: '100%' }}>
        {t('button')}
      </ActionButton>
    </Box>
  );
};

export default CoursePageCard;
