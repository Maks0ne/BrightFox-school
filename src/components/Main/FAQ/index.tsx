'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';

import AccordionItem from './AccordionItem';

import { Typography } from '@mui/material';

import Container from '@/components/Layout/Container';

const FAQlist: FC = () => {
  const t = useTranslations('Faq');

  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: '4rem' }}>
        {t('title')}
      </Typography>
      <AccordionItem answer={t('answer1')} question={t('question1')} />
      <AccordionItem answer={t('answer2')} question={t('question2')} />
      <AccordionItem answer={t('answer3')} question={t('question3')} />
      <AccordionItem answer={t('answer4')} question={t('question4')} />
      <AccordionItem answer={t('answer5')} question={t('question5')} />
      <AccordionItem answer={t('answer6')} question={t('question6')} />
      <AccordionItem answer={t('answer7')} question={t('question7')} />
      <AccordionItem answer={t('answer8')} question={t('question8')} />
    </Container>
  );
};

export default FAQlist;
