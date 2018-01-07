import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Container from '../components/container';
import s from './index.module.css';

import 'normalize.css';

const Footer = () => (
  <footer className={s.footer}>
    <Container>
      <p>See what I'm upto on Twitter and Github.</p>
      <p>
        Site inspired by{' '}
        <a href="http://frantic.im/writing/">Alex Kotliarskyi's Website</a>.
      </p>
      <p>
        Site built with{' '}
        <a href="https://github.com/gatsbyjs/gatsby#showcase">GatsbyJS</a>.
      </p>
    </Container>
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div className={s.page}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className={s.pageContainer}>{children()}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
