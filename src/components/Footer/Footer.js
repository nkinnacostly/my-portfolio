import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:+2348122204698">+2348122204698</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:ayancostly@gmail.com">Ayangcostly@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one Project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/heiscostly">
           <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/ayangcostly">
           <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/heiscostly">
           <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/heiscostly">
           <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
