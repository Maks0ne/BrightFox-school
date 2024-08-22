import { FC } from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import theme from '@/theme';

interface IAccordionProps {
  question: string;
  answer: string;
}
const AccordionItem: FC<IAccordionProps> = ({ question, answer }) => {
  return (
    <Accordion
      sx={{
        width: '70%',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 1)',
        [theme.breakpoints.down('md')]: {
          width: '90%',
        },
      }}
    >
      <AccordionSummary expandIcon={<ArrowDownwardIcon sx={{ color: 'grey.50' }} />}>
        <Typography variant="subtitle2" sx={{ padding: '1.5rem 0' }}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" sx={{ paddingBottom: '1.5rem' }}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
