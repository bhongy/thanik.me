import * as React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Footer } from './Footer';

const PageLayout = ({ children }) => (
  <React.Fragment>
    <div className="page">
      <div className="pageContent">{children}</div>
      <Footer />
    </div>
    <style jsx>{`
      .page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .pageContent {
        flex: 1;
        padding-top: 8rem;
      }
    `}</style>
    <GlobalStyle />
  </React.Fragment>
);

export { PageLayout };
