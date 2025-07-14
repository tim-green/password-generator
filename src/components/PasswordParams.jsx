import React from 'react';
import styled, { css } from 'styled-components';
import config from 'config';
import { media } from 'styles/helpers';
import InputRow from 'components/common/InputRow';
import CheckBox from 'components/common/CheckBox';
import RangeSlider from 'components/common/RangeSlider';

const Slider = styled(RangeSlider)`
  ${media.tablet`
    width: 70%;
  `}
`;

const Styles = styled.div`
  padding: 2rem;
  .checkboxes {
    > div {
      flex-basis: 50%;
      margin-right: 0;
    }
  }
  ${media.tablet`    
  .checkboxes {
    > div {
      flex-basis: auto;
      margin-right: 3rem;
    }
  }
  `}
  ${p =>
    p.isPwaMode &&
    css`
      padding: 1rem 2rem;
      & div:first-child {
        margin-top: 0;
      }
    `}
`;

export default function PasswordParams({ values, onChange, isPwaMode }) {
  const { modes } = config;
  const pwValues = values[modes.PW];
  return (
    <Styles isPwaMode={isPwaMode}>
      {!isPwaMode && (
         <p>
          Long passphrases are easy to remember (and type!) and are often just as secure
          as a random string of characters, especially when they're longer than a password
          would be. Makes a great choice for your "master" password.
        </p>
      )}
      <InputRow>
        <Slider
          label="Length"
          name="length"
          value={pwValues.length}
          min={8}
          max={48}
          onChange={onChange}
          title="Adjust password length"
        />
      </InputRow>
      Characters
      <InputRow className="checkboxes">
        <CheckBox
          label="abc"
          name="lower"
          checked={pwValues.lower}
          onChange={onChange}
          title="Include lowercase letter"
        />
        <CheckBox
          label="ABC"
          name="upper"
          checked={pwValues.upper}
          onChange={onChange}
          title="Include uppercase letter"
        />
        <CheckBox
          label="123"
          name="numbers"
          checked={pwValues.numbers}
          onChange={onChange}
          title="Include numbers"
        />
        <CheckBox
          label="$@!"
          name="symbols"
          checked={pwValues.symbols}
          onChange={onChange}
          title="Include symbols"
        />
      </InputRow>
    </Styles>
  );
}
