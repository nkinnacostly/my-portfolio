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
          <Button onClick={() => window.location = "https://docs.google.com/document/d/1ujfVa2Xaz28Z5X2MKEt978s6ds771Kj_/edit?usp=sharing&ouid=116423821784387990188&rtpof=true&sd=true"}>Learn More</Button>
        </LeftSection>
  </Section>
);

export default Hero;