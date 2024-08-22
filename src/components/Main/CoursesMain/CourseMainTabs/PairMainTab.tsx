import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';

import CoursesMainCard from '../СoursesMainCard';

import { Box, Divider, List, ListItem, Typography } from '@mui/material';

import image from '@/assets/images/MainCards/pair.webp';
import { useLocalizedPath } from '@/hooks/useLocalHelper';
import theme from '@/theme';

const PairMainTab: FC = () => {
  const t = useTranslations('CoursesMain');
  const { localizedPath } = useLocalizedPath();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          margin: '2rem',
          gap: '2rem',
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
          },
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              flex: 1,
              color: 'grey.800',
              fontWeight: 800,
              marginBottom: '2rem',
            }}
          >
            {t('PairTitle')}
          </Typography>
          <List
            sx={{
              color: 'primary.main',
              fontSize: '1.4rem',
              fontWeight: 700,
              listStyleType: 'disc',
              paddingLeft: '1rem',
              '& .MuiListItem-root': {
                display: 'list-item',
              },
            }}
          >
            <ListItem>{t('PairBenefits1')}</ListItem>
            <ListItem>{t('PairBenefits2')}</ListItem>
            <ListItem>{t('PairBenefits3')}</ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              height: '30vh',
            },
          }}
        >
          <Image
            src={image}
            fill
            alt={'Pair of students'}
            quality={100}
            style={{
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
            }}
          />
        </Box>
      </Box>
      <Divider sx={{ margin: '4rem 0', borderColor: 'primary.main' }} variant="middle" />
      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}
      >
        <CoursesMainCard
          title={t('PairCard1Title')}
          price={220}
          description={t('PairCard1Description')}
          redirectUrl={`${localizedPath}/courses/pair`}
        />
      </Box>
    </Box>
  );
};

export default PairMainTab;
