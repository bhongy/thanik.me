import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/container';
import s from './footer.module.css';

const ref = {
  twitter: 'https://twitter.com/bhongbhibhat',
  github: 'https://github.com/bhongy',
  frantic: 'http://frantic.im/writing/',
  gatsby: 'https://github.com/gatsbyjs/gatsby#showcase',
};

// TODO: figure out "the Gatsby & Typography.js way"
// to set typography style for a section - e.g. footer

// TODO: figure out "the Gatsby way" to create external link

const Footer = () => (
  <footer className={s.footer}>
    <Container>
      <p>See what I'm upto on <a href={ref.twitter}>Twitter</a> and <a href={ref.github}>Github</a>.</p>
    </Container>
    <div className={s.credits}>
      <Container>
        Site inspired by <a href={ref.frantic}>Alex Kotliarskyi's Website</a>
        {' • '}
        Site built with <a href={ref.gatsby}>GatsbyJS</a>.
      </Container>
    </div>
  </footer>
);

export default Footer;
