import DefaultDocument, {Html, Head, Main, NextScript} from 'next/document';

const uri = {
  normalizeCss:
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
};

export default class Document extends DefaultDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/* next.js does not inline font style properly if `href` is passed via a variable */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&amp;display=optional" />
          <link rel="stylesheet" href={uri.normalizeCss} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
