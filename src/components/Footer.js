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
`;

const Footer = () => {
  return (
    <StyledContainer>
      <span className="v">v{config.version}</span>
      <br />
      Coded by with{' '}
      <span role="img" aria-label="love">
        <Heart />
      </span>{' '}
      by{' '}
      <a href="#" title="Tim">
        TG
      </a>
      <br />{' '}
      <a href="#" title="See the code on GitHub">
        Gitty
      </a>
    </StyledContainer>
  );
};

export default Footer;
