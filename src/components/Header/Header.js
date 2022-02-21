import Link from 'next/link';
import Head  from 'next/head';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Head>
        <title>Costly Ayang</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems:"center", color:"white", marginBottom:"20px"}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink> About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
