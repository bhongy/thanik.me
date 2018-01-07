import React from 'react';
import Helmet from 'react-helmet';
import Footer from './footer';
import s from './index.module.css';

import 'normalize.css';

const TemplateWrapper = ({ children, data }) => (
  <div className={s.page}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <div className={s.pageContent}>{children()}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
