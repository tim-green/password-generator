import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  margin: 3rem 0;
  p,
  ul {
    font-size: 0.9em;
  }
  ul {
    padding: 0 0 0 2.5rem;
  }
  li {
    margin: 1rem 0 1.25rem;
    list-style: none;
    position: relative;
    line-height: 1.5;
  }
  li:last-child {
    margin: 1rem 0 0;
  }
  li:before {
    content: '*';
    position: absolute;
    left: -2.25rem;
    top: 0;
    font-weight: bold;
    font-size: 1.25em;
    line-height: 1.2;
  }
`;

export default function About() {
  return (
    <Styles>
      <h2 id="about">Good password hygiene</h2>
      <p>
        Don’t be a{' '}
        <a
          href="https://www.tracesecurity.com/blog/articles/81-of-company-data-breaches-due-to-poor-passwords"
          title="81% of data breaches due to poor passwords"
        >
          statistic
        </a>
        ! Secure passwords are your first defense when safeguarding against threats
        online.
      </p>
       <ul>
        <li>Don’t use personal info in your passwords, like your dog’s birthday or even qwerty or just password.</li>
        <li>
          Don’t share credentials over email or text message. They’re completely wide-open
          to interception by third-parties.
        </li>
        <li>
          Use a different password for every account. If a hacker hacks that site you used once months ago and you still reusing the same password on all of your accounts, you may be up the that certain creek. and now you have to change the
          password on all of your other accounts and that sucks, that why you should have a unique password
          for every account is pretty much impossible without a password manager...
        </li>
        <li>
          Use a password manager. You have{' '}
          <a
            href="https://www.google.com/search?q=password+manager"
            title="Hey google, can you search for 'password manager'"
          >
            plenty of great options
          </a>  
          , many of these password managers include a free tier and even get one with a mobile app that syncs
          between all your devices, that way you’ll always have your passwords on you. Use
          a long but easy to remember "master"{' '}
          <a href="https://xkcd.com/936/" title="Here's XKCD comic about password strength">
            passphrase
          </a>{' '}
          like <em>city-accuracy-vehicle-shall-box</em> to secure your password vault,
          and long random passwords for individual accounts. Thankfully, browsers and
          operating systems now almost all have basic password management built it. And
          with the rise of biometric access controls (Face ID, et al) there’s really no
          excuse not to use long complex passwords everywhere.
        </li>
        <li>
          Answer security questions with random passwords or passphrases and store them in
          your password manager too. Some of this information, like your mother’s maiden
          name, is bound to be already be floating around out there. Most managers now
          include this functionality.
        </li>
        <li>
          Change your “master” password periodically. It only takes a few minutes to
          permanently memorize a 5-word passphrase.
        </li>
        <li>
          If you don't want to use Google to search for a password manager you can simple just my recommendation and use  <a
            href="https://proton.me/pass"
            title="if you don't want to google, just go with Proton Pass'"
          >
            proton pass
          </a>.
        </li>
      </ul>
    </Styles>
  );
}
