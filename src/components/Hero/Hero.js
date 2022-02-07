import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br/> My Personal Portfolio
          </SectionTitle>
          <SectionText>
          Hi. I’m Costly Ayang, a passionate and innovative front-end developer. I build web applications and products using existing and new technologies to deliver seamless and intuitive user experience.
          </SectionText>
          <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
        </LeftSection>
  </Section>
);

export default Hero;