import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/container';
import s from './footer.module.css';

const ref = {
  frantic: 'http://frantic.im/writing/',
  gatsby: 'https://github.com/gatsbyjs/gatsby#showcase',
};

const Footer = () => (
  <footer className={s.footer}>
    <Container>
      <p>See what I'm upto on Twitter and Github.</p>
      <p>
        Site inspired by <a href={ref.frantic}>Alex Kotliarskyi's Website</a>.
      </p>
      <p>
        Site built with <a href={ref.gatsby}>GatsbyJS</a>.
      </p>
    </Container>
  </footer>
);

export default Footer;
