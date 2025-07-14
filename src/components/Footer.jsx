import React from 'react';
import styled from 'styled-components';
import config from 'config';
import { ReactComponent as Heart } from 'images/heart.svg';

const StyledContainer = styled.div`
  padding: 3rem 0;
  text-align: center;
  font-size: 0.7em;
  .v {
    font-family: ${p => p.theme.fontFixed};
  }
    svg {
    height: 1em;
    color: crimson;
    margin: 0 0 -0.25rem 0;
  }
  .the-classic-adding-green-colour-to-green{
    color: hsla(105, 47%, 48%);
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
     <StyledContainer>
      <span className="v">Version: {config.version}</span>
      <br />
      Written 
      by{' '}
      <a href="#" title="Tim">
        Tim <span class="the-classic-adding-green-colour-to-green">Green</span>
      </a>
      <br />{' '}
      <a href="https://github.com/tim-green/password-generator" title="See the code on GitHub">
        GitHub
      </a>
    </StyledContainer>
  );
};

export default Footer;
