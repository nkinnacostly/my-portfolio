import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'DSC Core Team Member Certificate'},
  { number: 1, text: 'Google Ads Manager Certificate', },
  { number: 163, text: 'Twitter Followers', },
  { number: 79, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishment</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
